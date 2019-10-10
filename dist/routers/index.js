"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const users_router_1 = require("./users.router");
const router = express_1.Router();
router.use('/users', users_router_1.usersRouter());
exports.default = router;
//# sourceMappingURL=index.js.map