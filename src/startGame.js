import readlineSync from 'readline-sync';

const ROUND_COUNT = 3;
const MIN_VALUE = 1;
const MAX_VALUE = 99;

const startGame = (rules, game) => {
  console.log('Welcome to the Brain Games!');
  const playerName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${playerName}!`);
  console.log(`${rules}`);
  const questions = Object.keys(game);
  const answers = Object.values(game);
  for (let i = 0; i < ROUND_COUNT; i += 1) {
    const question = questions[i];
    const answer = answers[i];
    console.log(`Question: ${question}!`);
    const playerAnswer = readlineSync.question('Your answer: ');
    if (playerAnswer !== answer) {
      console.log(`'${playerAnswer}' is wrong answer ;(. Correct answer was '${answer}'.`);
      console.log(`Let's try again, ${playerName}!`);
      return;
    }
    console.log('Correct!');
  }
  console.log(`Congratulations, ${playerName}!`);
};

export {
  ROUND_COUNT as NUMBER_OF_ROUNDS,
  MIN_VALUE,
  MAX_VALUE,
  startGame,
};
