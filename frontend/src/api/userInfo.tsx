import axios from 'axios';
import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { API, pagesContent } from '../constants';
import { GlobalContext } from '../State/GlobalProvider';

const UserInfo = () => {
    const params = useParams();
    // general
    const backEnd = API + (!params?.user_id || params?.user_id === 'me' ? 'user/me' : 'user/' + params?.user_id);
    console.log('backEnd', backEnd);

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
