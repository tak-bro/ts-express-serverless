import { UsersService } from '../services/users.service';

import { User } from '../models/user.interface';
import { CreateUserDto } from '../models/create-user.dto';

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
