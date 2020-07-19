"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
const BaseController_1 = require("./BaseController");
const Decorators_1 = require("../decorators/Decorators");
class IndexController extends BaseController_1.BaseController {
    index(req, res) {
        IndexController.response(res, 'success', '', { test: 'data one', test2: 'data two' });
    }
}
__decorate([
    Decorators_1.route('/')
], IndexController.prototype, "index", null);
exports.IndexController = IndexController;
//# sourceMappingURL=IndexController.js.map