import {DB} from './DB';
import {BaseModel} from './BaseModel';

export class TblUser extends BaseModel {
    validate() {
        throw new Error('Method not implemented.');
    }

    private db;

    constructor() {
        super();
        this.db = DB.getInstance();
    }

    id: number = null;
    fname: string = null;
    lname: string = null;
    email: string = null;
    contact: string = null;

    setUpdateObj(obj): any {
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

    create(obj = null): any {
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
