function getRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min +1)) + min;
};

function game() {
  let totalGames = 0;
  let history = [];

  while(true) {
    let attempt = 3;
    let randomNumber = getRandomNumber(1, 10);
    let attemptsNumber = 0;

    while (attempt > 0) {
      let usersNumber = Number(prompt(`Угадай число от 1 до 10. Осталось ${attempt} попыток.`));

      if (usersNumber === null) {
        alert("Игра окончена");
        break;
      }

      if (typeof usersNumber !== 'number') {
        alert('Введите число!');
        continue;
      }

      attemptsNumber++;
      if (usersNumber < randomNumber) {
        alert("Загаданное число больше");
      } else if (usersNumber > randomNumber) {
        alert("Загаданное число меньше");
      } else {
        alert("Вы угадали!!! Вы угадали!!! Хотели бы сыграть еще?");
        history.push({ gameNumber: totalGames + 1, attempts: attemptsNumber });
        break;
      }

      attempt--;
    }

    if (attempt === 0) {
      let playAgain = confirm("Попытки закончились, хотите сыграть еще?");
      if (!playAgain) {
          alert("Игра окончена");
          break;
      }
    }

    totalGames++;
  }

  console.log("История игры:");
  history.forEach(game => console.log(`Игра №${game.gameNumber}: ${game.attempts} попыток`));
}

game();