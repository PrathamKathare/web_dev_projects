let memory = 0;

function clearDisplay() {
    document.getElementById('display').value = '';
}

function appendToDisplay(value) {
    document.getElementById('display').value += value;
}

function calculate() {
    const display = document.getElementById('display');
    try {
        display.value = eval(display.value);
    } catch (error) {
        display.value = 'Error';
    }
}

function calculateSquareRoot() {
    const display = document.getElementById('display');
    display.value = Math.sqrt(display.value);
}

function calculatePercentage() {
    const display = document.getElementById('display');
    display.value = parseFloat(display.value) / 100;
}

function storeInMemory() {
    const display = document.getElementById('display');
    memory = parseFloat(display.value);
    alert('Value stored in memory: ' + memory);
}

function clearMemory() {
    memory = 0;
    alert('Memory cleared');
}

function recallMemory() {
    const display = document.getElementById('display');
    display.value = memory;
}

function calculateSquare() {
    const display = document.getElementById('display');
    display.value = Math.pow(display.value, 2);
}

function toggleNegation() {
    const display = document.getElementById('display');
    display.value = display.value * -1;
}

function toggleTheme() {
    document.body.classList.toggle('dark');
    const themeIcon = document.querySelector('.theme-toggle');
    if (document.body.classList.contains('dark')) {
        themeIcon.textContent = '🌞';
    } else {
        themeIcon.textContent = '🌙';
    }
}
