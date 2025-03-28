#!/usr/bin/env node
import engine from "../src/engine.js";
import evenParity, { RULES_OF_GAME } from "../src/games/evenParity.js"

engine(RULES_OF_GAME, evenParity());
