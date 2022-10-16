import axios from 'axios';
import { API } from '../constants';
import { completed, errorMessage, inProgress, newNotification, resetData, storeUserInfo } from './Action';

axios.defaults.withCredentials = true;

const URLS = {
    LOGIN: API + '/user/me',
    USER: API + '/user',
    SIGNOUT: API + '/42/signout',
    UPDATE_PROFILE: API + '/user/update',
};

export const getUserInfo = async (dispatch: any) => {
    dispatch(inProgress());
    try {
        const response = await axios.get(URLS.LOGIN);
        dispatch(storeUserInfo(response.data));
    } catch (error: any) {
        throw error.message;
    } finally {
        dispatch(completed());
    }
};

export const getFriendInfo = async (dispatch: any, id: string | undefined) => {
    dispatch(inProgress());
    try {
        const response = await axios.get(`${URLS.USER}/${id}`);
        dispatch(storeUserInfo(response.data));
    } catch (error: any) {
        dispatch(errorMessage(error.message));
        throw error.message;
    } finally {
        dispatch(completed());
    }
};

export const signOut = async (dispatch: any) => {
    dispatch(inProgress());
    try {
        await axios.post(URLS.SIGNOUT);
        dispatch(resetData());
    } catch (error: any) {
        dispatch(errorMessage(error.message));
        throw error.message;
    } finally {
        dispatch(completed());
    }
};

export const updatePtofile = async (
    dispatch: any,
    login: string,
    data: {
        avatar: File | null | undefined;
        user_name: string;
        facebook: string;
        discord: string;
        instagram: string;
    }
) => {
    dispatch(inProgress());
    try {
        const response = await axios.post(
            `${URLS.UPDATE_PROFILE}/${login}`,
            data.avatar
                ? data
                : {
                      user_name: data.user_name,
                      facebook: data.facebook,
                      discord: data.discord,
                      instagram: data.instagram,
                  },
            {
                headers: {
                    'Content-Type': 'multipart/form-data',
                },
            }
        );
        dispatch(storeUserInfo(response.data));
        dispatch(newNotification({ type: 'Success', message: 'Profile updated successfuly' }));
    } catch (error: any) {
        dispatch(errorMessage(error.message));
        throw error.message;
    } finally {
        dispatch(completed());
    }
};
