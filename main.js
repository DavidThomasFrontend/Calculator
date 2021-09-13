const calcScreen = document.querySelector('.calculator-screen')
const buttons = document.querySelectorAll('button[id]')


buttons.forEach(btn => {
    btn.addEventListener('click', function (){
        inputNumber(this.id)
    });
});

const inputNumber = number => {
    const screenNumber = screenDisplay.innerHtml;
    if (screenNumber.length < 16) // limiting the number that can be inserted so you dont excede the limit and get something like 3.333333333333333e+21
    screenDisplay.innerHTML = parseInt(screenNumber + number).toString();
}
