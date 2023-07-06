class Calculator{

    constructor(previousOperandText, currentOperandText){
        this.previousOperandText = previousOperandText
        this.currentOperandText = currentOperandText
        this.clear()
    }

    clear(){
        this.currentOperand = ''
        this.previousOperand = ''
        this.operator = undefined
    }

    delete(){
        this.currentOperand = this.currentOperand.toString().slice(0, -1)
    }

    chooseoperator(operator){
        if(this.currentOperand === '') return
        if(this.previousOperand !== ''){
            this.compute()
        }
        this.operator = operator
        this.previousOperand = this.currentOperand
        this.currentOperand = ''
    }

    appendNumber(number){

        if (number === '.' && this.currentOperand.includes('.')) return
        this.currentOperand = this.currentOperand.toString() + number.toString()
    }

    compute(){
        let computation
        const prev = parseFloat(this.previousOperand)
        const current = parseFloat(this.currentOperand)
        if(isNaN(prev) || isNaN(current)) return

        switch (this.operator){
            case '+':
                computation = prev + current
                break
            case '-':
                computation = prev - current
                break
            case '*':
                computation = prev * current
                break
            case '÷':
                computation = prev / current
                break
            default:
                return
        }

        this.currentOperand = computation
        this.operator = undefined
        this.previousOperand = ''
    }

    updateDisplay(){
        this.currentOperandText.innerText = this.currentOperand
        if(this.operator != null){
            this.previousOperandText.innerText = 
            `${this.previousOperand} ${this.operator}`
        }
        else  this.previousOperandText.innerText = ''
    }

}

const clearallButton = document.querySelector('[data-clear]')
const deleteButton = document.querySelector('[data-delete]')
const numberButton = document.querySelectorAll('[data-number]')
const operatorButton = document.querySelectorAll('[data-operator]')
const equalsButton = document.querySelector('[data-equalsto]')
const previousOperandText = document.querySelector('[data-previous-operand]')
const currentOperandText = document.querySelector('[data-current-operand]')



const calculator = new Calculator(previousOperandText, currentOperandText);

numberButton.forEach(button => {
    button.addEventListener('click', () =>{
        calculator.appendNumber(button.innerText)
        calculator.updateDisplay()
    })
})

clearallButton.addEventListener('click', button =>{
    calculator.clear()
    calculator.updateDisplay()
})

operatorButton.forEach(button => {
    button.addEventListener('click', () =>{
        calculator.chooseoperator(button.innerText)
        calculator.updateDisplay()
    })
})

equalsButton.addEventListener('click', button =>{
    calculator.compute()
    calculator.updateDisplay()
})

deleteButton.addEventListener('click', button =>{
    calculator.delete()
    calculator.updateDisplay()
})

