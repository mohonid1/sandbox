import express from "express";
import SCG, { Formula, Place, LineSendMessage, LineSetDetail } from '../controllers/scg'

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

router.get('/getMessageDetail', async function (req, res) {
    const data = { time: process.env.SEND_TIME, keyword: process.env.SEND_KEYWORD }
    res.send(data)
})

router.post('/setMessageDetail', async function (req, res) {
    const { time, keyword } = req.body
    LineSetDetail(time, keyword)
    res.sendStatus(200)
})


export default router;