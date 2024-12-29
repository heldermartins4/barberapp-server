export type UserResponse = {
    id: string;
    email: string;
    password: string;
    name: string;
    role: 'admin' | 'user';
};

export type UserType = UserResponse & {
    created_at: Date;
    updated_at: Date;
};
