import * as React from 'react';
import { Box, VStack, Container } from '@chakra-ui/react';
import { Outlet } from 'react-router-dom';
import { ColorModeSwitcher } from './ColorModeSwitcher';

export const Wrapper = () => {
    return (
        <Box w="100vw" h="100vh" p={3}>
            <Container maxW="container.2xl" h="100%">
                <VStack spacing={5} h="100%">
                    <ColorModeSwitcher />
                    <Outlet />
                </VStack>
            </Container>
        </Box>
    );
};
