import {Client} from 'pg';

export class DB {
    public static instance: DB = null;
    public pgInstance = null;

    public static getInstance(): DB {
        if (this.instance == null) {
            return this.instance = new DB();
        }
        return this.instance;
    };

    constructor() {
        this.pgInstance = new Client({
            host: 'localhost',
            user: 'oteng',
            password: '1234567890',
            database: 'lesson',

        });
        this.pgInstance.connect();
    }

    public query(sql, values): Promise<DB> {
        return this.pgInstance.query(sql, values);
    }

    public insert(obj, table, col = null): Promise<DB> {
        let value = [];
        for (let i in Object.keys(obj)) {
            value.push(('$' + (parseInt(i) + 1)));
        }
        return this.pgInstance.query(`INSERT INTO ${table} (${col ? col : Object.keys(obj).join(',')}) VALUES(${value.join(',')}) RETURNING id`, Object.values(obj));
    }
}
