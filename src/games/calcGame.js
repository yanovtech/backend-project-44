import { getRandomArbitrary } from "../generator.js";
import { NUMBER_OF_ROUNDS, MIN_VALUE, MAX_VALUE } from "../engine.js";

export const RULES_OF_GAME = 'What is the result of the expression?';

const OPERATORS = ['*', '+', '-'];

const makeCalc = (operator, firstOperand, secondOperand) => {
    switch(operator) {
        case '+':
            return firstOperand + secondOperand;
        case '-':
            return firstOperand - secondOperand;
        case '*':
            return firstOperand * secondOperand;
    }
}

export const calcGame = () => {
    const result = {};
    for (let i = 0; i < NUMBER_OF_ROUNDS; i += 1) {
        const operator = OPERATORS[getRandomArbitrary(0, 3)];
        const firstOperand = getRandomArbitrary(MIN_VALUE, MAX_VALUE);
        const secondOperand = getRandomArbitrary(MIN_VALUE, MAX_VALUE);
        const question = [firstOperand, operator, secondOperand].join(' ');
        const answer = makeCalc(operator, firstOperand, secondOperand);
        result[question] = answer.toString();
    }
    return result;
}
