

import e from 'express';
import SinhVien from '../routes/sinhvien.js'
import User from '../models/User.js';

import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken';




function route(app) {
    app.use(function(req, res, next) {
        res.header(
          "Access-Control-Allow-Headers",
          "x-access-token, Origin, Content-Type, Accept"
        );
        next();
      });
    app.use('/student', SinhVien);

    app.post("/register", async (req, res) => {


        try {

            const { mssv, email, password, role } = req.body;


            if (!(email && password && mssv)) {
                res.status(400).send("All input is required");
            }


            const oldUser = await User.find({ email: email });
            console.log(oldUser)

            if (oldUser.at(0)) {
                return res.status(409).send("User Already Exist. Please Login");
            }

            const encryptedPassword = await bcrypt.hash(password, 10);

            const token = jwt.sign(
                { email ,mssv},
                process.env.TOKEN_KEY,
                {
                    expiresIn: "2h",
                }
            );

            const user = {
                mssv: mssv,
                email: email,
                password: encryptedPassword,
                roles: role

            };
            User.insertOne(user);




            res.status(201).json(user);
        } catch (err) {
            console.log(err);
        }

    });




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

                
                
                res.status(200).json({
                    id: user._id,
                    name: user.name,
                    email: user.email,
                    roles: user.role,
                    accessToken: token
                });
            }
            else res.status(400).send("Invalid Credentials");
        } catch (err) {
            console.log(err);
        }

    });
    app.post('signout', async (req, res)=>{
        try {
            req.session = null;
            return res.status(200).send({ message: "You've been signed out!" });
          } catch (err) {
            this.next(err);
          }
    })
}

export default route;