// import dependencies
import express from 'express';
import bodyParser from 'body-parser';
// import mongoose from 'mongoose';
import logger from 'morgan';
import route from './routes/index.js'

// set up dependencies
const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(logger('dev'));




// set up port
import dotenv from 'dotenv'
dotenv.config();
const port = process.env.PORT || 3000;


// set up route
app.get('/', (req, res) => {
    res.status(200).json({
        message: 'Welcome to Project with Nodejs Express and MongoDB',
    });
});
route(app);
app.listen(port, () => {
    console.log(`Our server is running on port ${port}`);
});
