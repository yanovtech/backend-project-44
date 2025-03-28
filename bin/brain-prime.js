#!/usr/bin/env node
import engine from "../src/engine.js";
import { primeGame, RULES_OF_GAME } from "../src/games/primeGame.js"

engine(RULES_OF_GAME, primeGame());
