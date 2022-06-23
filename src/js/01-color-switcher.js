const startBtn = document.querySelector('[data-start]');
const stopBtn = document.querySelector('[data-stop]');
const bodyEl = document.querySelector('body');
let timerId = null;
stopBtn.disabled = true;

startBtn.addEventListener('click', changeColor);
stopBtn.addEventListener('click', stopChangeColor);

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

function changeColor() {
    startBtn.disabled = true;
    stopBtn.disabled = false;
    timerId = setInterval(() => {
        const currentColor = getRandomHexColor();
        bodyEl.style.backgroundColor = currentColor;
    }, 1000);
}

function stopChangeColor() {
    clearInterval(timerId);
    startBtn.disabled = false;
    stopBtn.disabled = true;
}