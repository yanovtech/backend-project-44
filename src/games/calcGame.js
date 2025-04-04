import getRandomArbitrary from '../getRandomArbitrary.js';
import { ROUND_COUNT, MIN_VALUE, MAX_VALUE } from '../startGame.js';

export const RULE_OF_GAME = 'What is the result of the expression?';

const OPERATORS = ['*', '+', '-'];

const makeCalc = (operator, firstOperand, secondOperand) => {
  switch (operator) {
    case '+':
      return firstOperand + secondOperand;
    case '-':
      return firstOperand - secondOperand;
    case '*':
      return firstOperand * secondOperand;
    default:
      throw new Error(`Unknown operator: ${operator}`);
  }
};

export const makeCalcGame = () => {
  const result = {};
  for (let i = 0; i < ROUND_COUNT; i += 1) {
    const operator = OPERATORS[getRandomArbitrary(0, 3)];
    const firstOperand = getRandomArbitrary(MIN_VALUE, MAX_VALUE);
    const secondOperand = getRandomArbitrary(MIN_VALUE, MAX_VALUE);
    const question = [firstOperand, operator, secondOperand].join(' ');
    const answer = makeCalc(operator, firstOperand, secondOperand);
    result[question] = answer.toString();
  }
  return result;
};
