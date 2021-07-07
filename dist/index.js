"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// ? external imports
const express_1 = __importDefault(require("express"));
const mongoose = require('mongoose');
const dotenv = require('dotenv');
// ? internal imports
const PORT = process.env.PORT || 5000;
const init = () => {
    let app = express_1.default();
    // TODO: dynamic routing setup
    let routes = [
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
    ];
    routes.forEach((route) => {
        app[route.http](route.path, route.handler);
    });
    app.use('/', (req, res) => {
        res.send('RS Shonjoy' + new Date());
    });
    return app;
};
const app = init();
app.listen(PORT, () => {
    console.log(`app listing to port ${PORT}`);
});
//# sourceMappingURL=index.js.map