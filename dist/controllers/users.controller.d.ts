import { User } from '../models/user.interface';
import { CreateUserDto } from '../models/create-user.dto';
export declare class UsersController {
    private readonly usersService;
    constructor();
    findAll(): Promise<User[]>;
    createUser(user: CreateUserDto): User;
}
