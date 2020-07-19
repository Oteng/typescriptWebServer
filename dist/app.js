"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Express = require("express");
const fs = require("fs");
const expressApp = Express();
exports.default = expressApp;
const port = 3000;
let baseControllerUri = './src/controllers/';
let controllers = fs.readdirSync(baseControllerUri);
for (let controller of controllers) {
    if (controller === 'BaseController.ts')
        continue;
    let nameOfController = controller.split('.')[0];
    Promise.resolve().then(() => require('./src/controllers/' + nameOfController)).then(obj => {
        let tmp = new obj[nameOfController]();
    }).catch(err => {
        console.log(err);
    });
}
expressApp.listen(port, () => console.log(`Example app listening at http://localhost:${port}`));
//# sourceMappingURL=app.js.map