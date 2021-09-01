let counterDisplay = document.querySelector('.display');
let counterPlus = document.querySelector('.button');
let counterMinus = document.querySelector('.button-minus');
let counterReset = document.querySelector('.button-reset');


let count = 0;

updateDisplay();


counterPlus.addEventListener('click', () => {
    count ++;
    updateDisplay();
});

counterMinus.addEventListener('click', () => {
    count --;
    updateDisplay();;
});

counterReset.addEventListener('click', () =>{
    count = 0;
    updateDisplay();
})

function updateDisplay() {
    counterDisplay.innerHTML = count;
}