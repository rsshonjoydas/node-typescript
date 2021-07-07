"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.routes = void 0;
exports.routes = [
    {
        http: 'get',
        path: '/student',
        handler: (req, res) => {
            res.send(`thanks ${req.method}`);
        },
    },
    {
        http: 'post',
        path: '/student',
        handler: (req, res) => {
            res.send(`thanks for ${req.method}`);
        },
    },
];
//# sourceMappingURL=student.controller.js.map