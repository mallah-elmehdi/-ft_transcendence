import { extendTheme } from '@chakra-ui/react';

export const theme = extendTheme({
    colors: {
        main: {
            primary: '#EF9795',
            secondary: '#A2CE73',
        },
    },
    shadows: {
        default: '0px 0px 20px 10px rgba(0,0,0,.25)',
    },
});
