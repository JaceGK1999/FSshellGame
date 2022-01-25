// import functions and grab DOM elements

const ball1 = document.getElementById('ball_1');
const ball2 = document.getElementById('ball_2');
const ball3 = document.getElementById('ball_3');

const button1 = document.getElementById('shell1_Button');
const button2 = document.getElementById('shell2_Button');
const button3 = document.getElementById('shell3_Button');

const winsSpan = document.getElementById('wins');
const lossesSpan = document.getElementById('losses');
const totalSpan = document.getElementById('total');

let wins = 0;
let total = 0;

function resetStyle() {
    ball1.classList.remove('reveal');
    ball2.classList.remove('reveal');
    ball3.classList.remove('reveal');
}

function displayResults() {
    winsSpan.textContent = wins;
    totalSpan.textContent = total;
    lossesSpan.textContent = total - wins;
}

button1.addEventListener('click', () => {
    total++;
    resetStyle();
    const ballLocation = Math.ceil(Math.random() * 3);
    if (ballLocation === 1) {
        ball1.classList.add('reveal');
        wins++;
    } else if (ballLocation === 2) {
        ball2.classList.add('reveal');
    } else {
        ball3.classList.add('reveal');
    }
    displayResults();
});

button2.addEventListener('click', () => {
    total++;
    resetStyle();
    const ballLocation = Math.ceil(Math.random() * 3);

    if (ballLocation === 1) {
        ball1.classList.add('reveal');
    } else if (ballLocation === 2) {
        ball2.classList.add('reveal');
        wins++;
    } else {
        ball3.classList.add('reveal');
    }
    displayResults();
});

button3.addEventListener('click', () => {
    total++;
    resetStyle();
    const ballLocation = Math.ceil(Math.random() * 3);

    if (ballLocation === 1) {
        ball1.classList.add('reveal');
    } else if (ballLocation === 2) {
        ball2.classList.add('reveal');
    } else {
        ball3.classList.add('reveal');
        wins++;
    }
    displayResults();
});


// let state

// set event listeners 
  // get user input
  // use user input to update state 
  // update DOM to reflect the new state
