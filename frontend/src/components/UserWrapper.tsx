import * as React from 'react';
import { Box, Stack, Container } from '@chakra-ui/react';
import { Outlet } from 'react-router-dom';
import { Navbar } from '../components/Navbar';

export const UserWrapper = () => {
    return (
        <Stack h="100%" spacing={14}>
            <Navbar />
            <Outlet />
        </Stack>
    );
};
