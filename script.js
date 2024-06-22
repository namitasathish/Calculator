const display = document.getElementById('display');
var displayValue = '';

const buttons = document.querySelectorAll('button');
buttons.forEach(button => {
    button.addEventListener('click', () => {
        const buttonText = button.innerText;

        if (buttonText === 'C') {
            displayValue = '';
        } else if (buttonText === '=') {
            displayValue = eval(displayValue.replace('x', '*').replace('pow', '**').replace('sqrt', 'Math.sqrt'));
        } else if (buttonText === 'pi') {
            displayValue += Math.PI;
        } else if (buttonText === 'pow') {
            displayValue += '**';
        } else if (buttonText === 'sqrt') {
            displayValue += " "+"sqrt=>"+Math.sqrt(eval(displayValue));
        } else {
            displayValue += buttonText;
        }

        display.innerText = displayValue || '0';
    });
});