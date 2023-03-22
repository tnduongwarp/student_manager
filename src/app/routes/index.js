

import e from 'express';
import SinhVien from '../routes/sinhvien.js'
import User from '../models/User.js';

import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken';




function route(app) {
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
                res.status(400).send("All input is required");
            }

            const user = await User.findOne({ email: email });
            

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

                user.token = token;

                res.status(200).json(user);
            }
            else res.status(400).send("Invalid Credentials");
        } catch (err) {
            console.log(err);
        }

    });
}

export default route;