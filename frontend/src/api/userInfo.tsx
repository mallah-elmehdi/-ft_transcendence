import axios from 'axios';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { API, pagesContent } from '../constants';
import { GlobalContext } from '../State/GlobalProvider';

const UserInfo = () => {
    // general
    const backEnd = API + 'user/me';
    const { setUserInfo, setLoader } = React.useContext<any>(GlobalContext);

    const navigate = useNavigate();
    // api call
    React.useEffect(() => {
        // setloader
        setLoader(true);
        // CORS
        axios.defaults.withCredentials = true;
        axios
            .get(backEnd)
            .then((response) => {
                setUserInfo(response?.data);
                window.localStorage.setItem('isSignedIn', 'true');
            })
            .catch((error) => {
                navigate(pagesContent.login.url);
                window.localStorage.setItem('isSignedIn', 'false');
            })
            .finally(() => setLoader(false));
    }, []);
};

export default UserInfo;
