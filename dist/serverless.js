"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const app_1 = __importDefault(require("./app"));
const serverless_http_1 = __importDefault(require("serverless-http"));
module.exports.handler = serverless_http_1.default(app_1.default);
//# sourceMappingURL=serverless.js.map