"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const DB_1 = require("../models/DB");
class Create_table_login {
    createTable() {
        let db = DB_1.DB.getInstance();
        db.query('create table if not exists tbl_login(id serial not null primary key,hash_pass text,username text);', '')
            .then(res => {
        }).catch(err => {
            console.log(err);
        });
        return false;
    }
}
exports.Create_table_login = Create_table_login;
//# sourceMappingURL=create_table_login.js.map