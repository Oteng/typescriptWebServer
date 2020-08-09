import {MigrationCreate} from './MigrationInterface';
import {DB} from '../models/DB';

export class Create_table_login implements MigrationCreate {
    createTable(): boolean {
        let db = DB.getInstance();
        db.query('create table if not exists tbl_login(id serial not null primary key,hash_pass text,username text);', '')
            .then(res => {
            }).catch(err => {
            console.log(err);
        });
        return false;
    }

}
