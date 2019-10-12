import { UsersService } from '../services/users.service';
import { CreateUserDto, User } from '../models';

export class UsersController {
    private readonly usersService: UsersService;

    constructor() {
        this.usersService = new UsersService();
    }

    findAll(): Promise<User[]> {
        return this.usersService.findAll();
    }

    createUser(user: CreateUserDto): User {
        return this.usersService.create(user);
    }
}
