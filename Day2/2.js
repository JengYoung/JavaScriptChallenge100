const colorChangeBtn = document.querySelector('.colorChangeBtn');
const colorText = document.querySelector('.color-text');
const body = document.querySelector('body');

colorChangeBtn.addEventListener('click', () => {
    const cases = 16**6-1
    let randomColorNum = parseInt(Math.random() * cases).toString(16);
    if (randomColorNum.length !== 6) {
        while (randomColorNum.length !== 6) {
            randomColorNum = '0' + randomColorNum;
        }
    }
    body.style.backgroundColor = `#${randomColorNum}`
    colorText.textContent = `HEX COLOR :#${randomColorNum.toUpperCase()}`;
})
