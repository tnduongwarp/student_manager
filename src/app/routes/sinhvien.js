

import express from 'express'
const router = express.Router();
import { getAllStudent, getStudentById, createStudent, updateStudent, deleteOneStudent, getStudentByClassName } from '../controller/sinhviencontroller.js';

router.get('/all', getAllStudent);
router.get('/:id', getStudentById);
router.post('/add', createStudent);
router.post('/update/:id', updateStudent);
router.delete('/:id', deleteOneStudent);
router.get('/all/class', getStudentByClassName);

export default router; 