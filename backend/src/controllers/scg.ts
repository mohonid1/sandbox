import fetch from 'node-fetch'

const getRandomInt = (max: number) =>  {
    return Math.floor(Math.random() * Math.floor(max))
}

const SCG = () => {
    return 'first page SCG\n' +
    'Indexes :\n' +
    '- /formula/:number' + 
    '- /places/:keyword' + 
    '- /message' +
    '- /getMessageDetail' +
    '- /setMessageDetail'
}

export const Formula = (n: number) => {
    if (n < 0) return 0
    if (n == 0) return 3
    return Formula(n - 1) + (2 * n)
}

export const Place: any = async (keyword: string) => {
    const {
        GOOGLE_API_KEY
    } = process.env;

    keyword = encodeURI(keyword)
    const response = await fetch(`https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=13.806441,100.528105&radius=1500&type=restaurant&keyword=${keyword}&key=${GOOGLE_API_KEY}`)
    const data = await response.json()
    return data
}

export const LineSendMessage = async () => {

    const {
        LINE_CHANNEL_TOKEN
    } = process.env;

    let status = 200
    const data = await Place(process.env.SEND_KEYWORD)
    if (data.results && data.results.length > 0) {
        const opening = data.results.filter((r: any) => r.opening_hours && r.opening_hours.open_now)
        const count = opening.length
        const index = getRandomInt(count)
        const {name, vicinity, geometry} = opening[index]
        const body = {
            "messages": [
                  {
                      "type": "text",
                      "text": `Lets try ${name}\n ${vicinity}\n https://www.google.com/maps/place/${geometry.location.lat},${geometry.location.lng}`
                  }
            ]
        }
        const headers = { 'Content-Type': 'application/json',  'Authorization': `Bearer ${LINE_CHANNEL_TOKEN}`}
        const response = await fetch(`https://api.line.me/v2/bot/message/broadcast`, { method: 'POST', body: JSON.stringify(body), headers })
        status = response.status
    } else {
        console.log(data)
    }
    
    return status
}

export const LineSetDetail = async (time: string, keyword: string) => {
    process.env.SEND_TIME = time
    process.env.SEND_KEYWORD = keyword
}

export default SCG