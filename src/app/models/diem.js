import BaseModel from "./baseModel.js";

class Diem extends BaseModel {

    constructor(collectionName) {
        super(BaseModel)
        this.collectionName = 'diems';
    }
    async findBySemester(semester,mssv){
        return await this.getCollection().find({ semester: semester , MSSV : mssv}).toArray()
    }
    async findByYearAndSemeseter(year, semester){
        var regexString = "^" + year; // Xây dựng regex từ giá trị year
        var regex = new RegExp(regexString);
        console.log(semester);
        return await this.getCollection().find({ MSSV: { $regex: regex },
                                                 semester: semester }).toArray();
    }
}
export default new Diem();