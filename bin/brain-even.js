#!/usr/bin/env node
import { engine } from "../src/engine.js";
import { evenGame, RULES_OF_GAME } from "../src/games/evenGame.js"

engine(RULES_OF_GAME, evenGame());
