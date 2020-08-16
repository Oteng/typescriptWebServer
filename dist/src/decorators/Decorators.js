"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const app_1 = require("../../app");
function route(url, method) {
    return function (target, propertyKey, descriptor) {
        app_1.default[(method || 'all').toLowerCase()](url, descriptor.value);
    };
}
exports.route = route;
//# sourceMappingURL=Decorators.js.map