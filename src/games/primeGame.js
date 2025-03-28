import { getRandomArbitrary } from "../generator.js";
import { NUMBER_OF_ROUNDS, MIN_VALUE, MAX_VALUE } from "../engine.js";

export const RULES_OF_GAME = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const isPrime = (number) => {
    for (let i = 2; i < number; i++) {
        if (number % i === 0) return false;
    }
    return number !== 1;
}

export const primeGame = () => {
    const result = {};
    for (let i = 0; i < NUMBER_OF_ROUNDS; i += 1) {
        const number = getRandomArbitrary(MIN_VALUE, MAX_VALUE);
        const question = number.toString();
        const answer = isPrime(number) ? 'yes' : 'no';
        result[question] = answer;
    }
    return result;
}
