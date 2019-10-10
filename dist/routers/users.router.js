"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const users_controller_1 = require("../controllers/users.controller");
function usersRouter() {
    const router = express_1.Router();
    const usersController = new users_controller_1.UsersController();
    /**
     * Get All Users
     *
     * $ http GET ':3333/users'
     */
    router.get('/', (req, res) => __awaiter(this, void 0, void 0, function* () {
        try {
            const users = yield usersController.findAll();
            res.send(users).status(200);
        }
        catch (err) {
            res.send(err).status(503);
        }
    }));
    /**
     * Create new user from body
     *
     * ```sh
     * $ cat data/create.user.json | http POST ':3333/users/create'
     */
    router.post('/create', (req, res) => {
        try {
            const userData = req.body;
            const newUser = usersController.createUser(userData);
            res.send(newUser).status(200);
        }
        catch (err) {
            res.send(err).status(503);
        }
    });
    return router;
}
exports.usersRouter = usersRouter;
//# sourceMappingURL=users.router.js.map