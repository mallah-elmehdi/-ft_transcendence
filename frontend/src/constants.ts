export const SOCKET = 'http://10.11.10.1:3003'; // ip of backend socket
export const API = 'http://10.11.10.1:3001'; // ip of backend
export const FRIENDS_URL = API + "/user/friends"
export const USER_URL = API + "/user/"
export const GROUP = API + "/user/group/"
export const MEMBERS = API + "/user/members/"
export const DELETE_ROOM = API + "/user/group/"
export const BLOCK_DM = API + "/user/block/"
export const FRIEND_REQ = API + "/user/add/"
export const ALL_USERS = API + "/user/list/all"

export const pagesContent = {
    home: {
        url: '/',
        title: 'PonGame | Welcome',
    },
    login: {
        url: '/login',
        title: 'PonGame | Log In',
    },
    profile: {
        url: '/profile',
        title: 'PonGame | Profile',
    },
    chat: {
        url: '/chat',
        title: 'PonGame | Chat',
    },
    play: {
        url: '/play',
        title: 'PonGame | Play',
    },
};

export const tabs = [
    {
        url: '/',
        title: 'Home',
    },
    {
        url: '/chat',
        title: 'Chat',
    },
    {
        url: '/profile/me',
        title: 'Profile',
    },
];

export const REGEX_ALPHANUM = /[^A-Za-z0-9_-]/g;
