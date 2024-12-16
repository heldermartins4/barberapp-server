"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserController = void 0;
const user_1 = __importDefault(require("../models/user"));
class UserController {
    userDb = new user_1.default.UserHandlers();
    async createUser(req, res) {
        // crypt a password and pass it to the db
        try {
            const { email, password, name, role } = req.body;
            const user = await this.userDb.createUser({
                email,
                password,
                name,
                role
            });
            res.status(201).json(user);
        }
        catch (error) {
            console.error(`USER CREATE ERROR: ${error}`);
            res.status(500).json({ error: 'Internal server error' });
        }
    }
}
exports.UserController = UserController;
