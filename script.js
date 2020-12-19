const likeBtn = document.querySelector('.like-btn');
const promptBtn = document.querySelector('.prompt-btn');
const blinkText = document.querySelector('.blink-me');
const asideContent = document.querySelector('aside');
const myMessage = document.createElement('p');

const img = document.getElementById('carousel');
const rightBtn = document.getElementById('right-btn');
const leftBtn = document.getElementById('left-btn');


let pictures = ['./images/snowboarding-in-nyc.png',
    './images/car-in-snow.jpg',
    './images/casey-neistat.png',
    './images/Nyc_snow_2003_1.jpg',
];


// IMage carousel

img.src = pictures[0];
let position = 0;

moveRight = () => {
    if (position >= pictures.length - 1) {
        position = 0;
        img.src = pictures[position];
        return;
    }
    img.src = pictures[position + 1];
    position++;
};

moveLeft = () => {
    if (position < 1) {
        position = pictures.length - 1;
        img.src = pictures[position];
        return;
    }
    img.src = pictures[position - 1];
    position--;
}

rightBtn.addEventListener('click', moveRight);
leftBtn.addEventListener('click', moveLeft);

// Like Button Animation and blinking text
console.log(likeBtn);
likeBtn.addEventListener('click', () => {
    likeBtn.classList.toggle('active');
    blinkText.classList.toggle('active');
});

// Prompt box logic

function setMessage() {

    let message = prompt('Pour your thoughts!');

    if (!message) {
        setMessage();
    } else {
        localStorage.setItem('message', message);
        myMessage.innerHTML = message;
    }
}

if (!localStorage.getItem('message')) {
    setMessage();
} else {
    let storedMessage = localStorage.getItem('message');
    myMessage.innerHTML = storedMessage;
}

asideContent.appendChild(myMessage);

promptBtn.addEventListener('click', setMessage);

