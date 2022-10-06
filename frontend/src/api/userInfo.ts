import {useState} from 'react'
import axios from "axios";
import { API } from "../constants"

function userInfo() {
    const backEnd = API + 'user/me'
    const [info, setInfo] = useState<any>(null)

    axios.defaults.withCredentials = true;
    axios.get(backEnd , { withCredentials: true }, )
        .then(function (response) {
            setInfo(response)
            console.log("res", response);
            
        })
        .catch(function (error) {
            setInfo(null)
            console.log("err", error);
        })
        console.log("info === >", info);
    return (info)
}



export default userInfo;