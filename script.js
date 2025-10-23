const messages = [
    "I am really sorry to hurt you like this.",
    "I will never repeat this again my cutiepie.",
    "I will always support you and idk why I did that yesterday.",
    "I promise to always care for you, support you and keep you, ur health and happiness as my top priority.",
    "Together forever"
];

const messageDiv = document.getElementById('message');
const chibi1 = document.getElementById('chibi1');
const chibi2 = document.getElementById('chibi2');
const chibi3 = document.getElementById('chibi3');
const restartBtn = document.getElementById('restartBtn');
const music = document.getElementById('music');

let index = 0;

const positions = [
    {left: 20, bottom: 20},
    {left: 120, bottom: 100},
    {left: 220, bottom: 180},
    {left: 320, bottom: 260},
    {left: window.innerWidth - 180, bottom: window.innerHeight - 180} // final top-right
];

function showMessage() {
    if(index < messages.length) {
        messageDiv.textContent = messages[index];
        
        if(index < 4) {
            chibi1.style.left = positions[index].left + 'px';
            chibi1.style.bottom = positions[index].bottom + 'px';
        }

        index++;
        if(index === messages.length) setTimeout(finalStep, 1000);
    }
}

function finalStep() {
    chibi1.style.display = 'none';
    chibi2.style.display = 'none';
    chibi3.classList.add('show');

    music.play();

    for(let i=0; i<100; i++){
        const heart = document.createElement('div');
        heart.className = 'heart';
        heart.style.left = Math.random()*window.innerWidth + 'px';
        heart.style.top = Math.random()*window.innerHeight + 'px';
        heart.textContent = '❤️';
        document.body.appendChild(heart);
        setTimeout(()=> heart.remove(), 3000);
    }
}

const interval = setInterval(() => {
    if(index >= messages.length) clearInterval(interval);
    else showMessage();
}, 2500);

restartBtn.addEventListener('click', () => {
    index = 0;
    chibi1.style.display = 'block';
    chibi2.style.display = 'block';
    chibi1.style.left = '20px';
    chibi1.style.bottom = '20px';
    chibi3.classList.remove('show');
    messageDiv.textContent = '';
    showMessage();
});
