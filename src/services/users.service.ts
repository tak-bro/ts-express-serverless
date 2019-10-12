import { CreateUserDto, User } from '../models';

export class UsersService {

    private readonly users: User[] = [];

    constructor() {}

    create(user: CreateUserDto): User {
        const { name, age } = user;
        const newUser: User = { name, age, created_at: new Date() };
        this.users.push(newUser);
        return newUser;
    }

    findAll(): Promise<User[]> {
        return new Promise((resolve, reject) => {
            try {
                resolve(this.users);
            } catch (err) {
                reject(err);
            }
        });
    }
}
