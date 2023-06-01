import express from 'express'
import { deleteOne, getAll,insertOne, updateById } from '../controller/usercontroller.js';
const router = express.Router();
router.get('/all', getAll);
router.post('/add',insertOne);
router.post('/update/:id', updateById)
router.delete('/delete/:id', deleteOne);
export default router;
