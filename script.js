const buttons = document.querySelectorAll('.button');
const operators = document.querySelectorAll('.color');
const inputDisplay = document.getElementById('displayInput');
const clear = document.getElementById('clear');
const resultDisplay = document.getElementById('resultInput');
const equal = document.getElementById('equal');
const dot = document.getElementById('dot');
const percent = document.getElementById('percent');

let result = null;
let value = "";
let value2 = "";
let displayValue = "";
let operator = "";


//number1
for (let i=0; i<buttons.length; i++) {
    buttons[i].addEventListener('click', e => {
        if (operator === "" && value.length<5){
        value += e.target.textContent;
        displayValue += e.target.textContent;
        inputDisplay.textContent = displayValue;    
      } 
    })
}

//operator input
for(let i=0; i<operators.length; i++) {
    operators[i].addEventListener('click', e => {
    if (operator.length<1  && result === null){
        operator = e.target.textContent; 
        displayValue += operator;
        inputDisplay.textContent = displayValue;
    } 
    else if (result !== null) {
        operator = e.target.textContent;
        value = result;
        value2 = "";
        result = null;
        displayValue = value + operator;
        inputDisplay.textContent = displayValue;
        resultDisplay.textContent = "";
    }
})
}

//number2
for (let i=0; i<buttons.length; i++) {
    buttons[i].addEventListener('click', e => {
        if (operator !== "" && value2.length<5){
            value2 += e.target.textContent;
            displayValue += e.target.textContent;
            inputDisplay.textContent = displayValue;
            count();
        } 
})
}

//dot
dot.addEventListener('click', e => {
    if (operator === "" && !value.includes(".")){
        value += e.target.textContent;
        displayValue += e.target.textContent;
    } else if (!value2.includes(".")){
        value2 += e.target.textContent;
        displayValue += e.target.textContent;
    }
    inputDisplay.textContent = displayValue;
})

function count(){
  value = parseFloat(value);
  value2 = parseFloat(value2);

    switch (operator){
        case '+':
            result = value + value2;
            break;
        case '-':
            result = value - value2;
            break;
        case '*':
            result = value * value2;
            break;
        case '/':
            result = value/value2;
            break;
        default:
            break;
    }
    result = parseFloat(result.toFixed(6));
    resultDisplay.textContent = result.toPrecision();
    value2 = value2.toString();
}

equal.addEventListener('click', () => {
    operator = '';
    value = result;
    value2 = "";
    displayValue = value;
    result = null;
    inputDisplay.textContent = displayValue;
    resultDisplay.textContent = "";  
})

percent.addEventListener('click', () => {
    value = parseFloat(value);
    result = value/100;
    displayValue = value + "%";
    inputDisplay.textContent = displayValue;
    resultDisplay.textContent = result;
})

//clear 
clear.addEventListener('click', function(){
    value = "";
    result = null;
    operator = "";
    displayValue = "";
    value2 = "";
    displayInput.textContent = 0;
    resultInput.textContent = "";
});







