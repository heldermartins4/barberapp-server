import { UserResponse } from "@/types/user";
import prisma from "../lib/prisma";

namespace UserModel {

    export interface UserCreateInput {
        email: string;
        password: string;
        name: string;
        role: 'ADMIN' | 'USER';
    };

    export class UserHandlers {

        private db = prisma;

        async createUser(data: UserCreateInput): Promise<UserResponse> {
            return await this.db.user.create({
                data
            }) as unknown as UserResponse;
        }

        async getUserByEmail(email: string): Promise<UserResponse> {
            return await this.db.user.findUnique({
                where: {
                    email
                }
            }) as unknown as UserResponse;
        }
    }
}

export default UserModel;