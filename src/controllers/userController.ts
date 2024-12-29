import { Request, Response } from 'express';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

import UserModel from '../models/user';
import { UserResponse } from '@/types/user';

import { compare } from 'bcrypt';

export class UserController {

    SALT_ROUNDS: number = 10;

    private userDb = new UserModel.UserHandlers();
    private user: UserResponse | null = null;
    private tkn: string = '';

    async createUser(req: Request, res: Response) {
        try {
            const { email, password, name, role = 'USER' } = req.body;

            if (!email || !password || !name || !role) {
                res.status(400).json({ error: 'Missing required fields' });
                return;
            }

            const hashedPassword = await bcrypt.hash(password, this.SALT_ROUNDS);

            this.user = await this.userDb.createUser({
                email,
                password: hashedPassword,
                name,
                role
            });

            res.status(201).json(this.user);
        } catch (error) {
            console.error(`USER CREATE ERROR:\n ${error}`);
            res.status(500).json({ error: 'Internal server error' });
        }
    }

    async getCredentials(req: Request, res: Response) {
        try {

            const { email, password } = req.query as { email: string, password: string };

            if (!email || !password) {
                res.status(400).json({ error: 'Missing required fields' });
                return;
            }

            this.user = await this.userDb.getUserByEmail(email);

            const isPasswordValid = await compare(password, this.user.password);

            if (!isPasswordValid) {
                res.status(401).json({ error: 'Invalid credentials' });
                return;
            }

            this.tkn = jwt.sign(
                { id: this.user.id },
                process.env.JWT_SECRET as string
            );

            res.setHeader('Authorization', this.tkn);

            res.status(200).json(this.user);
        } catch (error) {
            console.error(`USER GET CREDENTIALS ERROR:\n ${error}`);
            res.status(500).json({ error: 'Internal server error' });

        }
    }

    // async getCredentialsOAuth(req: Request, res: Response) {}
}