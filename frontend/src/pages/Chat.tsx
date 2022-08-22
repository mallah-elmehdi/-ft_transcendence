import React, { useState, useRef } from 'react';
import { Stack, GridItem, Grid, Avatar, Text, HStack, IconButton, Link as ChakraLink, Badge, Button, Spacer, AvatarBadge, Heading, Box, Input, InputGroup, InputRightElement } from '@chakra-ui/react';
import { useMediaQuery, useBreakpointValue, useTheme } from '@chakra-ui/react';

// ICONS
import { MdSend } from 'react-icons/md';

// COMPONENTS
import { Card } from '../components/Card';
import { Line } from '../components/Line';
import { StatusTable } from '../components/StatusTable';
import { StatusProfile } from '../components/StatusProfile';
import { ProfileAvatar } from '../components/ProfileAvatar';
import { MatchesHistory } from '../components/MatchesHistory';
import { Message } from '../components/Message';

// HOOKS
import { usePageTitle } from '../hooks/usePageTitle';

// CONSTANTS
import { pagesContent } from '../constants';

export const Chat = () => {
    // page title
    usePageTitle(pagesContent.profile.title);

    // screen sizes
    const theme = useTheme();
    const [isLargerScreen] = useMediaQuery(`(min-width: ${theme.breakpoints.xl})`);
    const [isSmallScreen] = useMediaQuery(`(max-width: ${theme.breakpoints.md})`);

    // states
    const [chat, setChat] = useState<{ message: string | undefined; isSent: boolean }[]>([]);
    const messageRef = useRef() as React.MutableRefObject<HTMLInputElement>;

    // functions
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
        base: 12,
    });
    const statusInfo = useBreakpointValue({
        xl: 8,
        base: 12,
    });

    const profilePart1 = useBreakpointValue({
        xl: 12,
        md: 4,
        base: 12,
    });
    const profilePart2 = useBreakpointValue({
        xl: 12,
        md: 8,
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
    const wins = 98;
    const losses = 73;
    const draws = 7;
    const name = 'marouan ougnou';
    const username = 'mougnou';
    const photo = 'https://cdn.intra.42.fr/users/mougnou.jpg';
    const isOnline = true;

    const history = [];
    // garbage value [FOR TEST]<----------------------------------------

    return (
        <Grid h="100%" templateColumns="repeat(12, 1fr)" gap={gap}>
            <GridItem colSpan={profileInfo} mb={marginBottom}>
                <Card w="100%" h="100%"></Card>
            </GridItem>
            <GridItem colSpan={statusInfo}>
                <Card w="100%" h="100%">
                    <Stack spacing={10}>
                        <Stack spacing={5} alignItems="center">
                            <ProfileAvatar name={name} username={username} photo={photo} isOnline={isOnline} />
                        </Stack>

                        <Stack spacing={3} bg="black" h="30rem" borderRadius="2xl" p={3}>
                            <Stack
                                overflow="auto"
                                p={1}
                                bg="black"
                                mb="auto"
                                h="100%"
                                justifyContent="end"
                                sx={{
                                    '::-webkit-scrollbar': {
                                        width: '0.6rem',
                                    },
                                    '::-webkit-scrollbar-track': {
                                        background: 'gray.100',
                                        borderRadius: 'full',
                                    },
                                    '::-webkit-scrollbar-thumb': {
                                        backgroundColor: 'gray.300',
                                        border: '0.125rem solid rgba(0, 0, 0, 0)',
                                        backgroundClip: 'padding-box',
                                        borderRadius: 'full',
                                    },
                                }}
                            >
                                {chat.map((item: { message: string | undefined; isSent: boolean }, index) => {
                                    return (
                                        <>
                                            <Message isSent={!item.isSent}>{item.message ? item.message : ''}</Message>
                                            <Message isSent={item.isSent}>{item.message ? item.message : ''}</Message>
                                        </>
                                    );
                                })}
                            </Stack>

                            <InputGroup size="md" bg="white" borderRadius="full" shadow="none">
                                <Input
                                    type="text"
                                    variant="unstyled"
                                    py={2}
                                    px={3}
                                    placeholder="Message"
                                    _placeholder={{
                                        color: 'gray.400',
                                    }}
                                    ref={messageRef}
                                    color="black"
                                />
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
                        </Stack>
                    </Stack>
                </Card>
            </GridItem>
        </Grid>
    );
};
