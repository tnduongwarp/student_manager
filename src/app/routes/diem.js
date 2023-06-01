import authenticate from '../middlewares/authenticate.js'
import express from 'express'
const router = express.Router();
import { getAll, add ,getByMSSV, getByYearAndSemeseter} from '../controller/scorecontroller.js';
router.get('/chart',getByYearAndSemeseter)

router.get('/all',[authenticate.verifyToken, authenticate.isAdmin], getAll);

router.post('/add',[authenticate.verifyToken, authenticate.isAdmin], add);

router.get('/:mssv',[authenticate.verifyToken, authenticate.isStudent], getByMSSV)



export default router; 