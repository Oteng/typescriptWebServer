"use strict";
exports.__esModule = true;
exports.route = void 0;
var app_1 = require("../../app");
function route(url, method) {
    return function (target, propertyKey, descriptor) {
        app_1["default"][(method || 'all').toLowerCase()](url, descriptor.value);
    };
}
exports.route = route;
//# sourceMappingURL=Decorators.js.map