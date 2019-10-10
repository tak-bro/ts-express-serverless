"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require("source-map-support/register");
const express_1 = __importDefault(require("express"));
const body_parser_1 = __importDefault(require("body-parser"));
const morgan_1 = __importDefault(require("morgan"));
const cors_1 = __importDefault(require("cors"));
const dotenv_1 = __importDefault(require("dotenv"));
const routers_1 = __importDefault(require("./routers"));
// Load environment variables from .env file
dotenv_1.default.config({ path: '.env' });
// Express App
const app = express_1.default();
app.use(cors_1.default());
app.use(body_parser_1.default.json());
app.use(body_parser_1.default.urlencoded({ extended: true }));
app.use(morgan_1.default('dev'));
// Routers
app.use(routers_1.default);
// Development Server
if (process.env.NODE_ENV === 'development') {
    const PORT = process.env.PORT || 3333;
    const HOST = process.env.HOST || 'http://127.0.0.1';
    app.listen(PORT, () => {
        console.log(`Running on port ${HOST}:${PORT}`);
    });
}
exports.default = app;
//# sourceMappingURL=app.js.map