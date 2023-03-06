
import BaseModel from "./baseModel.js";

class User extends BaseModel {

    constructor(collectionName) {
        super(BaseModel)
        this.collectionName = 'users';
    }

}
export default new User();