"use strict";
exports.__esModule = true;
var Express = require("express");
var fs = require("fs");
var expressApp = Express();
exports["default"] = expressApp;
var port = 3000;
var baseControllerUri = './src/controllers/';
var controllers = fs.readdirSync(baseControllerUri);
var _loop_1 = function (controller) {
    if (controller === 'BaseController.ts')
        return "continue";
    var nameOfController = controller.split('.')[0];
    Promise.resolve().then(function () { return require('./src/controllers/' + nameOfController); }).then(function (obj) {
        var tmp = new obj[nameOfController]();
    })["catch"](function (err) {
        console.log(err);
    });
};
for (var _i = 0, controllers_1 = controllers; _i < controllers_1.length; _i++) {
    var controller = controllers_1[_i];
    _loop_1(controller);
}
expressApp.listen(port, function () { return console.log("Example app listening at http://localhost:" + port); });
//# sourceMappingURL=app.js.map