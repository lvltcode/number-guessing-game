// random value generated 
let randomNumber = Math.floor(Math.random() * 100) + 1;


const guesses = document.querySelector('.guesses');
const lastResult = document.querySelector('.lastResult');
const lowOrHi = document.querySelector('.lowOrHi');

// number guessed by user
let inputNumber = document.querySelector('.inputNumber');

const submitNumber = document.querySelector('.submitNumber');
const startOver = document.querySelector('.startOver');

// counting the number of guesses
let guessCount = 1;
// let resetButton;

function guessingGame() {
    let userGuess = Number(inputNumber.value);
    if (guessCount === 1) {
        guesses.textContent = 'Previous guesses: ';
    }
    guesses.textContent += userGuess + ' ';
    if (userGuess === randomNumber) {
        lastResult.textContent = 'Congratz, you are a winner!';
        lastResult.style.backgroundColor = 'green';
        lowOrHi.textContent = '';
    }
    else if (guessCount === 10) {
        lastResult.textContent = "You were out of times for guessing! Game over!";
        setGameOver();
    }
    else {
        lastResult.textContent = "You were wrong!";
        lastResult.style.backgroundColor = 'red';
        // if guessed number is greater than actual number
        if (userGuess < randomNumber) {
            lowOrHi.textContent = `Your number ${userGuess} is too low`;
        }
        else if (userGuess > randomNumber) {
            lowOrHi.textContent = `Your number ${userGuess} is too high`;
        }
    guessCount++;
    inputNumber.value = '';
    // inputNumber.focus();
    }

}
submitNumber.addEventListener('click', guessingGame);

function setGameOver() {
   inputNumber.disabled = true;
    submitNumber.disabled = true;
    // resetButton = document.createElement('button');
    // resetButton.textContent = 'Start over';
    guessCount = 1;
    const resetInput = document.querySelectorAll('.result p');
    for (let i = 0; i < resetInput.length; i++) {
        resetInput[i].textContent = '';
    }

    lastResult.parentNode.removeChild(lastResult);

    inputNumber.disabled = false;
    submitNumber.disabled = false;
    inputNumber.value = '';
    inputNumber.focus();
    lastResult.style.backgroundColor = 'white';
    randomNumber = Math.floor(Math.random() * 100) + 1;
}

startOver.addEventListener('click', setGameOver);


