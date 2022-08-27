import React from 'react';
import { Stack, GridItem, Grid, Button, Heading, List, ListItem } from '@chakra-ui/react';
import { useBreakpointValue, useTheme } from '@chakra-ui/react';

// COMPONENTS
import { Card } from '../components/Card';
import { Line } from '../components/Line';
import { LiveMatch } from '../components/LiveMatch';

// HOOKS
import { usePageTitle } from '../hooks/usePageTitle';

// CONSTANTS
import { pagesContent } from '../constants';

export const Home = () => {
    // page title
    usePageTitle(pagesContent.profile.title);

    // screen sizes
    const theme = useTheme();

    // breakpoint
    const profileInfo = useBreakpointValue({
        xl: 4,
        base: 12,
    });
    const statusInfo = useBreakpointValue({
        xl: 8,
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
    const matchs = [
        {
            opponenOneName: 'el mehdi mallah',
            opponenOnePhoto: 'https://cdn.intra.42.fr/users/emallah.jpg',
            opponenOneUsername: 'emallah',
            opponenTwoName: 'ayoub maatouch',
            opponenTwoPhoto: 'https://cdn.intra.42.fr/users/aymaatou.jpg',
            opponenTwoUsername: 'aymaatou',
            link: '/',
        },
        {
            opponenOneName: 'youssef noam',
            opponenOnePhoto: 'https://cdn.intra.42.fr/users/ynoam.jpg',
            opponenOneUsername: 'ynoam',
            opponenTwoName: 'marouan ougnou',
            opponenTwoPhoto: 'https://cdn.intra.42.fr/users/mougnou.jpg',
            opponenTwoUsername: 'mougnou',
            link: '/',
        },
        {
            opponenOneName: 'el mehdi mallah',
            opponenOnePhoto: 'https://cdn.intra.42.fr/users/emallah.jpg',
            opponenOneUsername: 'emallah',
            opponenTwoName: 'ayoub maatouch',
            opponenTwoPhoto: 'https://cdn.intra.42.fr/users/aymaatou.jpg',
            opponenTwoUsername: 'aymaatou',
            link: '/',
        },
        {
            opponenOneName: 'youssef noam',
            opponenOnePhoto: 'https://cdn.intra.42.fr/users/ynoam.jpg',
            opponenOneUsername: 'ynoam',
            opponenTwoName: 'marouan ougnou',
            opponenTwoPhoto: 'https://cdn.intra.42.fr/users/mougnou.jpg',
            opponenTwoUsername: 'mougnou',
            link: '/',
        },
        {
            opponenOneName: 'el mehdi mallah',
            opponenOnePhoto: 'https://cdn.intra.42.fr/users/emallah.jpg',
            opponenOneUsername: 'emallah',
            opponenTwoName: 'ayoub maatouch',
            opponenTwoPhoto: 'https://cdn.intra.42.fr/users/aymaatou.jpg',
            opponenTwoUsername: 'aymaatou',
            link: '/',
        },
        {
            opponenOneName: 'youssef noam',
            opponenOnePhoto: 'https://cdn.intra.42.fr/users/ynoam.jpg',
            opponenOneUsername: 'ynoam',
            opponenTwoName: 'marouan ougnou',
            opponenTwoPhoto: 'https://cdn.intra.42.fr/users/mougnou.jpg',
            opponenTwoUsername: 'mougnou',
            link: '/',
        },
        {
            opponenOneName: 'el mehdi mallah',
            opponenOnePhoto: 'https://cdn.intra.42.fr/users/emallah.jpg',
            opponenOneUsername: 'emallah',
            opponenTwoName: 'ayoub maatouch',
            opponenTwoPhoto: 'https://cdn.intra.42.fr/users/aymaatou.jpg',
            opponenTwoUsername: 'aymaatou',
            link: '/',
        },
        {
            opponenOneName: 'youssef noam',
            opponenOnePhoto: 'https://cdn.intra.42.fr/users/ynoam.jpg',
            opponenOneUsername: 'ynoam',
            opponenTwoName: 'marouan ougnou',
            opponenTwoPhoto: 'https://cdn.intra.42.fr/users/mougnou.jpg',
            opponenTwoUsername: 'mougnou',
            link: '/',
        },
    ];

    // garbage value [FOR TEST]<----------------------------------------

    return (
        <Card w="100%" h="100%">
            <Grid h="100%" templateColumns="repeat(12, 1fr)" gap={gap}>
                <GridItem colSpan={profileInfo} mb={marginBottom}>
                    <Stack spacing={5} alignItems="center">
                        <Stack spacing={2} alignItems="center" w="100%">
                            <Heading>Play</Heading>
                            <Line maxW="13rem" />
                        </Stack>
                        <Button
                            variant="solid"
                            bg="primary"
                            color="black"
                            borderRadius="2xl"
                            fontSize="xl"
                            size="xl"
                            py={2}
                            px={5}
                            fontWeight="light"
                            _focus={{
                                bg: 'primary',
                            }}
                            _hover={{
                                bg: 'primary',
                            }}
                        >
                            Join Queues
                        </Button>
                        <Button
                            variant="solid"
                            bg="primary"
                            color="black"
                            borderRadius="2xl"
                            fontSize="xl"
                            size="xl"
                            py={2}
                            px={5}
                            fontWeight="light"
                            _focus={{
                                bg: 'primary',
                            }}
                            _hover={{
                                bg: 'primary',
                            }}
                        >
                            Play with Friend
                        </Button>
                    </Stack>
                </GridItem>

                <GridItem colSpan={statusInfo}>
                    <Stack spacing={5} alignItems="center">
                        <Stack spacing={2} alignItems="center" w="100%">
                            <Heading>Live Matches</Heading>
                            <Line maxW="18rem" />
                        </Stack>
                        <Stack p={2} maxH="50rem" overflow="auto" sx={{ ...theme.sidebar }}>
                            <List spacing={5}>
                                {matchs.map((item, index) => {
                                    return (
                                        <ListItem key={index}>
                                            <LiveMatch match={item} />
                                        </ListItem>
                                    );
                                })}
                            </List>
                        </Stack>
                    </Stack>
                </GridItem>
            </Grid>
        </Card>
    );
};
