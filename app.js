// import functions and grab DOM elements

const shell_1_Button = document.getElementById('shell_1_button');
const shell_2_Button = document.getElementById('shell_2_button');
const shell_3_Button = document.getElementById('shell_3_button');

const shell_1_Container = document.getElementById('container');
const shell_2_Container = document.getElementById('container');
const shell_3_Container = document.getElementById('container');

const totalEl = document.getElementById('total');
const lossesEl = document.getElementById('losses');
const winsEl = document.getElementById('wins');

// initialize state
const ball = ['shell_1', 'shell_2', 'shell_3'];

let correctGuesses = 0;
let totalGuesses = 0;

shell_1_Button.addEventListener('click', () => {
    const hidingSpot = Math.floor(Math.random() * 3);
    const answer = ball[hidingSpot];
    handleGuess(answer, 'shell_1');
});

shell_2_Button.addEventListener('click', () => {
    const hidingSpot = Math.floor(Math.random() * 3);
    const answer = ball[hidingSpot];
    handleGuess(answer, 'shell_2');
});

shell_3_Button.addEventListener('click', () => {
    const hidingSpot = Math.floor(Math.random() * 3);
    const answer = ball[hidingSpot];
    handleGuess(answer, 'shell_2'); 
});

function handleGuess(userGuess, correctSpot) {
    
    resetStyles();
    totalGuesses++;

    const correctHidingPlaceEl = document.getElementById(`${userGuess}-container`);
    
    correctHidingPlaceEl.classList.add('reveal');
    

    if (userGuess === correctSpot) {
        correctGuesses++;
    }

    totalEl.textContent = totalGuesses;
    winsEl.textContent = correctGuesses;
    lossesEl.textContent = totalGuesses - correctGuesses;
}

function resetStyles() {
    shell_1_Container.classList.remove('reveal');
    shell_2_Container.classList.remove('reveal');
    shell_3_Container.classList.remove('reveal');
}

// let state

// set event listeners 
  // get user input
  // use user input to update state 
  // update DOM to reflect the new state
