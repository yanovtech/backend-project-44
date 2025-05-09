import getRandomArbitrary from '../getRandomArbitrary.js';
import { ROUND_COUNT, MIN_VALUE, MAX_VALUE } from '../startGame.js';

export const RULE_OF_GAME = 'What number is missing in the progression?';

const MIN_LENGTH_PROGRESSION = 5;
const MAX_LENGTH_PROGRESSION = 10;
const STEP = [2, 3, 5];

const makeProgression = (firstNumber, length, step) => {
  const progression = [];
  progression.push(firstNumber);
  for (let i = 1; i <= length; i += 1) {
    progression.push(progression[i - 1] + step);
  }
  return progression;
};

export const makeProgressionGame = () => {
  const result = {};
  for (let i = 0; i < ROUND_COUNT; i += 1) {
    const firstNumber = getRandomArbitrary(MIN_VALUE, MAX_VALUE);
    const length = getRandomArbitrary(MIN_LENGTH_PROGRESSION, MAX_LENGTH_PROGRESSION);
    const step = STEP[i];
    const progression = makeProgression(firstNumber, length, step);
    const answerIndex = getRandomArbitrary(0, progression.length);
    const answer = progression[answerIndex];
    progression[answerIndex] = '..';
    const question = progression.join(' ');
    result[question] = answer.toString();
  }
  return result;
};
