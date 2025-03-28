import readlineSync from 'readline-sync';

export const NUMBER_OF_ROUNDS = 3;

export default (rules, game) => {
    console.log('Welcome to the Brain Games!');
    const playerName = readlineSync.question('May I have your name? ');
    console.log(`Hello, ${playerName}!`);
    console.log(`${rules}`);
    for (const [question, answer] of Object.entries(game)) {
        console.log(`Question: ${question}!`);
        const playerAnswer = readlineSync.question('Your answer: ');
        if (playerAnswer !== answer) {
            console.log(`'${playerAnswer}' is wrong answer ;(. Correct answer was '${answer}'.`);
            console.log(`Let's try again, ${playerName}!`);
            return;
        } else {
            console.log('Correct!');
        }
    }
    console.log(`Congratulations, ${playerName}!`);
}