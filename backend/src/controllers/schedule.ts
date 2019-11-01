import schedule from 'node-schedule'
import moment from 'moment'
import { LineSendMessage } from './scg'
 
const RunJob = () => {
    var j = schedule.scheduleJob('*/5 * * * * *', function(){
        const hr = process.env.SEND_TIME.substring(0,2)
        const mn = process.env.SEND_TIME.substring(2,4)
        const now = moment().unix()
        const sendTime = moment().hour(parseInt(hr)).minute(parseInt(mn)).second(0).unix()
        if (now >= sendTime && now < sendTime + 5) {
            LineSendMessage()
        }
        console.log(now, sendTime);
    });
}

export default RunJob
