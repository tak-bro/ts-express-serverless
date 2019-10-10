import { User } from '../models/user.interface';
import { CreateUserDto } from '../models/create-user.dto';
export declare class UsersService {
    private readonly users;
    constructor();
    create(user: CreateUserDto): User;
    findAll(): Promise<User[]>;
}
