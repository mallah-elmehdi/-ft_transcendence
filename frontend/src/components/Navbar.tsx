import React, { useRef } from 'react';
import { HStack, Spacer, Tabs, TabList, Modal, ModalOverlay, ModalContent, ModalHeader, Flex, ModalFooter, ModalBody, ModalCloseButton, Button, IconButton } from '@chakra-ui/react';
import { useMediaQuery, useTheme, useDisclosure } from '@chakra-ui/react';
import { Link } from 'react-router-dom';

// COMPONENTS
import { ColorModeSwitcher } from './ColorModeSwitcher';
import { Card } from './Card';
import { Logo } from './Logo';
import { Tab } from './Tab';

// CONSTANTS
import { pagesContent } from '../constants';

// ICONS
import { FaBars, FaTimes } from 'react-icons/fa';

export const Navbar = () => {
    const theme = useTheme();
    const [isLargerScreen] = useMediaQuery(`(min-width: ${theme.breakpoints.lg})`);

    // Desktop
    const Desktop = () => {
        return (
            <HStack>
                <Link to={pagesContent.profile.url}>
                    <Logo />
                </Link>
                <Spacer />
                <Card px={20} py={1}>
                    <Tabs variant="unstyled">
                        <TabList>
                            <Tab to={pagesContent.profile.url}>Profile</Tab>
                            <Tab to={pagesContent.play.url}>Play</Tab>
                            <Tab to={pagesContent.chat.url}>Chat</Tab>
                        </TabList>
                    </Tabs>
                </Card>
                <Spacer />
                <Spacer />
                <Spacer />
                <ColorModeSwitcher />
            </HStack>
        );
    };

    // Mobile
    const Mobile = () => {
        const { isOpen, onOpen, onClose } = useDisclosure();

        return (
            <>
                <HStack>
                    <IconButton onClick={onOpen} aria-label="menu" variant="ghost" borderRadius="2xl" fontSize="2xl" size="lg" icon={<FaBars />} />
                    <Spacer />
                    <ColorModeSwitcher />
                </HStack>

                <Modal isOpen={isOpen} onClose={onClose} size="full" isCentered>
                    <ModalOverlay />
                    <ModalContent>
                        <ModalHeader>
                            <Flex alignItems="center">
                                <Logo />
                                <Spacer />
                                <IconButton onClick={onClose} aria-label="menu" variant="ghost" borderRadius="2xl" fontSize="2xl" size="lg" icon={<FaTimes />} />
                            </Flex>
                        </ModalHeader>
                        <ModalBody justifyContent="center" display="flex">
                            <Tabs isFitted variant="unstyled" orientation="vertical" size="lg" mt={60}>
                                <TabList alignItems="center">
                                    <Tab onClick={onClose} fontSize="5xl" to={pagesContent.profile.url}>
                                        Profile
                                    </Tab>
                                    <Tab onClick={onClose} fontSize="5xl" to={pagesContent.play.url}>
                                        Play
                                    </Tab>
                                    <Tab onClick={onClose} fontSize="5xl" to={pagesContent.chat.url}>
                                        Chat
                                    </Tab>
                                </TabList>
                            </Tabs>
                        </ModalBody>
                    </ModalContent>
                </Modal>
            </>
        );
    };

    return <>{isLargerScreen ? <Desktop /> : <Mobile />}</>;
};
