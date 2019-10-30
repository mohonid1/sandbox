import express from "express";
import Home from '../controllers/home'

const router = express.Router();


// You can require and use your routes here ;)

router.get('/', function (req, res) {
    res.send(Home())
})


export default router;