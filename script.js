'use strict';

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;

const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};
document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess, typeof guess);

  // When there is no Input
  if (!guess) {
    displayMessage('⛔ No Number');
    //When Player Wins
  } else if (guess === secretNumber) {
    document.querySelector('.message').textContent = '🎈 Correct Number';
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';
    document.querySelector('.number').textContent = secretNumber;
    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }
    // New Else If
    else if (guess !== secretNumber) {
      if (score > 1) {
        document.querySelector('.message').textContent =
          guess > secretNumber ? '📈 Too High' : '📉 Too Low';
        score--;
        document.querySelector('.score').textContent = score;
      } else {
        document.querySelector('.message').textContent = '💥 You Lost The Game';
        document.querySelector('.score').textContent = 0;
      }
    }

    //   //When guess is too High
    // } else if (guess > secretNumber) {
    //   if (score > 1) {
    //     document.querySelector('.message').textContent = '📈 Too High';
    //     score--;
    //     document.querySelector('.score').textContent = score;
    //   } else {
    //     document.querySelector('.message').textContent = '💥 You Lost The Game';
    //     document.querySelector('.score').textContent = 0;
    //   }
    //   //When guess is too Low
    // } else if (guess < secretNumber) {
    //   if (score > 1) {
    //     document.querySelector('.message').textContent = '📉 Too Low';
    //     score--;
    //     document.querySelector('.score').textContent = score;
    //   } else {
    //     document.querySelector('.message').textContent = '💥 You Lost The Game';
    //     document.querySelector('.score').textContent = 0;
    //   }
    // }
  }
});

document.querySelector('.again').addEventListener('click', function () {
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  score = 20;

  document.querySelector('.message').textContent = 'Start guessing...';
  document.querySelector('.score').textContent = score;
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = '';
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
});
