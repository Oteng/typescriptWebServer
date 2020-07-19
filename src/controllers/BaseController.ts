export abstract class BaseController {
    _res: any;
    _req: any;

    set res(value: any) {
        if (value == null)
            throw "Express Response object is required"
        this._res = value;
    }

    get res() {
        return this._res;
    }

    set req(value: any) {
        if (value == null)
            throw  "Express Response object is required"
        this._req = value;
    }

    get req() {
        return this._req;
    }

    protected constructor(req, res) {
        this.req = req;
        this.res = res;
    }

    response(status: number | string, msg: string, body: any = {}) {
        return this.res.json()
    }

    sysErr(msg: string): any {
        return this.response('failed', msg)
    }

    dataErr(msg: string) {
        return this.response('failed', msg || 'All fields are required')
    }
}