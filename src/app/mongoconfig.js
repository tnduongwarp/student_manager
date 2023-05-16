import { MongoClient } from 'mongodb'
import dotenv from 'dotenv'
dotenv.config();
const URL = process.env.MONGO_URL
const client = new MongoClient(URL);
client.connect();
console.log('Connected successfully to server');
export function getDb() {
    //const db= client.db('demo').collection('sinhviens');

    return client.db('ProjcectII');
}
// module.exports = getDb