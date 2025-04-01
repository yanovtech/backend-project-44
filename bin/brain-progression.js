#!/usr/bin/env node
import { startGame } from '../src/startGame.js';
import { makeProgressionGame, RULE_OF_GAME } from '../src/games/progressionGame.js';

startGame(RULE_OF_GAME, makeProgressionGame());
