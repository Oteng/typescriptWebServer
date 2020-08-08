export abstract class BaseController {
    static response(res, status: number | string, msg?: string, body: any = {}) {
        if (typeof status == 'number')
            res.status(status);
        return res.json({status: status, msg: msg, data: body});
    }

    static sysErr(res: any, msg: string): any {
        return BaseController.response(res, 'failed', msg || 'Where was a server Error')
    }

    static dataErr(res, msg: string) {
        return BaseController.response(res, 'failed', msg || 'All fields are required')
    }
}
