const yesBtn = document.getElementById('yesBtn');
const noBtn = document.getElementById('noBtn');
const question = document.getElementById('question');
const subtext = document.getElementById('subtext');

let yesScale = 1;

const trollTexts = [
    "Bấm nhầm rồi!",
    "Nút này không bấm được đâu!",
    "Bấm nút Có đi mà!",
    "Đừng từ chối nữa!",
    "Chạy đi đâu cho thoát!"
];

function moveNoButton() {
    noBtn.style.position = 'fixed';
    
    const maxX = window.innerWidth - noBtn.offsetWidth - 20;
    const maxY = window.innerHeight - noBtn.offsetHeight - 20;
    
    const randomX = Math.max(20, Math.floor(Math.random() * maxX));
    const randomY = Math.max(20, Math.floor(Math.random() * maxY));
    
    noBtn.style.left = randomX + 'px';
    noBtn.style.top = randomY + 'px';

    yesScale += 0.15;
    yesBtn.style.transform = `scale(${yesScale})`;

    const randomMsg = trollTexts[Math.floor(Math.random() * trollTexts.length)];
    subtext.textContent = randomMsg;
}

noBtn.addEventListener('mouseover', moveNoButton);
noBtn.addEventListener('touchstart', (e) => {
    e.preventDefault();
    moveNoButton();
});

yesBtn.addEventListener('click', () => {
    question.textContent = "Chốt kèo nhé!";
    subtext.textContent = "Mai ra sân đánh vài sét nha!";
    noBtn.style.display = 'none';
    yesBtn.style.transform = 'scale(1)';
    yesBtn.textContent = "Ok luôn";
});