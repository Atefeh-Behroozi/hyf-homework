const timeInput = document.getElementById('time');
const startBtn = document.getElementById('start-btn');
const gameBoard = document.getElementById('game-board');
const countdown = document.getElementById('countdown');
const instructions = document.getElementById('instructions');
const player1Count = document.getElementById('player1-count');
const player2Count = document.getElementById('player2-count');
const restartBtn = document.getElementById('restart-btn');

let countdownInterval;
let gameInterval;
let timeLeft;
let player1Score = 0;
let player2Score = 0;

startBtn.addEventListener('click', startGame);

restartBtn.addEventListener('click', startGame);

function startGame() {
  
  timeInput.disabled = true;

  const time = parseInt(timeInput.value);

  if (isNaN(time)) {
    timeLeft = 10;
  } else {
    timeLeft = time;
  }

  player1Score = 0;
  player2Score = 0;
  updateScores();

  startBtn.classList.add('hidden');
  gameBoard.classList.remove('hidden');

  countdownInterval = setInterval(updateCountdown, 1000);
}

function updateCountdown() {
  timeLeft--;
  countdown.textContent = timeLeft;

  if (timeLeft === 0) {
    endGame();
  }
}

function endGame() {
  clearInterval(countdownInterval);
  clearInterval(gameInterval);
  instructions.textContent = 'Game over!';

  let winner = '';
  if (player1Score > player2Score) {
    winner = 'Player 1 wins!';
    confetti({
      particleCount: 100,
      spread: 70,
      origin: { y: 0.6 },
    });
  } else if (player2Score > player1Score) {
    winner = 'Player 2 wins!';
    confetti({
      particleCount: 100,
      spread: 70,
      origin: { y: 0.6 },
    });
  } else {
    winner = "You Win!";
  }
  instructions.textContent = winner;

  restartBtn.classList.remove('hidden');
}

function updateScores() {
  player1Count.textContent = player1Score;
  player2Count.textContent = player2Score;
}

document.addEventListener('keydown', function (event) {
  if (event.key === 's' || event.key === 'S') {
    player1Score++;
    updateScores();
  } else if (event.key === 'l' || event.key === 'L') {
    player2Score++;
    updateScores();
  }
});