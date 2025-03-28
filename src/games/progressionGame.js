import { getRandomArbitrary } from "../generator.js";
import { NUMBER_OF_ROUNDS, MIN_VALUE, MAX_VALUE } from "../engine.js";

export const RULES_OF_GAME = 'What number is missing in the progression?';

const MIN_LENGTH_PROGRESSION = 5;
const MAX_LENGTH_PROGRESSION = 10;
const STEP = {
    0: 2,
    1: 3,
    2: 5
};

const makeProgression = (firstNumber, length, step) => {
    const progression = [];
    progression.push(firstNumber);
    for (let i = 1; i <= length; i += 1) {
        progression.push(progression[i - 1] + step);
    }
    const answerIndex = getRandomArbitrary(0, progression.length);
    const answer = progression[answerIndex];
    progression[answerIndex] = '..';
    return [answer, progression];
}

export default () => {
    const result = {};
    for (let i = 0; i < NUMBER_OF_ROUNDS; i += 1) {
        const firstNumber = getRandomArbitrary(MIN_VALUE, MAX_VALUE);
        const length = getRandomArbitrary(MIN_LENGTH_PROGRESSION, MAX_LENGTH_PROGRESSION);
        const step = STEP[i.toString()];
        const [answer, progression] = makeProgression(firstNumber, length, step);
        const question = progression.join(' ');
        result[question] = answer.toString();
    }
    return result;
}