const buttons = document.querySelectorAll('.button');
const operators = document.querySelectorAll('.color');
const inputDisplay = document.getElementById('displayInput');
const clear = document.querySelector('.grey');
const resultDisplay = document.getElementById('resultInput');
const equal = document.getElementById('equal');

let result = 0;
let result2 = 0;
let value = "";
let value2 = "";
let savedValue = "";
let operator = "";


//number1
for (let i=0; i<buttons.length; i++) {
    buttons[i].addEventListener('click', e => {
        if (operator === "" && value.length<5){
        value += e.target.textContent;
        inputDisplay.textContent = value;    
      } 
    })
}

//operator input
for(let i=0; i<operators.length; i++) {
    operators[i].addEventListener('click', e => {
    if (operator.length<1){
        operator = e.target.textContent; 
        value += operator;
        inputDisplay.textContent = value;
    } 
})
}

//number2
for (let i=0; i<buttons.length; i++) {
    buttons[i].addEventListener('click', e => {
        if (operator !== "" && value2.length<5){
            value2 += e.target.textContent;
            value += value2;
            inputDisplay.textContent = value;  
            if (value !== 0) count();
          } 
})
}

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
            if(value == 0) break;
            result = value/value2;
            break;
        default:
            break;
    }
    resultDisplay.textContent = result;

    value = result;
    operator = '';
}

equal.addEventListener('click', () => {
    inputDisplay.textContent = value; 
    resultDisplay.textContent = "";
    value2 = "";
})

//clear 
clear.addEventListener('click', function(){
    value = "";
    result = 0;
    operator = "";
    displayInput.textContent = 0;
    resultInput.textContent = 0;
});







