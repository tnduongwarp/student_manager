// import dependencies
import express from 'express';
import bodyParser from 'body-parser';

import logger from 'morgan';
import route from './routes/index.js'
import cors from 'cors'

import cookieSession from 'cookie-session';
// set up dependencies
const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(logger('dev'));
var corsOptions = {
    origin: ["http://localhost:4200"],
    credentials: true
  }
app.use(cors(corsOptions));


app.set('views', 'D:/nodejs_basic/src/app/views');
app.set('view engine', 'pug');
app.use(
    cookieSession({
      name: "duong-session",
      secret: "trannamduongwarp", // should use as secret environment variable
      httpOnly: true
    })
  );
app.use(express.static('D:/nodejs_basic/src/app/public'))
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
