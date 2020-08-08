export interface MigrationCreate{
    createTable():boolean;
}
export interface MigrationConstraint{
    createConstraint():boolean
}
