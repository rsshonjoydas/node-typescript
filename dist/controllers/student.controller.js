"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.routes = void 0;
const getHandler = (req, res) => {
    res.send(`thanked ${req.method}`);
};
const postHandler = (req, res) => {
    res.send(`thanks for ${req.method}`);
};
exports.routes = [
    {
        http: 'get',
        path: '/student',
        handler: getHandler,
    },
    {
        http: 'post',
        path: '/student',
        handler: postHandler,
    },
];
//# sourceMappingURL=student.controller.js.map