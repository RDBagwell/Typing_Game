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

function getRandomWord(){
    return words[Math.floor(Math.random() * words.length)];
}

console.log(getRandomWord());