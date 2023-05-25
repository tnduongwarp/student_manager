import express from 'express'
import { getAll,getById,insertOne, deleteById } from '../controller/postcontroller.js';
const router = express.Router();

router.get('/all',getAll);
router.get('/:id',getById);
router.post('/add',insertOne)
router.delete('/delete/:id',deleteById)


export default router