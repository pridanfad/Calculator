let prompt = '0';
let display = '0';
let result = '';

const screen = document.querySelector('.screen');
const keys = document.querySelector('.keys');

const inputNumber = (number) => {
    if (display === '0') {
        display = number;
        prompt = number;
    } else if (result !== '') {
        result = '';
        display = number;
        prompt = number;
    } else if (prompt.slice(-4) === '/100') {
        prompt += '';
        display += '';
    } else {
        display += number;
        prompt += number;
    };
};

const inputOperator = (oprPrompt, oprDisplay) => {
    if (['+', '-', '/', '*', '.'].includes(prompt.slice(-1))) {
        prompt = prompt.slice(0, -1);
        prompt += oprPrompt;
        display = display.slice(0, -1);
        display += oprDisplay;
    } else {
        result = '';
        prompt += oprPrompt;
        display += oprDisplay;
    };
};

const clearAll = () => {
    prompt = '0';
    display = '0';
    result = '';
};

const screenUpdate = (number) => {
    screen.value = number;
};

const calcResult = (number) => {
    if (['+', '-', '/', '*'].some(opr => prompt.includes(opr))) {
        result = eval(number);
        prompt = result.toString();
        display = result.toString();
    }
};

keys.addEventListener('click', (event) => {
    if (event.target.className.includes('number')) {
        inputNumber(event.target.value);
        screenUpdate(display);
        console.log(`display\t: ${display}`);
        console.log(`prompt\t: ${prompt}`);
        console.log(`result\t: ${result}`);
        console.log(``);
    } else if (event.target.className == 'operator') {
        inputOperator(event.target.value, event.target.innerHTML);
        screenUpdate(display);
        console.log(`display\t: ${display}`);
        console.log(`prompt\t: ${prompt}`);
        console.log(`result\t: ${result}`);
        console.log(``);
    } else if (event.target.className == 'all-clear') {
        clearAll();
        screenUpdate(display);
        console.log(`display\t: ${display}`);
        console.log(`prompt\t: ${prompt}`);
        console.log(`result\t: ${result}`);
        console.log(``);
    } else if (event.target.className == 'percentage') {
        inputOperator('/100', event.target.value);
        screenUpdate(display);
        console.log(`display\t: ${display}`);
        console.log(`prompt\t: ${prompt}`);
        console.log(`result\t: ${result}`);
        console.log(``);
    } else if (event.target.className == 'decimal') {
        inputOperator(event.target.value, event.target.innerHTML);
        screenUpdate(display);
        console.log(`display\t: ${display}`);
        console.log(`prompt\t: ${prompt}`);
        console.log(`result\t: ${result}`);
        console.log(``);
    } else {
        calcResult(prompt);
        screenUpdate(display);
        console.log(`display\t: ${display}`);
        console.log(`prompt\t: ${prompt}`);
        console.log(`result\t: ${result}`);
        console.log(``);
    };
});