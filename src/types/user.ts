export type UserResponse = {
    id: string;
    email: string;
    password: string;
    name: string;
    role: 'ADMIN' | 'USER';
};

export type UserType = UserResponse & {
    created_at: Date;
    updated_at: Date;
};
