import * as Express from 'express';
import * as BP from 'body-parser';
import * as fs from 'fs';
import * as cors from 'cors';
import {Create_table_user} from './src/migration/create_table_user';

const expressApp = Express();
expressApp.use(BP.json({extended: true}));
expressApp.use(cors());
expressApp.options('*', cors());
export default expressApp;
const port = 3000;

//load migrations
(new Create_table_user()).createTable();

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
