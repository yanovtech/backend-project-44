import getRandomArbitrary from '../getRandomArbitrary.js';
import { ROUND_COUNT, MIN_VALUE, MAX_VALUE } from '../startGame.js';

export const RULE_OF_GAME = 'Answer "yes" if the number is even, otherwise answer "no".';

const isEven = (number) => number % 2 === 0;

export const makeEvenGame = () => {
  const result = {};
  for (let i = 0; i < ROUND_COUNT; i += 1) {
    const value = getRandomArbitrary(MIN_VALUE, MAX_VALUE);
    const answer = isEven(value) ? 'yes' : 'no';
    result[value] = answer;
  }
  return result;
};
