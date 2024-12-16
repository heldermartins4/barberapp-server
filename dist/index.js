"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.url = void 0;
const httpServer_1 = require("./httpServer");
const dotenv_1 = __importDefault(require("dotenv")); // Usando import no lugar de require
dotenv_1.default.config(); // Configurando as variáveis de ambiente
exports.url = process.env.PROD_URL || process.env.DEV_URL;
httpServer_1.httpServer.listen(5000, () => {
    console.log(`Server started on ${exports.url} at ${new Date()}`);
});
