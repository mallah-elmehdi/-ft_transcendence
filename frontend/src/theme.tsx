import { extendTheme } from '@chakra-ui/react';

export const theme = extendTheme({
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
});
