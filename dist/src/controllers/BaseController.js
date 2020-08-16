"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class BaseController {
    static response(res, status, msg, body = {}) {
        if (typeof status == 'number')
            res.status(status);
        return res.json({ status: status, msg: msg, data: body });
    }
    static sysErr(res, msg) {
        return BaseController.response(res, 'failed', msg || 'Where was a server Error');
    }
    static dataErr(res, msg) {
        return BaseController.response(res, 'failed', msg || 'All fields are required');
    }
}
exports.BaseController = BaseController;
//# sourceMappingURL=BaseController.js.map