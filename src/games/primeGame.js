import getRandomArbitrary from '../getRandomArbitrary.js';
import { ROUND_COUNT, MIN_VALUE, MAX_VALUE } from '../startGame.js';

export const RULE_OF_GAME = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const isPrime = (number) => {
  for (let i = 2; i < number; i += 1) {
    if (number % i === 0) return false;
  }
  return number !== 1;
};

export const makePrimeGame = () => {
  const result = {};
  for (let i = 0; i < ROUND_COUNT; i += 1) {
    const number = getRandomArbitrary(MIN_VALUE, MAX_VALUE);
    const question = number.toString();
    const answer = isPrime(number) ? 'yes' : 'no';
    result[question] = answer;
  }
  return result;
};
