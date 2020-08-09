import * as Express from 'express';
import * as BP from 'body-parser';
import * as fs from 'fs';
import {Create_table_user} from './src/migration/create_table_user';
import {Create_table_login} from './src/migration/create_table_login';

const expressApp = Express();
expressApp.use(BP.json({extended: true}));

expressApp.use(function(req, res, next) {
    res.header('Access-Control-Allow-Origin', 'http://localhost:4200'); // update to match the domain you will make the request from
    res.header('Access-Control-Allow-Headers', 'Origin, Content-Type, Accept');
    // res.header('Access-Control-Allow-Method', 'POST');
    next();
});

export default expressApp;
const port = 3000;

//load migrations
(new Create_table_user()).createTable();
(new Create_table_login()).createTable();

let baseControllerUri = './src/controllers/';
let controllers = fs.readdirSync(baseControllerUri);


for (let controller of controllers) {
    if (controller === 'BaseController.ts') {
        continue;
    }

    let nameOfController = controller.split('.')[0];
    import('./src/controllers/' + nameOfController).then(obj => {
        let tmp = new obj[nameOfController]();
    }).catch(err => {
        console.log(err);
    });
}

expressApp.listen(port, () => console.log(`Example app listening at http://localhost:${port}`));
