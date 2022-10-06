import axios from "axios";
import { API } from "../constants"

function guard() {
    const backEnd = API + 'validate'
    axios.get(backEnd, { headers: { 'Access-Control-Allow-Origin': '*', } })
        .then(function (response) {
            console.log(response)
            window.location.replace('https://google.com');
        })
        .catch(function (error) {
            console.log(error)
        })
}

export default guard;