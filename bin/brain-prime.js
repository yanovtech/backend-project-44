#!/usr/bin/env node
import { startGame } from '../src/startGame.js';
import { makePrimeGame, RULE_OF_GAME } from '../src/games/primeGame.js';

startGame(RULE_OF_GAME, makePrimeGame());
