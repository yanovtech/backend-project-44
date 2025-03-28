#!/usr/bin/env node
import engine from "../src/engine.js";
import { calcGame, RULES_OF_GAME } from "../src/games/calcGame.js"

engine(RULES_OF_GAME, calcGame());
