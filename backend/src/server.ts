
// Require Dependencies
import env from "mandatoryenv"
import express from "express"

import morgan from "morgan"

import cookieParser from "cookie-parser"
import cors from "cors"

import RunJob from './controllers/schedule'

// Load .env Enviroment Variables to process.env
env.load([
    'PORT',
    'SECRET_KEY'
]);
const { PORT } = process.env;

// Instantiate an Express Application

const app = express();


// Configure Express App Instance
app.use(express.json( { limit: '50mb' } ));
app.use(express.urlencoded( { extended: true, limit: '10mb' } ));

app.use(morgan('dev'));


app.use(cookieParser());
app.use(cors());

// This middleware adds the json header to every response
app.use('*', (req, res, next) => {
    res.setHeader('Content-Type', 'application/json');
    next();
})

// Assign Routes
import router from "./routes/router"
import scgroute from "./routes/scg"
app.use('/', router);
app.use('/SCG', scgroute);

// Handle errors
app.use((err, req, res, next) => {
    if(err){
        res
        .status(409)
        .send({status: false,message: err+''});
    } else {
        next();
    }
});

// Handle not valid route
app.use('*', (req, res) => {
    res
    .status(404)
    .json( {status: false, message: 'Endpoint Not Found'} );
})

// Open Server on configurated Port

app.listen(
    PORT,
    () => console.info('Server listening on port ', PORT)
);

RunJob()