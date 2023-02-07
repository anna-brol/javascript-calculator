const buttons = document.querySelectorAll('.button');
const operators = document.getElementsByClassName('color');
const display = document.getElementById('display');

let result = 0;
let value = "";

for (let i=0; i<buttons.length; i++) {
    buttons[i].addEventListener('click', e => {
        value += e.target.textContent;
        display.textContent = value;
        
    })
}







