import { extendTheme } from '@chakra-ui/react';

export const theme = extendTheme({
    styles: {
        global: {
            body: {
                '::-webkit-scrollbar': {
                    width: '0.9rem',
                },
                '::-webkit-scrollbar-track': {
                    background: 'gray.100',
                    borderRadius: 'full',
                },
                '::-webkit-scrollbar-thumb': {
                    backgroundColor: 'gray.300',
                    border: '0.125rem solid rgba(0, 0, 0, 0)',
                    backgroundClip: 'padding-box',
                    borderRadius: 'full',
                },
                overflowY: 'auto',
                overflowX: 'hidden',
            },
        },
    },
    colors: {
        primary: '#A2CE73',
        secondary: '#EF9795',
    },
    shadows: {
        default: '0px 0px 20px 10px rgba(0,0,0,.25)',
    },
    fonts: {
        heading: `'jua', sans-serif`,
        body: `'jua', sans-serif`,
    },
    sidebar: {
        '::-webkit-scrollbar': {
            width: '0.6rem',
        },
        '::-webkit-scrollbar-track': {
            background: 'gray.100',
            borderRadius: 'full',
        },
        '::-webkit-scrollbar-thumb': {
            backgroundColor: 'gray.300',
            border: '0.125rem solid rgba(0, 0, 0, 0)',
            backgroundClip: 'padding-box',
            borderRadius: 'full',
        },
    },
});
