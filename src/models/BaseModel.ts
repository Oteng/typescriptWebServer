export abstract class BaseModel {
    abstract validate();

    abstract setUpdateObj(obj): any;

    abstract create(obj): any;

    abstract getAll(): any;

}
