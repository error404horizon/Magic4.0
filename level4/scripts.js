const possibleWords = ['apple', 'brave', 'crane', 'dough', 'eagle']; // List of possible words
const targetWord = possibleWords[Math.floor(Math.random() * possibleWords.length)]; // Random target word

const gameBoard = document.getElementById('game-board');
const guessInput = document.getElementById('guess-input');
const submitBtn = document.getElementById('submit-btn');
const message = document.getElementById('message');

let attempts = 0;
const maxAttempts = 6;

function createGameBoard() {
    for (let i = 0; i < maxAttempts; i++) {
        const row = document.createElement('div');
        row.classList.add('row');
        for (let j = 0; j < 5; j++) {
            const cell = document.createElement('div');
            cell.classList.add('cell');
            row.appendChild(cell);
        }
        gameBoard.appendChild(row);
    }
}

function handleGuess() {
    const guess = guessInput.value.toLowerCase();
    if (guess.length !== 5 || !possibleWords.includes(guess)) {
        message.textContent = 'Please enter a valid 5-letter word.';
        return;
    }

    const row = gameBoard.children[attempts];
    for (let i = 0; i < 5; i++) {
        const cell = row.children[i];
        const letter = guess[i];
        if (letter === targetWord[i]) {
            cell.textContent = letter;
            cell.classList.add('correct');
        } else if (targetWord.includes(letter)) {
            cell.textContent = letter;
            cell.classList.add('present');
        } else {
            cell.textContent = letter;
            cell.classList.add('absent');
        }
    }

    attempts++;
    if (guess === targetWord) {
        message.textContent = 'Congratulations! You guessed the word.';
        submitBtn.disabled = true;
    } else if (attempts === maxAttempts) {
        message.textContent = `Game Over! The word was: ${targetWord}`;
        submitBtn.disabled = true;
    } else {
        guessInput.value = '';
        guessInput.focus();
    }
}

submitBtn.addEventListener('click', handleGuess);
guessInput.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') {
        handleGuess();
    }
});

createGameBoard();
