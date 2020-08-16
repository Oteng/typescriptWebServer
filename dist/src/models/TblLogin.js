"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const DB_1 = require("./DB");
const BaseModel_1 = require("./BaseModel");
const bcrypt = require("bcryptjs");
class TblLogin extends BaseModel_1.BaseModel {
    constructor() {
        super();
        this.db = DB_1.DB.getInstance();
    }
    create(obj) {
        if (obj !== null) {
            this.setUpdateObj(obj);
        }
        this.db.insert({ hash_pass: this.hash_pass, username: this.username }, 'tbl_login').then(res => {
            console.log(res);
            return res;
        }).catch(err => {
            console.log(err);
            throw err;
        });
    }
    getAll() {
        throw 'Not Implemented';
    }
    setUpdateObj(obj) {
        if (obj.username) {
            this.username = obj.username;
        }
        if (obj.password) {
            this.password = obj.password;
        }
        let salt = bcrypt.genSaltSync(10);
        this.hash_pass = bcrypt.hashSync(this.password, salt);
    }
    authenticate() {
        this.db.query(`select * from tbl_login where username = '${this.username}'`)
            .then(r => {
            if (!r.rows.length) {
                return false;
            }
            else if (bcrypt.compareSync(this.password, r.rows[0].hash_pass)) {
                return r.rows[0];
            }
            else {
                return false;
            }
            // console.log(r.rows);
        });
    }
    validate() {
    }
}
exports.TblLogin = TblLogin;
//# sourceMappingURL=TblLogin.js.map