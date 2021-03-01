const decreaseBtn = document.querySelector('.decrease.Btn');
const increaseBtn = document.querySelector('.increase.Btn');
const num = document.querySelector('.num');

function BtnHandler(val) {
    num.textContent = parseInt(num.textContent) + val;
}

increaseBtn.addEventListener('click', () => BtnHandler(1));
decreaseBtn.addEventListener('click', () => BtnHandler(-1));