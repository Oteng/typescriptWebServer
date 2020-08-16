"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const DB_1 = require("./DB");
const BaseModel_1 = require("./BaseModel");
class TblUser extends BaseModel_1.BaseModel {
    constructor() {
        super();
        this.id = null;
        this.fname = null;
        this.lname = null;
        this.email = null;
        this.contact = null;
        this.db = DB_1.DB.getInstance();
    }
    validate() {
        throw new Error('Method not implemented.');
    }
    setUpdateObj(obj) {
        if (obj.id) {
            this.id = obj.id;
        }
        if (obj.fname) {
            this.fname = obj.fname;
        }
        if (obj.lname) {
            this.lname = obj.lname;
        }
        if (obj.email) {
            this.email = obj.email;
        }
        if (obj.contact) {
            this.contact = obj.contact;
        }
    }
    create(obj = null) {
        if (obj !== null) {
            this.setUpdateObj(obj);
        }
        this.db.insert(obj, 'tbl_user').then(res => {
            console.log(res);
            return res;
        }).catch(err => {
            console.log(err);
            throw err;
        });
    }
    getAll() {
        return this.db.query('select * from tbl_user');
    }
}
exports.TblUser = TblUser;
//# sourceMappingURL=TblUser.js.map