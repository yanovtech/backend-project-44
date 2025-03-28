#!/usr/bin/env node
import { engine } from '../src/engine.js';
import { gcdGame, RULES_OF_GAME } from '../src/games/gcdGame.js';

engine(RULES_OF_GAME, gcdGame());
