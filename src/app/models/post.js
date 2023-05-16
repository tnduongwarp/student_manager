import BaseModel from "./baseModel.js";

class Post extends BaseModel {

    constructor(collectionName) {
        super(BaseModel)
        this.collectionName = 'posts';
    }

}
export default new Post();