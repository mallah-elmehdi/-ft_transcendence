import * as React from 'react';
import {
    Button,
    Grid,
    GridItem,
    Heading,
    HStack,
    IconButton,
    Link as ChakraLink,
    Stack,
    useBreakpointValue,
    useMediaQuery,
    useTheme,
} from '@chakra-ui/react';

// ICONS
import { FaDiscord, FaFacebook, FaInstagram, FaShieldAlt } from 'react-icons/fa';

// COMPONENTS
import { Card } from '../component/Card';
import EditProfile from '../component/EditProfile';
import { Line } from '../component/Line';
import { MatchesHistory } from '../component/MatchesHistory';
import { ProfileAvatar } from '../component/ProfileAvatar';
import { StatusProfile } from '../component/StatusProfile';
import { StatusTable } from '../component/StatusTable';

// HOOKS
import { usePageTitle } from '../hooks/usePageTitle';

// CONSTANTS
import { pagesContent } from '../constants';

// Context
import { GlobalContext } from '../App';

const ProfilePage = () => {
    // page title
    usePageTitle(pagesContent.profile.title);

    // vars
    const theme = useTheme();

    // breakpoint
    const profileInfo = useBreakpointValue({
        xl: 3,
        lg: 4,
        base: 12,
    });
    const statusInfo = useBreakpointValue({
        xl: 9,
        lg: 8,
        base: 12,
    });
    const [isSmallScreen] = useMediaQuery(`(min-width: ${theme.breakpoints.xl})`);

    // get the data
    const info = React.useContext(GlobalContext)?.userInfo[0];

    return (
        <Grid h="100%" templateColumns="repeat(12, 1fr)" gap={6}>
            <GridItem colSpan={profileInfo}>
                <Card w="100%" position="relative">
                    <>
                        <EditProfile
                            avatar={info?.user_avatar}
                            login={info?.user_name}
                            facebook={info?.facebook}
                            discord={info?.discord}
                            instagram={info?.instagram}
                        />
                        <Stack spacing={5} alignItems="center">
                            <ProfileAvatar
                                name={info?.user_name}
                                login={info?.user_login}
                                avatar={info?.user_avatar}
                                isOnline={info?.online}
                            />

                            <Line maxW="10rem" />

                            <HStack spacing={5} justifyContent="center">
                                <ChakraLink isExternal href={'https://www.facebook.com/' + info?.facebook}>
                                    <IconButton
                                        size="lg"
                                        aria-label="Facebook"
                                        variant="ghost"
                                        borderRadius="2xl"
                                        fontSize="2xl"
                                        icon={<FaFacebook />}
                                    />
                                </ChakraLink>
                                <ChakraLink isExternal href={'https://www.discord.com/' + info?.discord}>
                                    <IconButton
                                        size="lg"
                                        aria-label="Discord"
                                        variant="ghost"
                                        borderRadius="2xl"
                                        fontSize="2xl"
                                        icon={<FaDiscord />}
                                    />
                                </ChakraLink>
                                <ChakraLink isExternal href={'https://www.instagram.com/' + info?.instagram}>
                                    <IconButton
                                        size="lg"
                                        aria-label="Instagram"
                                        variant="ghost"
                                        borderRadius="2xl"
                                        fontSize="2xl"
                                        icon={<FaInstagram />}
                                    />
                                </ChakraLink>
                            </HStack>
                            <Button
                                _focus={{
                                    bg: 'gray.400',
                                }}
                                _hover={{
                                    bg: 'gray.400',
                                }}
                                bg="gray.400"
                                color="blackAlpha.900"
                                leftIcon={<FaShieldAlt fontSize="xs" />}
                                borderRadius="2xl"
                            >
                                2-Factor Auth
                            </Button>
                            <Line maxW="10rem" />
                            <StatusProfile rate={info?.games_played === 0 ? 0 : Math.round((info?.games_won / info?.games_played) * 100)} />
                            <Line maxW="10rem" />
                            <Button
                                bg="red"
                                color="blackAlpha.900"
                                borderRadius="3xl"
                                fontSize="3xl"
                                fontWeight="light"
                                px={10}
                                py={8}
                                _focus={{
                                    bg: 'red',
                                }}
                                _hover={{
                                    bg: 'red',
                                }}
                            >
                                Sign Out
                            </Button>
                        </Stack>
                    </>
                </Card>
            </GridItem>
            <GridItem colSpan={statusInfo}>
                <Card w="100%" h="100%">
                    <Stack spacing={5} justifyContent="space-between" direction={isSmallScreen ? 'row' : 'column'}>
                        <Stack spacing={5} alignItems="center" flexGrow={1}>
                            <Heading fontSize="2xl">Status</Heading>
                            <Line maxW="7rem" />
                            <StatusTable
                                played={info?.games_played}
                                wins={info?.games_won}
                                losses={info?.games_lost}
                                draws={info?.games_drawn}
                            />
                        </Stack>

                        <Stack spacing={5} alignItems="center" flexGrow={1}>
                            <Heading fontSize="2xl">Matches History</Heading>
                            <Line maxW="7rem" />
                            <Stack maxH="25rem" overflow="auto" w="100%" alignItems="center">
                                <MatchesHistory history={[]} login={info?.user_login} avatar={info?.user_avatar} />
                            </Stack>
                        </Stack>
                    </Stack>
                </Card>
            </GridItem>
        </Grid>
    );
};

export default ProfilePage;
