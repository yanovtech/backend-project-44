#!/usr/bin/env node
import { startGame } from '../src/startGame.js';
import { makeGcdGame, RULE_OF_GAME } from '../src/games/gcdGame.js';

startGame(RULE_OF_GAME, makeGcdGame());
