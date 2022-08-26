import {Flex, Spacer, Tabs, TabList, Text, useColorMode, Tab, Show, Hide, useDisclosure, Box} from '@chakra-ui/react';
import { Modal, ModalOverlay, ModalContent, ModalHeader, ModalFooter, ModalBody, ModalCloseButton, Button } from '@chakra-ui/react';
import { HamburgerIcon } from '@chakra-ui/icons';
import React from 'react';

import ToggleMode from './toggleMode.tsx';
import Logo from './logo.tsx';

import {Link, useLocation} from 'react-router-dom';

export default function Navbar(props) {
    const { colorMode, toggleColorMode } = useColorMode();
    const { isOpen, onOpen, onClose } = useDisclosure();
    const [size, setSize] = React.useState('md');

    const handleSizeClick = (newSize) => {
        setSize(newSize);
        onOpen();
    };
    const tabs = ['Home', 'Chat', 'Profile'];
    const location = useLocation();
    return (
        <Flex
            mb={5}
            px={10}
            justifyContent={'right'}
            alignItems={'center'}
            // bg={'#777777'}
        >
            {props.isSignIn && (
                <>

            <Show above="md">
                <Link to={'/home'} >
                    <Logo />
                </Link>
            </Show>
            <Show below="md">
                <Button
                    // _active={{bg:'red'}} // TIPS: on click keep the color green
                    // _focus={{}}
                    _hover={{bg:'green'}}
                    onClick={() => handleSizeClick(size)} key={size}>
                    <HamburgerIcon />
                </Button>
            </Show>
            <Modal onClose={onClose} size={'full'} isOpen={isOpen}>
                <ModalContent
                    _light={{ bg: 'white' }} _dark={{ bg: '#000000' }}
                >
                    <ModalHeader>
                        <Link to={'/home'} >
                            <Box
                                onClick={onClose}
                            >
                                <Logo />
                            </Box>
                        </Link>
                    </ModalHeader>
                    <ModalCloseButton />
                    <ModalBody>
                        <Flex
                            justifyContent={'center'}
                            alignItems={'center'}
                            w={'100%'}
                            h={'100%'}
                        >
                            <Flex
                                justifyContent={'center'}
                                alignItems={'center'}
                                display={'row'}
                            >
                                {
                                    tabs.map((tab, i) => (
                                        <Link to={'/' + tab.toLowerCase()} key={i.toString()} >
                                            <Text
                                                onClick={onClose}
                                                fontSize={'30px'}
                                                p={'10px'}
                                                color={location.pathname === '/' + tab.toLowerCase() ? 'red' : 'none' }
                                            >
                                                {tab}
                                            </Text>
                                        </Link>
                                    ))
                                }
                            </Flex>
                        </Flex>
                    </ModalBody>
                </ModalContent>
            </Modal>
            <Spacer />
            <Show above="md">
                {props.isSignIn && (
                    <Show above="sm">
                        <Flex
                            _dark={{ boxShadow: 'dark-lg' }} _light={{ boxShadow: 'md' }}
                            rounded="20px" justifyContent={'center'} alignItems={'center'} px={'20px'}
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
                )}
            </Show>
            <Spacer />
                </>
            )}

            <ToggleMode />
        </Flex>
    );
}
