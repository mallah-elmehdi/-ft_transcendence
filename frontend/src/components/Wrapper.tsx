import * as React from 'react';
import { Box, VStack, Container } from '@chakra-ui/react';
import { Outlet } from 'react-router-dom';

export const Wrapper = () => {
    return (
        <Box w="100vw" h="100vh" p={5} overflow="auto">
            <Container maxW="container.2xl" h="100%">
                <Outlet />
            </Container>
        </Box>
    );
};
