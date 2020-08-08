import {MigrationCreate} from './MigrationInterface';
import {DB} from '../models/DB';

export class Create_table_user implements MigrationCreate {
    createTable(): boolean {
        let db = DB.getInstance();
        db.query('create table if not exists tbl_user(id serial not null primary key,fname text,lname text,email text,contact text);', '')
            .then(res => {
            }).catch(err => {
            console.log(err);
        });
        return false;
    }

}
