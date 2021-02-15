//Global Variables
const qwerty = document.getElementById('qwerty');
const phrase = document.getElementById('phrase');
const btnReset = document.getElementsByClassName('btn__reset')[0];
const missed = 0;

const phrases = [
  'Lord of the Rings',
  'The Never Ending Story',
  'Labrynth',
  'The Dark Crystal',
  'Beast Master',
  'Flight of the Navigator',
  'Splash'
];

const overlay = document.getElementById('overlay');

//Hide overlay on start screen
btnReset.addEventListener('click', () => {
  overlay.style.display = 'none';
});

//create a getRandomPhrasesAsArray function
function getRandomPhrase(arr) {
  const randomNumber = Math.floor(Math.random() * arr.length);
  const randomPhrase = phrases[randomNumber]
  return randomPhrase;
}

getRandomPhrase(phrases);

//Set the game display
function addPhraseToDisplay(arr) {
  for (let i = 0; i < arr.length; i += 1) {
    let li = document.createElement('li');
    let ul = document.getElementById('phrase');
    li.textContent = arr[i].toLowerCase();
    ul.appendChild(li);
    if (li.textContent === ' ') {
      li.className = 'space';
    } else {
      li.className = 'letter';
    }
  }
}
const phraseArray = getRandomPhrase(phrases);
addPhraseToDisplay(phraseArray);

//Create a checkletter function
function checkLetter(btn) {
  const keyBoardLetters = document.querySelectorAll('li');

  let match = null;
  for (let i = 0; i < keyBoardLetters.length; i ++){
    if (keyBoardLetters[i].textContent === btn.textContent) {
      keyBoardLetters[i].classList.add('show');
      match = btn;
    }
  }
    return match;
}

//add an addEventListener to the keyboard

qwerty.addEventListener('click', e => {
  if (e.target.tagName === 'BUTTON') {
    e.target.classList.add('chosen');
    e.target.disabled = true;
    const correctLetter = checkLetter(e.target);
    if (correctLetter === null) {
    const scoreBoard = document.getElementById('scoreboard');
    const ol = scoreBoard.firstElementChild;
    const li = ol.firstElementChild;
    ol.removeChild(li);
    }
  }
  function checkWin() {
    const letter = document.querySelectorAll('.letter');
    const show = document.querySelectorAll('.show');
    const winOverlay = overlay.classList.add('win');
    const winner = document.querySelectorAll('.title');
    if(letter.length === show.length) {
      winner.document.innerHTML = 'Winner Winner Winner!';
      overlay.style.display = 'none';
      winOverlay.style.display = 'flex';
    }
  };
});
