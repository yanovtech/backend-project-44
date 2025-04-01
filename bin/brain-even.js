#!/usr/bin/env node
import { startGame } from '../src/startGame.js';
import { makeEvenGame, RULE_OF_GAME } from '../src/games/evenGame.js';

startGame(RULE_OF_GAME, makeEvenGame());
