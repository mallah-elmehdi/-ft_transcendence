import axios from 'axios';
import React from 'react';
import { API } from '../constants';

const SignOut = (setLoader: (value: boolean) => void, setUserInfo: (value: any) => void, setNotif: any) => {
    // general
    const backEnd = API + 'user/signout';

    // show loader
    setLoader(true);

    // api call
    axios.defaults.withCredentials = true;
    axios
        .get(backEnd)
        .then((response) => {
            setUserInfo(null);
            window.localStorage.setItem('isSignedIn', 'false');
        })
        .catch((error) =>
            setNotif({
                exist: true,
                type: 'Error',
                message: error.message,
            })
        )
        .finally(() => setLoader(false));
};

export default SignOut;
