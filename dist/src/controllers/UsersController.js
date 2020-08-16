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
const Validator_1 = require("../service/Validator");
const TblUser_1 = require("../models/TblUser");
const TblLogin_1 = require("../models/TblLogin");
class UsersController extends BaseController_1.BaseController {
    getusers(req, res) {
        let user = new TblUser_1.TblUser();
        user.getAll().then(r => {
            return UsersController.response(res, 'success', '', r.rows);
        }).catch(err => {
            throw err;
        });
    }
    insertUser(req, res) {
        let valRes = Validator_1.Validator.valid(req.body, [
            { field: 'fname', des: 'First Name' },
            { field: 'lname', des: 'Last Name' },
            { field: 'email', des: 'Email' },
            { field: 'contact', des: 'Contact' }
        ]);
        if (valRes.length > 0) {
            return UsersController.response(res, 'failed', '', valRes);
        }
        let user = new TblUser_1.TblUser();
        try {
            user.create(req.body);
            return UsersController.response(res, 'success', '', user.create(req.body));
        }
        catch (e) {
            return UsersController.response(res, 'failed', 'The server died');
        }
    }
    createLogin(req, res) {
        let login = new TblLogin_1.TblLogin();
        try {
            return UsersController.response(res, 'success', '', login.create(req.body));
        }
        catch (e) {
            return UsersController.response(res, 'failed', `The server died ${e}`);
        }
    }
    login(req, res) {
        let vaRes = Validator_1.Validator.valid(req.body, [
            { field: 'username', des: 'Username is Required', }, {
                field: 'password', des: 'Password is Required'
            }
        ]);
        if (vaRes.length > 0) {
            return UsersController.response(res, 'failed', '', vaRes);
        }
        let login = new TblLogin_1.TblLogin();
        login.setUpdateObj(req.body);
        let user = login.authenticate();
        if (user) {
            return UsersController.response(res, 'success', '', user);
        }
        else {
            return UsersController.response(res, 'failed', 'All fields are required', null);
        }
    }
}
__decorate([
    Decorators_1.route('/users', 'get')
], UsersController.prototype, "getusers", null);
__decorate([
    Decorators_1.route('/users', 'post')
], UsersController.prototype, "insertUser", null);
__decorate([
    Decorators_1.route('/login_create', 'post')
], UsersController.prototype, "createLogin", null);
__decorate([
    Decorators_1.route('/login', 'post')
], UsersController.prototype, "login", null);
exports.UsersController = UsersController;
//# sourceMappingURL=UsersController.js.map