"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const users_service_1 = require("../services/users.service");
class UsersController {
    constructor() {
        this.usersService = new users_service_1.UsersService();
    }
    findAll() {
        return this.usersService.findAll();
    }
    createUser(user) {
        return this.usersService.create(user);
    }
}
exports.UsersController = UsersController;
//# sourceMappingURL=users.controller.js.map