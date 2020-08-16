"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const pg_1 = require("pg");
class DB {
    constructor() {
        this.pgInstance = null;
        this.pgInstance = new pg_1.Client({
            host: 'localhost',
            user: 'postgres',
            password: '',
            database: 'lesson',
        });
        this.pgInstance.connect();
    }
    static getInstance() {
        if (this.instance == null) {
            return this.instance = new DB();
        }
        return this.instance;
    }
    ;
    query(sql, values) {
        return this.pgInstance.query(sql, values);
    }
    insert(obj, table, col = null) {
        let value = [];
        for (let i in Object.keys(obj)) {
            value.push(('$' + (parseInt(i) + 1)));
        }
        return this.pgInstance.query(`INSERT INTO ${table} (${col ? col : Object.keys(obj).join(',')}) VALUES(${value.join(',')}) RETURNING id`, Object.values(obj));
    }
}
exports.DB = DB;
DB.instance = null;
//# sourceMappingURL=DB.js.map