import BaseModel from './baseModel.js'
import { ObjectId } from 'mongodb'
// const BaseModel = require('./baseModel')

class Avatar extends BaseModel {
    constructor() {
        super(BaseModel);
        this.collectionName = 'avatars.chunks'
    }
    async findByFile_id(file_id) {
        return await this.getCollection().find({ files_id: new ObjectId(file_id)  }).toArray()
    }
    

}
export default new Avatar();