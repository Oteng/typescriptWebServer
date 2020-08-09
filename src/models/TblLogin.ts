import {DB} from './DB';
import {BaseModel} from './BaseModel';
import * as bcrypt from 'bcryptjs';

export class TblLogin extends BaseModel {
    private db;

    constructor() {
        super();
        this.db = DB.getInstance();
    }

    password: string;
    username: string;
    hash_pass: string;

    create(obj): any {
        if (obj !== null) {
            this.setUpdateObj(obj);
        }
        this.db.insert({hash_pass: this.hash_pass, username: this.username}, 'tbl_login').then(res => {
            console.log(res);
            return res;
        }).catch(err => {
            console.log(err);
            throw err;
        });
    }

    getAll(): any {
        throw 'Not Implemented';
    }

    setUpdateObj(obj): any {
        if (obj.username) {
            this.username = obj.username;
        }
        if (obj.password) {
            this.password = obj.password;
        }
        let salt = bcrypt.genSaltSync(10);
        this.hash_pass = bcrypt.hashSync(this.password, salt);
    }

    authenticate(): any {
        this.db.query(`select * from tbl_login where username = '${this.username}'`)
            .then(r => {

                if (!r.rows.length) {
                    return false;
                } else if (bcrypt.compareSync(this.password, r.rows[0].hash_pass)) {
                    return r.rows[0];
                } else {
                    return false;
                }
                // console.log(r.rows);
            });
    }

    validate() {
    }
}
