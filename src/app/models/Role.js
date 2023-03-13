import BaseModel from "./baseModel.js"
class Role extends BaseModel {
    constructor() {
        super(BaseModel);
        this.collectionName = "roles";
    }
}
export default new Role();