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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.save = exports.getAll = exports.convert = exports.StudentViewModel = exports.StudentDocument = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const Schema = mongoose_1.default.Schema;
const StudentSchema = new Schema({
    name: { type: String },
    phone: { type: String },
    email: { type: String },
    createdAt: { type: Date },
    modifiedAt: { type: Date },
});
exports.StudentDocument = mongoose_1.default.model('Student', StudentSchema, 'Students');
class StudentViewModel {
    constructor() {
        this.id = '';
        this.name = '';
        this.phone = '';
        this.email = '';
    }
}
exports.StudentViewModel = StudentViewModel;
const convert = (model, vm) => {
    const source = Object.create(model);
    const keys = Object.keys(vm);
    let viewModel = {};
    keys.forEach((key) => {
        viewModel[key] = source[key];
    });
    return viewModel;
};
exports.convert = convert;
const getAll = (collection, vm) => __awaiter(void 0, void 0, void 0, function* () {
    const models = yield collection.find().exec();
    const vms = models.map((model) => exports.convert(model, vm));
    return vms;
});
exports.getAll = getAll;
const save = (collection, payload) => __awaiter(void 0, void 0, void 0, function* () {
    const obj = Object.assign(Object.assign({}, payload), { id: new mongoose_1.default.Types.ObjectId(), createdAt: new Date(), modifiedAt: new Date() });
    const saveObj = yield collection.create(obj);
    return saveObj.id;
});
exports.save = save;
//# sourceMappingURL=student.services.js.map