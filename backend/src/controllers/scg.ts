import fetch from 'node-fetch'

const {
    GOOGLE_API_KEY
} = process.env;

const SCG = () => {
    return 'first page SCG\n' +
    'Indexes :\n' +
    '- /formula/:number'
}

export const Formula = (n: number) => {
    if (n < 0) return 0
    if (n == 0) return 3
    return Formula(n - 1) + (2 * n)
}

export const Place = async (keyword: string) => {
    keyword = encodeURI(keyword)
    const response = await fetch(`https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=13.806441,100.528105&radius=1500&type=restaurant&keyword=${keyword}&key=${GOOGLE_API_KEY}`)
    const data = await response.json()
    return JSON.stringify(data)
}

export default SCG