#!/usr/bin/env node
import { startGame } from '../src/startGame.js';
import { makeCalcGame, RULE_OF_GAME } from '../src/games/calcGame.js';

startGame(RULE_OF_GAME, makeCalcGame());
