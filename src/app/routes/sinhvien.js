
import authenticate from '../middlewares/authenticate.js'
import express from 'express'
const router = express.Router();
import {test, getAllStudent, getStudentById, createStudent, updateStudent, deleteOneStudent, getStudentByClassName, getStudentByMSSV } from '../controller/sinhviencontroller.js';
//  router.use(authenticate.verifyToken);
//  router.use(authenticate.isAdmin);

router.get('/all',[authenticate.verifyToken, authenticate.isAdmin], getAllStudent);
router.get('/:id', [authenticate.verifyToken, authenticate.isAdmin],getStudentById);
router.post('/add',[authenticate.verifyToken, authenticate.isAdmin], createStudent);
router.post('/update/:id', [authenticate.verifyToken, authenticate.isAdmin],updateStudent);
router.delete('/:id',[authenticate.verifyToken, authenticate.isAdmin], deleteOneStudent);
router.get('/all/class', [authenticate.verifyToken, authenticate.isAdmin],getStudentByClassName);
router.get('/:mssv',[authenticate.verifyToken, authenticate.isAdmin],getStudentByMSSV)

export default router; 