import {
    // Text,
    // Box,
    Flex,
    // Button,
    // Heading,
    // useColorMode,
    // Image,
} from '@chakra-ui/react';
// im
import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import userInfo from '../api/userInfo';

export default function HomePage() {
    const info = userInfo();
    const navigate = useNavigate();

    useEffect(() => {
        if (info === null) navigate('/login');
    });

    return (
        <>
            <Flex
                w={'100%'}
                h={'100%'}
                m={5}
                // p={5}
                alignItems={'center'}
                justifyContent={'center'}
                bg={'green'}
            >
                {info}
            </Flex>
        </>
    );
}
