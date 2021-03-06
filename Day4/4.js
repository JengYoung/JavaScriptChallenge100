const message = document.querySelector('.message');
const startBtn = document.querySelector('.startBtn');
const Input = document.querySelector('input');

function show() {
    const inputValue = Input.value;
    message.textContent = inputValue;
    Input.value = '';
}

function printError() {
    message.textContent = 'Input any messages';
    setTimeout(() => message.textContent = '', 2000)
}

startBtn.addEventListener('click', () => {
    Input.value ? show() : printError()
})
Input.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') Input.value ? show() : printError();
})