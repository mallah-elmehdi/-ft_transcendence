import { Flex, Spacer, Tabs, TabList, Text, useColorMode, Tab, Show, Hide, useDisclosure } from '@chakra-ui/react';
import { Modal, ModalOverlay, ModalContent, ModalHeader, ModalFooter, ModalBody, ModalCloseButton, Button } from '@chakra-ui/react';
import { HamburgerIcon } from '@chakra-ui/icons';
import React from 'react';

import ToggleMode from './toggleMode.tsx';
import Logo from './logo.tsx';

import { Link } from 'react-router-dom';

export default function Navbar(props) {
    const { colorMode, toggleColorMode } = useColorMode();
    const { isOpen, onOpen, onClose } = useDisclosure();
    const [size, setSize] = React.useState('md');

    const handleSizeClick = (newSize) => {
        setSize(newSize);
        onOpen();
    };
    const tabs = ['Home', 'Play', 'Chat', 'Profile'];
    return (
        <Flex
            mb={5}
            px={10}
            justifyContent={'right'}
            // bg={'#777777'}
        >
            <Show above="md">
                <Logo />
            </Show>
            <Show below="md">
                <Button onClick={() => handleSizeClick(size)} key={size}>
                    <HamburgerIcon />
                </Button>
                <Modal onClose={onClose} size={'full'} isOpen={isOpen}>
                    <ModalContent>
                        <ModalHeader>
                            <Logo />
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
                            // pt={'100px'}
                            >

                                {tabs.map((tab) => (
                                    <Link to={`/${tab.toLowerCase()}`}>
                                        <Text onClick={onClose} fontSize={'30px'}>
                                            {tab}
                                        </Text>
                                    </Link>
                                ))}
                            </Flex>
                            </Flex>
                        </ModalBody>
                        {/* <ModalFooter>
                            <Button onClick={onClose}>Close</Button>
                        </ModalFooter> */}
                    </ModalContent>
                </Modal>
            </Show>
            <Spacer />
            <Show above="md">
                {props.isSignIn && (
                    <Show above="sm">
                        <Flex boxShadow={colorMode === 'dark' ? 'dark-lg' : 'md'} rounded="20px" justifyContent={'center'} alignItems={'center'}>
                            <Tabs variant={'unstyled'} size={'sm'}>
                                <TabList>
                                    {tabs.map((tab) => (
                                        <Tab
                                            _selected={{
                                                color: 'red',
                                            }}
                                        >
                                            <Link to={`/${tab.toLowerCase()}`}>
                                                <Text fontSize={'30px'}>{tab}</Text>
                                            </Link>
                                        </Tab>
                                    ))}
                                </TabList>
                            </Tabs>
                        </Flex>
                    </Show>
                )}
            </Show>
            <Spacer />

            <ToggleMode colorMode={colorMode} toggleColorMode={toggleColorMode} />
        </Flex>
    );
}
