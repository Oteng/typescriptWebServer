import {BaseController} from './BaseController';
import {route} from '../decorators/Decorators';

export class IndexController extends BaseController {

    @route('/',)
    index(req, res) {
        IndexController.response(res, 'success', '', {test: 'data one', test2: 'data two'});
    }
}
