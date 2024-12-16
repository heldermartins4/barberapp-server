"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const prisma_1 = __importDefault(require("../lib/prisma"));
var UserModel;
(function (UserModel) {
    ;
    class UserHandlers {
        db = prisma_1.default;
        async createUser(data) {
            return await this.db.user.create({
                data
            });
        }
    }
    UserModel.UserHandlers = UserHandlers;
})(UserModel || (UserModel = {}));
exports.default = UserModel;
