import axios from "axios";
function applyToken(token) {
    axios.defaults.headers = {
        Authorization: `${token}`
    }
}

export default {
    applyToken
}