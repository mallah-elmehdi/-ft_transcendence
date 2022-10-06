import {
    Box,
    Button,
    Flex,
    Modal,
    ModalBody,
    ModalCloseButton,
    ModalContent,
    ModalHeader,
    Show,
    Spacer,
    Text,
    // useColorMode,
    useDisclosure,
} from '@chakra-ui/react';
import { HamburgerIcon } from '@chakra-ui/icons';
import React, { useEffect, useState } from 'react';

import ToggleMode from './toggleMode';
import Logo from './logo';

import { Link, Outlet, useLocation, useNavigate } from 'react-router-dom';
import Guard from '../api/guard';

export default function Navbar() {
    // const { colorMode, toggleColorMode } = useColorMode();
    const { isOpen, onOpen, onClose } = useDisclosure();
    const [size, setSize] = useState<String>('md');

    const handleSizeClick = (newSize: String) => {
        setSize(newSize);
        onOpen();
    };
    const tabs = ['Home', 'Chat', 'Profile'];
    const location = useLocation();


    return (
        <>
            <Flex mb={5} px={10} justifyContent={'right'} alignItems={'center'} overflow={'hideen'}>
                <Show above="md">
                    <Link to={'/home'}>
                        <Logo />
                    </Link>
                </Show>
                <Show below="md">
                    <Button
                        // _active={{bg:'red'}} // TIPS: on click keep the color green
                        // _focus={{}}
                        _hover={{ bg: 'green' }}
                        // FIXME: i dont know the solution for this error below, i will fix if is harmful for the project if not don't care
                        // onClick={() => handleSizeClick(size)} key={size}>
                        onClick={() => handleSizeClick(size)}
                    >
                        <HamburgerIcon />
                    </Button>
                </Show>
                <Modal onClose={onClose} size={'full'} isOpen={isOpen}>
                    <ModalContent _light={{ bg: 'white' }} _dark={{ bg: '#000' }}>
                        <ModalHeader>
                            <Link to={'/home'}>
                                <Box onClick={onClose}>
                                    <Logo />
                                </Box>
                            </Link>
                        </ModalHeader>
                        <ModalCloseButton />
                        <ModalBody>
                            <Flex justifyContent={'center'} alignItems={'center'} w={'100%'} h={'100%'}>
                                <Flex justifyContent={'center'} alignItems={'center'} display={'row'}>
                                    {tabs.map((tab, i) => (
                                        <Link to={'/' + tab.toLowerCase()} key={i.toString()}>
                                            <Text
                                                onClick={onClose}
                                                fontSize={'30px'}
                                                p={'10px'}
                                                color={location.pathname === '/' + tab.toLowerCase() ? 'red' : 'none'}
                                            >
                                                {tab}
                                            </Text>
                                        </Link>
                                    ))}
                                </Flex>
                            </Flex>
                        </ModalBody>
                    </ModalContent>
                </Modal>
                <Spacer />
                <Show above="md">
                    <Show above="sm">
                        <Flex
                            _dark={{ boxShadow: 'dark-lg' }}
                            _light={{ boxShadow: 'md' }}
                            rounded="20px"
                            justifyContent={'center'}
                            alignItems={'center'}
                            px={'20px'}
                        >
                            {tabs.map((tab, i) => (
                                <Link to={'/' + tab.toLowerCase()} key={i.toString()}>
                                    <Text
                                        px={['10px', '20px', '20px', '30px']}
                                        fontSize={'30px'}
                                        color={location.pathname === '/' + tab.toLowerCase() ? 'red' : 'none'}
                                    >
                                        {tab}
                                    </Text>
                                </Link>
                            ))}
                        </Flex>
                    </Show>
                </Show>
                <Spacer />
                <ToggleMode />
            </Flex>
            <Outlet  />
        </>
    );
}
