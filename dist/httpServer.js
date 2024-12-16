"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.httpServer = void 0;
const app_1 = __importDefault(require("./app")); // Usando import no lugar de require
const node_http_1 = require("node:http"); // Usando import no lugar de require
exports.httpServer = (0, node_http_1.createServer)(app_1.default);
