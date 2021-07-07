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
const routes_1 = require("./controllers/routes");
const PORT = process.env.PORT || 5000;
const init = () => {
    let app = express_1.default();
    routes_1.routes.forEach((route) => {
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