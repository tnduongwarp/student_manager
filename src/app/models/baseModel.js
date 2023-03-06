import { getDb } from '../mongoconfig.js'
import { ObjectId } from 'mongodb'

export default class BaseModel {
     constructor(collectionName) {
          this.collectionName = collectionName;
     }
     getCollection() {
          return getDb().collection(this.collectionName);
     }
     async find(query) {
          return await this.getCollection().find(query).toArray();
     }
     async findById(id) {
          return await this.getCollection().findOne({ _id: new ObjectId(id) });
     }
     async updatebyid(id, data) {
          return await this.getCollection().updateMany({ _id: new ObjectId(id) }, { $set: data });
     }
     async deleteOneById(id) {
          return await this.getCollection().deleteOne({ _id: new ObjectId(id) });
     }
     async deleteAll() {
          return await this.getCollection().deleteMany({});
     }
     async insertOne(data) {
          return await this.getCollection().insertOne(data);
     }
     async findOne(query) {
          return await this.getCollection().findOne(query);
     }
}
 //BaseModel;