const wiseSayings = [
    {
        name: '강수진',
        saying: '나의 유일한 경쟁자는 어제의 나다. 눈을 뜨면 어제 살았던 나보다 더 가슴 벅차고 열정적인 하루를 살려고 노력한다. 연습실에 들어서며, 어제 한 연습보다 더 강도 높은 연습을 한 번, 1분이라도 더 하기로 마음 먹는다. 어제를 넘어선 오늘을 사는 것. 이것이 내 삶의 모토다.'
    },
    {
        name: '석주명',
        saying: '남이 하지 않는 일을 10년 하면 꼭 성공한다. 천재적 자질보다 꾸준한 정진 노력이 성공의 어머니가 된다. 세월 속에 씨를 뿌려라. 그 씨는 쭉정이가 되어서는 안 되고, 정성껏 가꿔야만 한다.'
    },
    {
        name: '인드라 누이',
        saying: '두 배로 생각하라, 두 배로 노력하라. 그것이 가진 것 없는 보통 사람이 성공하는 비결이다.'
    },
    {
        name: '기타가와 야스시',
        saying: '꿈을 이루지 못한 사람들은 "나는 재능이 없었어"라고 말한다. 꿈을이루지 못한 이유가 재능이 없었다는 것이라면, 꿈을 이룬 사람들은 모두 "재능이 있었다."라고 대답하는 것이 맞겠지만, 성공한 사람 중에 그런 대답을 한 사람은 한 명도 없다. 꿈을 이룬 사람들은 "정말로 하고 싶었던 일을 열정을 가지고 계속했을 뿐이다"라고 말한다'
    },
    {
        name: '톨스토이',
        saying: '노력은 수단이 아니라 그 자체가 목적이다. 노력하는 것 자체에 보람을 느낀다면, 누구든지 인생의 마지막 시점에서 미소를 지을 수 있을 것이다.'
    }
];


const getwiseSayingBtn = document.querySelector('.getwiseSayingBtn');
const wiseSaying = document.querySelector('.wiseSaying');
const authorName = document.querySelector('.authorName');
getwiseSayingBtn.addEventListener('click', () => {
    init()
});

function getRandomNum() {
    return parseInt(Math.random() * wiseSayings.length)
}

function init() {
    let arrayNum = getRandomNum();
    while (wiseSayings[arrayNum].name === authorName.textContent) {
        arrayNum = getRandomNum();
    }
    const { saying, name } = wiseSayings[arrayNum];
    wiseSaying.textContent = saying;
    authorName.textContent = name;
}

init();