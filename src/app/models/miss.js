import BaseModel from "./baseModel.js";

class Miss extends BaseModel {

    constructor(collectionName) {
        super(BaseModel)
        this.collectionName = 'misses';
    }

}
export default new Miss();