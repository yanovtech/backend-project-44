#!/usr/bin/env node
import { engine } from '../src/engine.js';
import { progressionGame, RULES_OF_GAME } from '../src/games/progressionGame.js';

engine(RULES_OF_GAME, progressionGame());
