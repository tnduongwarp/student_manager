import express from 'express'
import { getAll,getById,insertOne } from '../controller/postcontroller.js';
const router = express.Router();

router.get('/all',getAll);
router.get('/:id',getById);
router.post('/add',insertOne)


export default router