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

        async createUser(data: UserCreateInput) {
            return await this.db.user.create({
                data
            });
        }
    }
}

export default UserModel;