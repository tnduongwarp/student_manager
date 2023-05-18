import BaseModel from "./baseModel.js";

class Diem extends BaseModel {

    constructor(collectionName) {
        super(BaseModel)
        this.collectionName = 'diems';
    }
    async findBySemester(semester,mssv){
        return await this.getCollection().find({ semester: semester , MSSV : mssv}).toArray()
    }
}
export default new Diem();