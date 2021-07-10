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
exports.routes = void 0;
const student_services_1 = require("../services/student.services");
const getHandler = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const students = yield student_services_1.getStudent();
    res.send(students);
});
const collection = student_services_1.StudentDocument;
const postHandler = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    let savedId = yield student_services_1.save(collection, req.body);
    res.send(`thanks for ${savedId}`);
});
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