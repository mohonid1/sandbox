import express from "express";
import SCG, { Formula, Place, LineSendMessage } from '../controllers/scg'

const router = express.Router();


// You can require and use your routes here ;)

router.get('/', function (req, res) {
    res.send(SCG())
})

router.get('/formula/:index', function (req, res) {
    res.send(Formula(parseInt(req.params.index)).toString())
})

router.get('/places/:keyword', async function (req, res) {
    const places = await Place(req.params.keyword)
    res.send(places.results)
})

router.post('/message', async function (req, res) {
    const status = await LineSendMessage()
    res.sendStatus(status)
})


export default router;