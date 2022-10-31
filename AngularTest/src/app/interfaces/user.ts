export interface User {
    id: number;
    firstName: string;
    surName: string;
    email: string;
    password: string;
    createdAt: Date;
    updateAt?: Date;
    deletedAt?: Date;
    userType?: number
}
