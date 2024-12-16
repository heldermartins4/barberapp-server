export type UserType = {
    id: number;
    email: string;
    password: string;
    name: string;
    role: 'admin' | 'user';
    created_at: Date;
    updated_at: Date;
};