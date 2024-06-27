import axios from 'axios'

const apiLink = ''
const POST = async (link, data) => {
    try {
        const response = await axios.post(apiLink + link, data, {
            headers: {
                'auth-token': b,
                'ngrok-skip-browser-warning': 'any',
                'Access-Control-Allow-Origin': '*'
            }
        });
        return response.data
    } catch (error) {
        return error
    }
}