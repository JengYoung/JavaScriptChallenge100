const changeBtn = document.querySelector('.changeBtn');
const body = document.querySelector('body');
changeBtn.addEventListener('click', () => {
    const casesNum = 16**6-1
    const randomNum = parseInt(Math.random()*casesNum);
    body.style.backgroundColor = `#${randomNum.toString(16)}`;
})