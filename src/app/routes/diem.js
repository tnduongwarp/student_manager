import authenticate from '../middlewares/authenticate.js'
import express from 'express'
const router = express.Router();
import { getAll, add ,getByMSSV, getByYearAndSemeseter, updateById} from '../controller/scorecontroller.js';
router.get('/chart',getByYearAndSemeseter)

router.get('/all',[authenticate.verifyToken], getAll);

router.post('/add',[authenticate.verifyToken], add);

router.get('/:mssv',[authenticate.verifyToken], getByMSSV)

router.post('/:id', authenticate.verifyToken, updateById)

export default router; 