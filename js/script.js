const settingsBtn      = document.getElementById('settings-btn');
const settings         = document.getElementById('settings');
const settingForm      = document.getElementById('setting-form');
const diffcultySelect  = document.getElementById('diffculty');
const word             = document.getElementById('word');
const text             = document.getElementById('text');
const timeEl           = document.getElementById('time');
const scoreEl          = document.getElementById('score');
const endGameContainer = document.getElementById('end-game-container');
const words = [
    'sigh',
    'tense',
    'airplane',
    'ball',
    'pies',
    'juice',
    'warlike',
    'bad',
    'north',
    'dependent',
    'steer',
    'silver',
    'highfalutin',
    'superficial',
    'quince',
    'eight',
    'feeble',
    'admit',
    'drag',
    'loving'
];

let randomWord;
let score = 0;
let time = 10;
let difficulty = localStorage.getItem('difficulty') !== null ? localStorage.getItem('difficulty') : 'easy';

diffcultySelect.value = difficulty;

const timeInterval = setInterval(updateTime, 1000);

function updateTime(){
    time--;
    timeEl.textContent = time + 's';
    if(time === 0){
        clearInterval(timeInterval);
        gameOver();
    }
}

function gameOver(){
    endGameContainer.innerHTML = `
        <h1>Time Ran Out!</h>
        <p>Your Final Score Is ${score}</p>
        <button onclick="location.reload()">Resart Game</button>
    `;

    endGameContainer.style.display = 'flex';
}

function getRandomWord(){
    return words[Math.floor(Math.random() * words.length)];
}

function addWordToDOM(){
    randomWord = getRandomWord();
    word.textContent = randomWord;
}

function updeateScore(){
    score++;
    scoreEl.textContent = score;
}

text.addEventListener('input', e=>{
    const insertedText = e.target.value;
    if(insertedText === randomWord){
        addWordToDOM();
        updeateScore();
        e.target.value = '';

        if(difficulty === 'hard'){
            time += 2;
        } else if (difficulty === 'medium'){
            time += 3;
        } else {
            time += 5;
        }
        updateTime();
    }
});

settingsBtn.addEventListener('click', ()=>{
    settings.classList.toggle('hide'); 
});

settingForm.addEventListener('change', e=>{
    difficulty = e.target.value;
    localStorage.setItem('difficulty', difficulty);
})

addWordToDOM();
text.focus();
