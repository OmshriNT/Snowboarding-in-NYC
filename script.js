const likeBtn = document.querySelector('.like-btn');
const promptBtn = document.querySelector('.prompt-btn');
const blinkText = document.querySelector('.blink-me');
const asideContent = document.querySelector('aside');
const myMessage = document.createElement('p');

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
