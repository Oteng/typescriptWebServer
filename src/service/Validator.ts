export class Validator {
    public static valid(source: any[], schema: any[]): any {
        console.log(source)
        let result: any = [];
        for (let item of schema) {
            if (!source[item.field]) {
                result.push({msg: `${item.des} is required`});
            }
        }
        return result;
    }
}
