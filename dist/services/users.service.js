"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class UsersService {
    constructor() {
        this.users = [];
    }
    create(user) {
        const { name, age } = user;
        const newUser = { name, age, created_at: new Date() };
        this.users.push(newUser);
        return newUser;
    }
    findAll() {
        return new Promise((resolve, reject) => {
            try {
                resolve(this.users);
            }
            catch (err) {
                reject(err);
            }
        });
    }
}
exports.UsersService = UsersService;
//# sourceMappingURL=users.service.js.map