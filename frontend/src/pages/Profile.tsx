import * as React from 'react';
import { Stack, GridItem, Grid, Avatar, Text, HStack, IconButton, Link as ChakraLink, Badge, Button, Spacer, AvatarBadge, Heading, Box } from '@chakra-ui/react';
import { useMediaQuery, useBreakpointValue, useTheme } from '@chakra-ui/react';

// ICONS
import { FaDiscord, FaFacebook, FaInstagram, FaThumbsUp, FaThumbsDown, FaEquals } from 'react-icons/fa';

// COMPONENTS
import { Card } from '../components/Card';
import { Line } from '../components/Line';
import { StatusTable } from '../components/StatusTable';
import { StatusProfile } from '../components/StatusProfile';
import { ProfileAvatar } from '../components/ProfileAvatar';
import { MatchesHistory } from '../components/MatchesHistory';

// HOOKS
import { usePageTitle } from '../hooks/usePageTitle';

// CONSTANTS
import { pagesContent } from '../constants';

export const Profile = () => {
    // page title
    usePageTitle(pagesContent.profile.title);

    // screen sizes
    const theme = useTheme();
    const [isLargerScreen] = useMediaQuery(`(min-width: ${theme.breakpoints.xl})`);
    const [isSmallScreen] = useMediaQuery(`(max-width: ${theme.breakpoints.md})`);

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
    const name = 'ayoub maatouch';
    const username = 'aymaatou';
    const photo = 'https://cdn.intra.42.fr/users/aymaatou.jpg';
    const isOnline = true;

    const history = [
        {
            name: 'el mehdi mallah',
            username: 'emallah',
            photo: 'https://cdn.intra.42.fr/users/emallah.jpg',
            opponentScore: 4,
            myScore: 5,
        },
        {
            name: 'youssef noam',
            username: 'ynoam',
            photo: 'https://cdn.intra.42.fr/users/ynoam.jpg',
            opponentScore: 5,
            myScore: 1,
        },

        {
            name: 'marouan ougnou',
            username: 'mougnou',
            photo: 'https://cdn.intra.42.fr/users/mougnou.jpg',
            opponentScore: 3,
            myScore: 6,
        },
        {
            name: 'brahim amghough',
            username: 'bamghoug',
            photo: 'https://cdn.intra.42.fr/users/bamghoug.jpg',
            opponentScore: 6,
            myScore: 9,
        },
        // ==========
        {
            name: 'el mehdi mallah',
            username: 'emallah',
            photo: 'https://cdn.intra.42.fr/users/emallah.jpg',
            opponentScore: 4,
            myScore: 5,
        },
        {
            name: 'youssef noam',
            username: 'ynoam',
            photo: 'https://cdn.intra.42.fr/users/ynoam.jpg',
            opponentScore: 5,
            myScore: 1,
        },

        {
            name: 'marouan ougnou',
            username: 'mougnou',
            photo: 'https://cdn.intra.42.fr/users/mougnou.jpg',
            opponentScore: 3,
            myScore: 6,
        },
        {
            name: 'brahim amghough',
            username: 'bamghoug',
            photo: 'https://cdn.intra.42.fr/users/bamghoug.jpg',
            opponentScore: 6,
            myScore: 9,
        },
    ];
    // garbage value [FOR TEST]<----------------------------------------

    return (
        <Grid h="100%" templateColumns="repeat(12, 1fr)" gap={gap}>
            <GridItem colSpan={profileInfo} mb={marginBottom}>
                <Card w="100%" h="100%">
                    <Grid templateColumns="repeat(12, 1fr)" gap={5} h="100%">
                        <GridItem colSpan={profilePart1}>
                            <Stack spacing={5} alignItems="center">
                                <ProfileAvatar name={name} username={username} photo={photo} isOnline={isOnline} />
                                {(isLargerScreen || isSmallScreen) && <Line maxW="10rem" />}

                                <HStack spacing={5} justifyContent="center">
                                    <ChakraLink isExternal href="https://www.youtube.com/watch?v=dQw4w9WgXcQ">
                                        <IconButton size="lg" aria-label="Facebook" variant="ghost" borderRadius="2xl" fontSize="2xl" icon={<FaFacebook />} />
                                    </ChakraLink>
                                    <ChakraLink isExternal href="https://www.youtube.com/watch?v=dQw4w9WgXcQ">
                                        <IconButton size="lg" aria-label="Discord" variant="ghost" borderRadius="2xl" fontSize="2xl" icon={<FaDiscord />} />
                                    </ChakraLink>
                                    <ChakraLink isExternal href="https://www.youtube.com/watch?v=dQw4w9WgXcQ">
                                        <IconButton size="lg" aria-label="Instagram" variant="ghost" borderRadius="2xl" fontSize="2xl" icon={<FaInstagram />} />
                                    </ChakraLink>
                                </HStack>
                                {(isLargerScreen || isSmallScreen) && <Line maxW="10rem" />}
                            </Stack>
                        </GridItem>
                        <GridItem colSpan={profilePart2}>
                            <Stack spacing={5} justifyContent="space-between" h="100%" alignItems={isLargerScreen || isSmallScreen ? 'center' : 'end'}>
                                <StatusProfile wins={wins} losses={losses} draws={draws} />
                                {(isLargerScreen || isSmallScreen) && <Line maxW="10rem" />}
                                <Button
                                    variant="solid"
                                    bg="secondary"
                                    color="gray.900"
                                    borderRadius="3xl"
                                    fontSize="5xl"
                                    fontWeight="light"
                                    size="8xl"
                                    py={4}
                                    px={8}
                                    _focus={{
                                        bg: 'secondary',
                                    }}
                                    _hover={{
                                        bg: 'secondary',
                                    }}
                                >
                                    Sign Out
                                </Button>
                            </Stack>
                        </GridItem>
                    </Grid>
                </Card>
            </GridItem>
            <GridItem colSpan={statusInfo}>
                <Card w="100%" h="100%">
                    <Stack spacing={10}>
                        <Stack spacing={5} alignItems="center">
                            <Heading>Status</Heading>
                            <Line maxW="13rem" />
                            <StatusTable wins={wins} losses={losses} draws={draws} />
                        </Stack>

                        <Stack spacing={5} alignItems="center">
                            <Heading>Matches History</Heading>
                            <Line maxW="13rem" />
                            <Stack
                                maxH="25rem"
                                overflow="auto"
                                w="100%"
                                alignItems="center"
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
                                <MatchesHistory history={history} name={name} photo={photo} />
                            </Stack>
                        </Stack>
                    </Stack>
                </Card>
            </GridItem>
        </Grid>
    );
};
