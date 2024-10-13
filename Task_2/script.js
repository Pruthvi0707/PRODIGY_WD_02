let startTime, interval;
const display = document.getElementById('display');

document.getElementById('start').addEventListener('click', () => {
    startTime = Date.now();
    interval = setInterval(updateDisplay, 1000);
});

document.getElementById('stop').addEventListener('click', () => {
    clearInterval(interval);
});

document.getElementById('reset').addEventListener('click', () => {
    clearInterval(interval);
    display.textContent = '00:00:00';
});

function updateDisplay() {
    const elapsedTime = Date.now() - startTime;
    const hours = String(Math.floor(elapsedTime / 3600000)).padStart(2, '0');
    const minutes = String(Math.floor((elapsedTime % 3600000) / 60000)).padStart(2, '0');
    const seconds = String(Math.floor((elapsedTime % 60000) / 1000)).padStart(2, '0');
    display.textContent = `${hours}:${minutes}:${seconds}`;
}
