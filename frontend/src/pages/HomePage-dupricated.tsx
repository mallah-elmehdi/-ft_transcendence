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
import guard from '../api/guard';

export default function HomePage() {


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
                {/* {isSignedIn ? 'true' : 'false'} */}
            </Flex>
        </>
    );
}
