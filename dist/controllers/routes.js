"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const student_controller_1 = require("./student.controller");
// TODO: dynamic routing setup
const routes = [
    {
        http: 'get',
        path: '/',
        handler: (req, res) => {
            res.send(`thanks ${req.method}`);
        },
    },
    {
        http: 'get',
        path: '/rs',
        handler: (req, res) => {
            res.send(`thanks for rs ${req.method}`);
        },
    },
    {
        http: 'get',
        path: '/shonjoy',
        handler: (req, res) => {
            res.send(`thanks for shonjoy ${req.method}`);
        },
    },
    ...student_controller_1.routes,
];
let router = express_1.default.Router();
routes.forEach((route) => {
    router[route.http](route.path, route.handler);
});
exports.default = router;
//# sourceMappingURL=routes.js.map