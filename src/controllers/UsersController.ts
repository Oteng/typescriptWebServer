import {BaseController} from './BaseController';
import {route} from '../decorators/Decorators';
import {Validator} from '../service/Validator';
import {TblUser} from '../models/TblUser';

export class UsersController extends BaseController {
    @route('/users', 'get')
    getusers(req, res) {
        let user = new TblUser();
        user.getAll().then(r => {
            return UsersController.response(res, 'success', '', r.rows);
        }).catch(err => {
            throw err;
        });

    }

    @route('/users', 'post')
    insertUser(req, res) {
        let valRes = Validator.valid(req.body, [
            {field: 'fname', des: 'First Name'},
            {field: 'lname', des: 'Last Name'},
            {field: 'email', des: 'Email'},
            {field: 'contact', des: 'Contact'}
        ]);
        if (valRes.length > 0) {
            return UsersController.response(res, 'failed', '', valRes);
        }


        let user = new TblUser();
        try {
            user.create(req.body);
            return UsersController.response(res, 'success', '', user.create(req.body));
        } catch (e) {
            return UsersController.response(res, 'failed', 'The server died');
        }
    }
}
