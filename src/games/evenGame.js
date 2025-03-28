import getRandomArbitrary from '../getRandomArbitrary.js';
import { NUMBER_OF_ROUNDS, MIN_VALUE, MAX_VALUE } from '../engine.js';

export const RULES_OF_GAME = 'Answer "yes" if the number is even, otherwise answer "no".';

const isEven = (number) => number % 2 === 0;

export const evenGame = () => {
  const result = {};
  for (let i = 0; i < NUMBER_OF_ROUNDS; i += 1) {
    const value = getRandomArbitrary(MIN_VALUE, MAX_VALUE);
    const answer = isEven(value) ? 'yes' : 'no';
    result[value] = answer;
  }
  return result;
};
