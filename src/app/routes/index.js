

import e from 'express';
import SinhVien from '../routes/sinhvien.js'
import User from '../models/User.js';

import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken';


// const router = express.Router();
// //router.post('/student/add', createStudent);
// router.get('/student/all', getAllStudent);
// //router.patch('/student/update', updateStudent);
// router.get('/student/:id', getStudentById);

function route(app) {
    app.use('/student', SinhVien);

    app.post("/register", async (req, res) => {

        // Our register logic starts here
        try {
            // Get user input
            const { first_name, last_name, email, password } = req.body;

            // Validate user input
            if (!(email && password && first_name && last_name)) {
                res.status(400).send("All input is required");
            }

            // check if user already exist
            // Validate if user exist in our database
            const oldUser = await User.find({ email: email });
            console.log(oldUser)

            if (oldUser.at(0)) {
                return res.status(409).send("User Already Exist. Please Login");
            }

            //Encrypt user password
            const encryptedPassword = await bcrypt.hash(password, 10);



            // Create token
            const token = jwt.sign(
                { email },
                process.env.TOKEN_KEY,
                {
                    expiresIn: "2h",
                }
            );

            // Create user in our database
            const user = {
                first_name: first_name,
                last_name: last_name,
                email: email,
                password: encryptedPassword,
                token: token
            };
            User.insertOne(user);



            // return new user
            res.status(201).json(user);
        } catch (err) {
            console.log(err);
        }
        // Our register logic ends here
    });




    app.post("/login", async (req, res) => {

        // Our login logic starts here
        try {
            // Get user input
            const { email, password } = req.body;

            // Validate user input
            if (!(email && password)) {
                res.status(400).send("All input is required");
            }
            // Validate if user exist in our database
            const user = await User.findOne({ email: email });
            console.log(user)

            if (user && (await bcrypt.compare(password, user.password))) {
                // Create token
                const token = await jwt.sign(
                    { user_id: user._id, email },
                    process.env.TOKEN_KEY,
                    {
                        expiresIn: "2h",
                    }
                );

                // save user token
                user.token = token;

                // user
                res.status(200).json(user);
            }
            else res.status(400).send("Invalid Credentials");
        } catch (err) {
            console.log(err);
        }
        // Our register logic ends here
    });
}

export default route;