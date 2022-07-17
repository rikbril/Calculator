let activeScreen = document.getElementById("activeScreen")
let memoryScreen = document.getElementById("memoryScreen")

let activeSum = "0"
let storedSum = ""
let operator = ""
let hasOperator = false

function calculatorInput() {
    const buttons = document.querySelectorAll("button")
    buttons.forEach(button => {
        button.addEventListener("click", () => {
            let buttonText = button.innerText
            const numberArray = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"]
            if (buttonText in numberArray || buttonText == ".") {
                if (activeSum == "0") {
                    activeSum = buttonText
                } else {
                    activeSum = activeSum + buttonText
                }
                activeScreen.textContent = activeSum
            } else if (buttonText == "clear"){
                operator = ""
                activeSum = "0"
                storedSum = ""
                activeScreen.innerText = "0"
                memoryScreen.innerText = ""
                hasOperator = false
            } else if (buttonText == "delete") {
                if (activeSum.length > 1) {
                    activeSum = activeSum.slice(0, -1)
                } else if (activeSum.length == 1) {
                    activeSum = "0"
                }
            } else if (buttonText == "=") {
                const result = calculatorOperators(operator, activeSum, storedSum)
                memoryScreen.innerText = result
                activeScreen.innerText = "0"
                hasOperator = true
            }   
            else {
                operator = buttonText
                if (!hasOperator) {
                    storedSum = activeSum
                    activeSum = ""
                    memoryScreen.innerText = activeScreen.innerText + " " + operator
                    activeScreen.innerText = "0"
                } else { 
                    storedSum = memoryScreen.innerText
                    memoryScreen.innerHTML = memoryScreen.innerText + " " + operator
                    activeSum = ""
                }
            }
        })
    });
}




//calculates the sum
function calculatorOperators(operator, activeSum, storedSum) {
    console.log("active sum :" + activeSum + " storedSum :" + storedSum)
    if (operator == "+") {
        return (+storedSum) + (+activeSum)
    } else if (operator == "-") {
        return (+storedSum) - (+activeSum)
    } else if (operator == "/") {
        return (+storedSum) / (+activeSum)
    } else if (operator == "*") {
        return (+storedSum) * (+activeSum)
    }
    



}





calculatorInput()
