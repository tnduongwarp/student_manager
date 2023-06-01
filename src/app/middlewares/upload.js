import util from 'util'
import multer from 'multer';
import { GridFsStorage } from 'multer-gridfs-storage';
import dotenv from 'dotenv'
dotenv.config();


const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'D:/Project_II/pro2/angular/src/assets/images')
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + '-' + file.originalname)
  }
})

var uploadFiles = multer({ storage: storage }).single("avatar");
var uploadFilesMiddleware = util.promisify(uploadFiles);
export default uploadFilesMiddleware;