import BaseModel from "./baseModel.js";

class Diem extends BaseModel {

    constructor(collectionName) {
        super(BaseModel)
        this.collectionName = 'diems';
    }
    async findBySemester(semester){
        return await this.getCollection().find({ semester: semester }).toArray()
    }
}
export default new Diem();