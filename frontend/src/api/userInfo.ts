import {useState} from 'react'
import axios from "axios";
import { API } from "../constants"

function userInfo() {
    const backEnd = API + 'user/me'
    const [info, setInfo] = useState<any>(null)

    axios.get(backEnd)
        .then(function (response) {
            setInfo(response)
            console.log("res", response);
            
        })
        .catch(function (error) {
            setInfo(null)
            console.log("err", error);
        })
    return (info)
}

export default userInfo;