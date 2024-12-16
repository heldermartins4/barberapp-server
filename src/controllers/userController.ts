import UserModel from '../models/user';
import { Request, Response } from 'express';

export class UserController {

    private userDb = new UserModel.UserHandlers();

    async createUser(req: Request, res: Response) {
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
        } catch (error) {
            console.error(`USER CREATE ERROR:\n ${error}`);
            res.status(500).json({ error: 'Internal server error' });
        }
    }
}