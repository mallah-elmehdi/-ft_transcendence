import axios from 'axios';
import React from 'react';
import { API } from '../constants';

const UserInfo = () => {
    // general
    const backEnd = API + 'user/me';
    const [info, setInfo] = React.useState<any>(null);

    // CORS
    axios.defaults.withCredentials = true;

    // api call
    React.useEffect(() => {
        axios
            .get(backEnd)
            .then((response) => setInfo(response.data))
            .catch((error) => setInfo(null));
    }, [backEnd]);

    return [info, setInfo];
};

export default UserInfo;
