import React, { useState, useRef } from 'react';
import { Stack, GridItem, Grid, IconButton, Input, InputGroup, InputRightElement, Tabs, TabList, TabPanels, Tab, TabPanel } from '@chakra-ui/react';
import { useBreakpointValue, useTheme } from '@chakra-ui/react';

// ICONS
import { MdSend } from 'react-icons/md';

// COMPONENTS
import { Card } from '../components/Card';
import { Line } from '../components/Line';
import { ProfileAvatar } from '../components/ProfileAvatar';
import { ChatAvatar } from '../components/ChatAvatar';
import { Message } from '../components/Message';
import { GroupAvatar } from '../components/GroupAvatar';

// HOOKS
import { usePageTitle } from '../hooks/usePageTitle';

// CONSTANTS
import { pagesContent } from '../constants';

// IMAGES
import ChatBG from '../assets/images/chat.jpg';

export const Chat = () => {
    // page title
    usePageTitle(pagesContent.profile.title);

    // screen sizes
    const theme = useTheme();

    // states
    const [chat, setChat] = useState<{ message: string | undefined; isSent: boolean }[]>([]);
    const messageRef = useRef() as React.MutableRefObject<HTMLInputElement>;

    // functions
    const submitMessage = (event?: React.FormEvent<HTMLFormElement>) => {
        if (event) event.preventDefault();
        sendMessage();
    };
    const sendMessage = () => {
        if (messageRef.current.value.length) {
            const message = {
                message: messageRef.current?.value,
                isSent: true,
            };
            messageRef.current.value = '';
            setChat((current) => [...current, message]);
            messageRef.current.focus();
        }
    };

    // breakpoint
    const profileInfo = useBreakpointValue({
        xl: 4,
        lg: 6,
        base: 12,
    });
    const statusInfo = useBreakpointValue({
        xl: 8,
        lg: 6,
        base: 12,
    });
    const gap = useBreakpointValue({
        md: 10,
        base: 0,
    });

    const marginBottom = useBreakpointValue({
        md: 0,
        base: 10,
    });

    // garbage value [FOR TEST]<----------------------------------------
    const name = 'marouan ougnou';
    const username = 'mougnou';
    const photo = 'https://cdn.intra.42.fr/users/mougnou.jpg';
    const isOnline = true;
    const freinds = [
        {
            name: 'el mehdi mallah',
            username: 'emallah',
            photo: 'https://cdn.intra.42.fr/users/emallah.jpg',
            isOnline: true,
        },
        {
            name: 'youssef noam',
            username: 'ynoam',
            photo: 'https://cdn.intra.42.fr/users/ynoam.jpg',
            isOnline: true,
        },
        {
            name: 'ayoub maatouch',
            username: 'aymaatou',
            photo: 'https://cdn.intra.42.fr/users/aymaatou.jpg',
            isOnline: true,
        },
        {
            name: 'marouan ougnou',
            username: 'mougnou',
            photo: 'https://cdn.intra.42.fr/users/mougnou.jpg',
            isOnline: true,
        },
        {
            name: 'brahim amghough',
            username: 'bamghoug',
            photo: 'https://cdn.intra.42.fr/users/bamghoug.jpg',
            isOnline: true,
        },
        {
            name: 'el mehdi mallah',
            username: 'emallah',
            photo: 'https://cdn.intra.42.fr/users/emallah.jpg',
            isOnline: true,
        },
        {
            name: 'youssef noam',
            username: 'ynoam',
            photo: 'https://cdn.intra.42.fr/users/ynoam.jpg',
            isOnline: true,
        },
        {
            name: 'ayoub maatouch',
            username: 'aymaatou',
            photo: 'https://cdn.intra.42.fr/users/aymaatou.jpg',
            isOnline: true,
        },
        {
            name: 'marouan ougnou',
            username: 'mougnou',
            photo: 'https://cdn.intra.42.fr/users/mougnou.jpg',
            isOnline: true,
        },
        {
            name: 'brahim amghough',
            username: 'bamghoug',
            photo: 'https://cdn.intra.42.fr/users/bamghoug.jpg',
            isOnline: true,
        },
        {
            name: 'el mehdi mallah',
            username: 'emallah',
            photo: 'https://cdn.intra.42.fr/users/emallah.jpg',
            isOnline: true,
        },
        {
            name: 'youssef noam',
            username: 'ynoam',
            photo: 'https://cdn.intra.42.fr/users/ynoam.jpg',
            isOnline: true,
        },
        {
            name: 'ayoub maatouch',
            username: 'aymaatou',
            photo: 'https://cdn.intra.42.fr/users/aymaatou.jpg',
            isOnline: true,
        },
        {
            name: 'marouan ougnou',
            username: 'mougnou',
            photo: 'https://cdn.intra.42.fr/users/mougnou.jpg',
            isOnline: true,
        },
        {
            name: 'brahim amghough',
            username: 'bamghoug',
            photo: 'https://cdn.intra.42.fr/users/bamghoug.jpg',
            isOnline: true,
        },
    ];
    const groups = [
        {
            name: 'GMD',
            username: 'GMD',
            photo: 'https://cdn.pixabay.com/photo/2017/10/20/22/19/bird-of-paradise-2873087__340.png',
        },
        {
            name: 'GMD',
            username: 'GMD',
            photo: 'https://cdn.pixabay.com/photo/2017/10/20/22/19/bird-of-paradise-2873087__340.png',
        },
        {
            name: 'GMD',
            username: 'GMD',
            photo: 'https://cdn.pixabay.com/photo/2017/10/20/22/19/bird-of-paradise-2873087__340.png',
        },
        {
            name: 'GMD',
            username: 'GMD',
            photo: 'https://cdn.pixabay.com/photo/2017/10/20/22/19/bird-of-paradise-2873087__340.png',
        },
        {
            name: 'GMD',
            username: 'GMD',
            photo: 'https://cdn.pixabay.com/photo/2017/10/20/22/19/bird-of-paradise-2873087__340.png',
        },
        {
            name: 'GMD',
            username: 'GMD',
            photo: 'https://cdn.pixabay.com/photo/2017/10/20/22/19/bird-of-paradise-2873087__340.png',
        },
        {
            name: 'GMD',
            username: 'GMD',
            photo: 'https://cdn.pixabay.com/photo/2017/10/20/22/19/bird-of-paradise-2873087__340.png',
        },
        {
            name: 'GMD',
            username: 'GMD',
            photo: 'https://cdn.pixabay.com/photo/2017/10/20/22/19/bird-of-paradise-2873087__340.png',
        },
        {
            name: 'GMD',
            username: 'GMD',
            photo: 'https://cdn.pixabay.com/photo/2017/10/20/22/19/bird-of-paradise-2873087__340.png',
        },
        {
            name: 'GMD',
            username: 'GMD',
            photo: 'https://cdn.pixabay.com/photo/2017/10/20/22/19/bird-of-paradise-2873087__340.png',
        },
    ];
    // garbage value [FOR TEST]<----------------------------------------

    return (
        <Grid h="100%" templateColumns="repeat(12, 1fr)" gap={gap}>
            <GridItem colSpan={profileInfo} mb={marginBottom}>
                <Card w="100%" p={5} h="100%">
                    <Tabs variant="unstyled" align="center">
                        <TabList mx="auto">
                            <Tab fontSize="3xl" _selected={{ color: 'secondary' }}>
                                Friends
                            </Tab>
                            <Tab fontSize="3xl" _selected={{ color: 'secondary' }}>
                                Groups
                            </Tab>
                        </TabList>
                        <Line mx="auto" maxW="15rem" my="1rem" />
                        <TabPanels>
                            <TabPanel>
                                <Stack spacing={5} p={5} h="100%" maxH="50rem" overflow="auto" sx={{ ...theme.sidebar }}>
                                    {freinds.map((item, index) => {
                                        return <ChatAvatar name={item.name} username={item.username} photo={item.photo} isOnline={item.isOnline} />;
                                    })}
                                </Stack>
                            </TabPanel>
                            <TabPanel>
                                <Stack spacing={5} p={5} h="100%" maxH="50rem" overflow="auto" sx={{ ...theme.sidebar }}>
                                    {groups.map((item, index) => {
                                        return <GroupAvatar name={item.name} username={item.name} photo={item.photo} />;
                                    })}
                                </Stack>
                            </TabPanel>
                        </TabPanels>
                    </Tabs>
                </Card>
            </GridItem>
            <GridItem colSpan={statusInfo}>
                <Card w="100%" h="100%">
                    <Stack spacing={10} h="100%" justifyContent="space-between">
                        <Stack spacing={5} alignItems="center">
                            <ProfileAvatar name={name} username={username} photo={photo} isOnline={isOnline} />
                        </Stack>

                        <Stack spacing={3} borderRadius="2xl" h="40rem" p={3} sx={{ backgroundImage: `url(${ChatBG})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
                            <Stack overflow="auto" p={3} h="100%" justifyContent="flex-end" sx={{ ...theme.sidebar }}>
                                {chat.map((item: { message: string | undefined; isSent: boolean }, index) => {
                                    return <Message isSent={item.isSent}>{item.message ? item.message : ''}</Message>;
                                })}
                            </Stack>

                            <form onSubmit={submitMessage}>
                                <InputGroup size="md" bg="white" borderRadius="full" shadow="none">
                                    <Input type="text" variant="unstyled" py={2} px={3} placeholder="Message" _placeholder={{ color: 'gray.400' }} ref={messageRef} color="black" />
                                    <InputRightElement>
                                        <IconButton
                                            aria-label="send icon"
                                            size="sm"
                                            color="black"
                                            fontSize="xl"
                                            borderRadius="full"
                                            bg="primary"
                                            _hover={{ bg: 'primary' }}
                                            _focus={{ bg: 'primary' }}
                                            onClick={sendMessage}
                                        >
                                            <MdSend />
                                        </IconButton>
                                    </InputRightElement>
                                </InputGroup>
                            </form>
                        </Stack>
                    </Stack>
                </Card>
            </GridItem>
        </Grid>
    );
};
