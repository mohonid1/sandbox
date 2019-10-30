import express from "express";
import SCG, { Formula, Place } from '../controllers/scg'

const router = express.Router();


// You can require and use your routes here ;)

router.get('/', function (req, res) {
    res.send(SCG())
})

router.get('/formula/:index', function (req, res) {
    res.send(Formula(parseInt(req.params.index)).toString())
})

router.get('/places/:keyword', async function (req, res) {
    res.send(await Place(req.params.keyword))
})


export default router;