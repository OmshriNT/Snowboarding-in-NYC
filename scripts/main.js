// Image swither code

let myImage = document.querySelector('img');

myImage.onclick = function () {
    let mySrc = myImage.getAttribute('src');

    if(mySrc === 'images/snowboarding-in-nyc.png') {
        myImage.setAttribute('src','images/casey-neistat.png');
    }
    else {
        myImage.setAttribute('src','images/snowboarding-in-nyc.png');
    }
}

// personalized message

let myButton = document.querySelector('button');
let myHeader = document.querySelector('h3');

function setMessage() {
    let message = prompt('Please enter your response. ');

    if(!message) {
        setMessage();
    }
    else {
        localStorage.setItem('message', message);
        myHeader.innerHTML = message;
    }
}

if(!localStorage.getItem('message')) {
    setMessage();
}
else {
    let storedMessage = localStorage.getItem('message');
    myHeader.innerHTML = storedMessage;
}

myButton.onclick = function() {
    setMessage();
}
