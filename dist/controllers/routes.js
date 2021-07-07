"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.routes = void 0;
const student_controller_1 = require("./student.controller");
// TODO: dynamic routing setup
exports.routes = [
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
//# sourceMappingURL=routes.js.map