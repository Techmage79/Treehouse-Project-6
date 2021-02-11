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



//Hide overlay on start screen
btnReset.addEventListener('click', () => {
  const overlay = document.getElementById('overlay');
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
    li.textContent = arr[i]
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
    if (keyBoardLetters[i] === btn.textContent) {
      li.className.add = 'show';
      let match = btn.textContent;
    }
  }
    return match;
}