import SinhVien from '../routes/sinhvien.js'
import User from '../models/User.js';
import diem from '../routes/diem.js'
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken';
import * as qrcontroller from '../controller/qrcontroller.js';
import uploadFilesMiddleware from '../middlewares/upload.js';
import Miss from '../routes/miss.js'
import post from '../routes/post.js'

function route(app) {
    app.use(function(req, res, next) {
        res.header(
          "Access-Control-Allow-Headers",
          "x-access-token, Origin, Content-Type, Accept"
        );
        next();
      });
    app.use('/student', SinhVien);
    app.use('/post',post)


    



    app.post("/login", async (req, res) => {


        try {

           const {email,password}= req.body;


            if (!(email && password)) {
                 return res.status(400).send("All input is required");
            }

            var user = await User.findOne({ email: email });
            

            if (user && (await bcrypt.compare(password, user.password))) {

                const token = await jwt.sign(
                    { 
                       email: user.email,
                        role: user.role
                    },
                    process.env.TOKEN_KEY,
                    {
                        expiresIn: "2h",
                    }
                );

                req.session.token=token
                
                res.status(200).json(user);
            }
            else res.status(400).send("Invalid Credentials");
        } catch (err) {
            console.log(err);
        }

    });
    app.post("/logout", async (req, res)=>{
        try {
            
            req.session=null;
            return res.status(200).send({ message: "You've been signed out!" });
          } catch (err) {
            console.log(err)
          }
    })

    app.post("/upload", async (req,res) => {
        try{
            await uploadFilesMiddleware(req, res);
            
            const file = req.file
            
            if (file == undefined) {
                return res.status(404).send({
                  message: "You must select a file.",
                });
              }
              return res.send({
                message: "Uploaded",
                id: file.id,
                name: file.filename,
                contentType: file.contentType,
              })
        }
        catch (error) {
            console.log(error);
        
            return res.send({
              message: "Error when trying upload image: ${error}",
            });
          }
    })
}

export default route;