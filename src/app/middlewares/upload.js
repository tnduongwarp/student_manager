
import util from 'util'

import multer from 'multer';

import { GridFsStorage } from 'multer-gridfs-storage';
import dotenv from 'dotenv'
dotenv.config();

var storage = new GridFsStorage({
  url: process.env.MONGO_URL + process.env.DATABASE,
  options: { useNewUrlParser: true, useUnifiedTopology: true },
  file: (req, file) => {
    const match = ["image/png", "image/jpeg"];

    if (match.indexOf(file.mimetype) === -1) {
      const filename = `${Date.now()}-duongdeptrai`;
      return filename;
    }

    return {
      bucketName: 'avatars',
      filename: `${Date.now()}-duongdz`,
      
    };
  }
});

var uploadFiles = multer({ storage: storage }).single("avatar");
var uploadFilesMiddleware = util.promisify(uploadFiles);
export default uploadFilesMiddleware;