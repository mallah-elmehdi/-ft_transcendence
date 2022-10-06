import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { API } from '../constants';

function Guard() {
    const backEnd = API + 'user/me';
    const [info, setInfo] = useState<any>(null);
    const navigate = useNavigate();

    useEffect(() => {
        axios.defaults.withCredentials = true;
        axios
            .get(backEnd)
            .then(function (response) {
                setInfo(response.data);
            })
            .catch(function (error) {
                navigate('/login');
            });
    }, []);

    return info;
}

export default Guard;
