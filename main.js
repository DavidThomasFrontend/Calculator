const numberButtons = document.querySelectorAll('.data-number'); //queryselectorall is used here because these buttons appear several times in the calculator
const operatorButtons = document.querySelectorAll('.data-operation');
const equalButton = document.querySelector('.data-equals');
const deleteButton = document.querySelector('.data-delete');
const clearButton = document.querySelector('.data-clear');
const previousOperandTextElement = document.querySelector('.data-previous-operand');
const currentOperandTextElement = document.querySelector('.data-current-operand');

class Calculator{
    constructor(previousOperandTextElement, currentOperandTextElement) {
        this.previousOperandTextElement = previousOperandTextElement
        this.currentOperandTextElement = currentOperandTextElement
        this.clear()
    }
};

const calculator = new Calculator(previousOperandTextElement, currentOperandTextElement);

numberButtons.forEach(button => {
    button.addEventListener('click', () => {
        calculator.appendNumber(button.innerText)
        calculator.updateDisplay()
    })
});

clear() {
    this.currentOperand = ''
    this.previousOperand = ''
    this.operation = undefined
};

delete() {

};

appendNumber(number) {
    if (number === '.' && this.currentOperand.includes('.')) return
    this.currentOperand = this.currentOperand.toString() + number.toString()
};

chooseOperation(operation) {

};

compute() {

};

updateDisplay() {
    this.currentOperandTextElement.innerText = this.currentOperand
};