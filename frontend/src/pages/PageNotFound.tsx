import React from 'react';
import { Flex, Spacer, Text } from '@chakra-ui/react';
import ToggleMode from '../component/toggleMode';
import Logo from '../component/logo';
import { Link } from 'react-router-dom';

export default function PageNotFound() {
    return (
        <>
            <Flex mb={5} px={10} justifyContent={'right'} alignItems={'center'} overflow={'hideen'}>
                <Link to={'/home'}>
                    <Logo />
                </Link>
                <Spacer />
                <ToggleMode />
            </Flex>
            <Flex h={'98%'} alignItems={'center'} justifyContent={'center'} w={'100%'}>
                <Text fontSize={40}>Opps, Page Not Found</Text>
            </Flex>
        </>
    );
}
