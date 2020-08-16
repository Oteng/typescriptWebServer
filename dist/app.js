"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Express = require("express");
const BP = require("body-parser");
const fs = require("fs");
const create_table_user_1 = require("./src/migration/create_table_user");
const create_table_login_1 = require("./src/migration/create_table_login");
const expressApp = Express();
expressApp.use(BP.json({ extended: true }));
expressApp.use(function (req, res, next) {
    res.header('Access-Control-Allow-Origin', 'http://localhost:4200'); // update to match the domain you will make the request from
    res.header('Access-Control-Allow-Headers', 'Origin, Content-Type, Accept');
    // res.header('Access-Control-Allow-Method', 'POST');
    next();
});
exports.default = expressApp;
const port = 3000;
//load migrations
(new create_table_user_1.Create_table_user()).createTable();
(new create_table_login_1.Create_table_login()).createTable();
let baseControllerUri = './src/controllers/';
let controllers = fs.readdirSync(baseControllerUri);
for (let controller of controllers) {
    if (controller === 'BaseController.ts') {
        continue;
    }
    let nameOfController = controller.split('.')[0];
    Promise.resolve().then(() => require('./src/controllers/' + nameOfController)).then(obj => {
        let tmp = new obj[nameOfController]();
    }).catch(err => {
        console.log(err);
    });
}
expressApp.listen(port, () => console.log(`Example app listening at http://localhost:${port}`));
//# sourceMappingURL=app.js.map