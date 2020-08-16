"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Validator {
    static valid(source, schema) {
        console.log(source);
        let result = [];
        for (let item of schema) {
            if (!source[item.field]) {
                result.push({ msg: `${item.des} is required` });
            }
        }
        return result;
    }
}
exports.Validator = Validator;
//# sourceMappingURL=Validator.js.map