export const SOCKET = 'http://192.168.100.5:3003/'; // ip of backend
export const API = 'http://192.168.100.5:3005/'; // ip of backend

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
