import * as React from 'react';
import { Box, Spinner } from '@chakra-ui/react';

export const Loading = () => {
    return (
        <Box
            sx={{
                backdropFilter: 'blur(0.125rem)',
                w: '100vw',
                h: '100vh',
                zIndex: 10000,
                top: 0,
                right: 0,
                position: 'fixed',
            }}
        >
            <Spinner
                thickness="4px"
                speed="0.65s"
                emptyColor="gray.200"
                color="blue.500"
                size="xl"
                position="fixed"
                top="50%"
                right="50%"
                transform="translate(-50%, -50%)"
            />
            {/* <img
                alt="ok"
                style={{ maxWidth: '15rem', width: '100%', position: 'fixed', top: '50%', right: '50%, trams }}
                src="https://img.pikbest.com/png-images/20190918/cartoon-snail-loading-loading-gif-animation_2734139.png"
            /> */}
        </Box>
    );
};
