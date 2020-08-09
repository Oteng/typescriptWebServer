import {BaseController} from './BaseController';
import {route} from '../decorators/Decorators';
import {Validator} from '../service/Validator';
import {TblUser} from '../models/TblUser';
import {TblLogin} from '../models/TblLogin';

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

    @route('/login_create', 'post')
    createLogin(req, res) {
        let login = new TblLogin();
        try {
            return UsersController.response(res, 'success', '', login.create(req.body));
        } catch (e) {
            return UsersController.response(res, 'failed', `The server died ${e}`);
        }

    }

    @route('/login', 'post')
    login(req, res) {
        let vaRes = Validator.valid(req.body, [
            {field: 'username', des: 'Username is Required',}, {
                field: 'password', des: 'Password is Required'
            }
        ]);
        if (vaRes.length > 0) {
            return UsersController.response(res, 'failed', '', vaRes);
        }

        let login = new TblLogin();
        login.setUpdateObj(req.body);
        let user = login.authenticate();
        if (user) {
            return UsersController.response(res, 'success', '', user);
        } else {
            return UsersController.response(res, 'failed', 'All fields are required', null);
        }
    }
}
