import authenticate from '../middlewares/authenticate.js'
import express from 'express'
const router = express.Router();
import { getAll, add } from '../controller/scorecontroller.js';

router.get('/all',[authenticate.verifyToken, authenticate.isAdmin], getAll);

router.post('/add',[authenticate.verifyToken, authenticate.isAdmin], add);


export default router; 