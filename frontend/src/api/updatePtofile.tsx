import axios from 'axios';
import * as React from 'react';
import { API } from '../constants';

// types
type Data = {
    avatar: FormData;
    user_login: string;
    facebook: string;
    discord: string;
    instagram: string;
};

const UpdatePtofile = (
    login: string,

    data: Data,
    setLoader: (value: boolean) => void,
    setInfo: (value: any) => void
) => {
    // general
    const backEnd = API + 'user/update/' + login;

    // show loader
    setLoader(true);

    // api call
    axios.defaults.withCredentials = true;
    axios
        .post(backEnd, data)
        .then((response) => {
            setInfo(response.data);
            setLoader(false);
        })
        .catch((error) => {
            // setInfo(null);
            setLoader(false);
        });
};

export default UpdatePtofile;
