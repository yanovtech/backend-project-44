import { getRandomArbitrary } from "../generator.js";
import { NUMBER_OF_ROUNDS, MIN_VALUE, MAX_VALUE } from "../engine.js";

export const RULES_OF_GAME = 'Find the greatest common divisor of given numbers.';

const makeGCD = (firstValue, secondValue) => {
    while (secondValue !== 0) {
        let temp = secondValue;
        secondValue = firstValue % secondValue;
        firstValue = temp;
    }
    return firstValue;
};

export default () => {
    const result = {};
    for (let i = 0; i < NUMBER_OF_ROUNDS; i += 1) {
        const firstValue = getRandomArbitrary(MIN_VALUE, MAX_VALUE);
        const secondValue = getRandomArbitrary(MIN_VALUE, MAX_VALUE);
        const question = [firstValue, secondValue].join(' ');
        const answer = makeGCD(firstValue, secondValue).toString();
        result[question] = answer;
    }
    return result;
}
