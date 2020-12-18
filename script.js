const likeBtn = document.querySelector('.like-btn');
const promptBtn = document.querySelector('.prompt-btn');

// Like Button Animation
console.log(likeBtn);
likeBtn.addEventListener('click', () => {
    likeBtn.classList.toggle('active');
});

// Prompt box logic
