"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const DB_1 = require("../models/DB");
class Create_table_user {
    createTable() {
        let db = DB_1.DB.getInstance();
        db.query('create table if not exists tbl_user(id serial not null primary key,fname text,lname text,email text,contact text);', '')
            .then(res => {
        }).catch(err => {
            console.log(err);
        });
        return false;
    }
}
exports.Create_table_user = Create_table_user;
//# sourceMappingURL=create_table_user.js.map