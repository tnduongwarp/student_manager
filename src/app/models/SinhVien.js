import BaseModel from './baseModel.js'

// const BaseModel = require('./baseModel')

class sinhvien extends BaseModel {
    constructor() {
        super(BaseModel);
        this.collectionName = 'sinhviens'
    }
    async findbyClassName(className) {
        return await this.getCollection().find({ class: className }).toArray()
    }
    async findbyMSSV(MSSV) {
        return await this.getCollection().find({ MSSV: MSSV }).toArray()
    }

}
export default new sinhvien();