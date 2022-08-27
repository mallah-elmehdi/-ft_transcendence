import React from 'react';
import { HStack, Spacer, Tabs, TabList, Modal, ModalOverlay, ModalContent, ModalHeader, Flex, ModalBody, IconButton } from '@chakra-ui/react';
import { useMediaQuery, useTheme, useDisclosure } from '@chakra-ui/react';
import { Link, useLocation } from 'react-router-dom';

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
    const location = useLocation();

    // Desktop
    const Desktop = () => {
        return (
            <HStack>
                <Link to={pagesContent.home.url}>
                    <Logo />
                </Link>
                <Spacer />
                <Card px={20} py={1}>
                    <Tabs variant="unstyled">
                        <TabList>
                            <Tab to={pagesContent.home.url} isSelected={pagesContent.home.url === location.pathname}>
                                Home
                            </Tab>
                            <Tab to={pagesContent.profile.url} isSelected={pagesContent.profile.url === location.pathname}>
                                Profile
                            </Tab>
                            <Tab to={pagesContent.play.url} isSelected={pagesContent.play.url === location.pathname}>
                                Play
                            </Tab>
                            <Tab to={pagesContent.chat.url} isSelected={pagesContent.chat.url === location.pathname}>
                                Chat
                            </Tab>
                        </TabList>
                    </Tabs>
                </Card>
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
                                    <Tab onClick={onClose} fontSize="5xl" to={pagesContent.home.url} isSelected={pagesContent.home.url === location.pathname}>
                                        Home
                                    </Tab>
                                    <Tab onClick={onClose} fontSize="5xl" to={pagesContent.profile.url} isSelected={pagesContent.profile.url === location.pathname}>
                                        Profile
                                    </Tab>
                                    <Tab onClick={onClose} fontSize="5xl" to={pagesContent.play.url} isSelected={pagesContent.play.url === location.pathname}>
                                        Play
                                    </Tab>
                                    <Tab onClick={onClose} fontSize="5xl" to={pagesContent.chat.url} isSelected={pagesContent.chat.url === location.pathname}>
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
