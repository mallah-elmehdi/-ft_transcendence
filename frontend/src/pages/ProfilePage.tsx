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
import React from 'react';

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
// import { useRedirect } from '../hooks/useRedirect';
import { useNavigate, useParams } from 'react-router-dom';
import { getFriendInfo, getUserInfo, signOut } from '../State/Api';
import { GlobalContext } from '../State/Provider';

const ProfilePage = () => {
    // page title
    usePageTitle(pagesContent.profile.title);
    // vars
    const theme = useTheme();
    const navigate = useNavigate();
    // breakpoint
    const profileInfo = useBreakpointValue({ xl: 3, lg: 4, base: 12 });
    const statusInfo = useBreakpointValue({ xl: 9, lg: 8, base: 12 });
    const [isSmallScreen] = useMediaQuery(`(min-width: ${theme.breakpoints.xl})`);
    // signout
    const signoutHandler = () => {
        signOut(dispatch).then(() => {
            navigate(pagesContent.login.url);
        });
    };

    // which user
    const params = useParams();
    const [me, setMe] = React.useState(false);
    // context
    const { data, dispatch } = React.useContext<any>(GlobalContext);
    // ex
    const { userInfo } = data;

    // useEffect
    React.useEffect(() => {
        if (params?.user_id === 'me') {
            getUserInfo(dispatch)
                .then(() => {
                    setMe(params?.user_id === 'me');
                })
                .catch(() => {
                    navigate(pagesContent.login.url);
                });
        } else {
            getFriendInfo(dispatch, params?.user_id)
                .then(() => {
                    setMe(params?.user_id === 'me');
                })
                .catch(() => {
                    navigate(pagesContent.profile.url);
                });
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [params?.user_id]);

    return (
        <>
            <Grid h="100%" templateColumns="repeat(12, 1fr)" gap={6}>
                <GridItem colSpan={profileInfo}>
                    <Card w="100%" h="100%" position="relative">
                        <>
                            {me && (
                                <EditProfile
                                    avatar={userInfo?.user_avatar}
                                    login={userInfo?.user_login}
                                    user_name={userInfo?.user_name}
                                    facebook={userInfo?.facebook}
                                    discord={userInfo?.discord}
                                    instagram={userInfo?.instagram}
                                />
                            )}
                            <Stack spacing={5} alignItems="center">
                                <ProfileAvatar name={userInfo?.user_name} avatar={userInfo?.user_avatar} isOnline={userInfo?.online} />

                                <Line maxW="10rem" />

                                <HStack spacing={5} justifyContent="center">
                                    <ChakraLink isExternal href={'https://www.facebook.com/' + userInfo?.facebook}>
                                        <IconButton
                                            size="lg"
                                            aria-label="Facebook"
                                            variant="ghost"
                                            borderRadius="2xl"
                                            fontSize="2xl"
                                            icon={<FaFacebook />}
                                        />
                                    </ChakraLink>
                                    <ChakraLink isExternal href={'https://www.discordapp.com/users/' + userInfo?.discord}>
                                        <IconButton
                                            size="lg"
                                            aria-label="Discord"
                                            variant="ghost"
                                            borderRadius="2xl"
                                            fontSize="2xl"
                                            icon={<FaDiscord />}
                                        />
                                    </ChakraLink>
                                    <ChakraLink isExternal href={'https://www.instagram.com/' + userInfo?.instagram}>
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
                                {me && (
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
                                )}
                                <Line maxW="10rem" />
                                <StatusProfile
                                    rate={
                                        userInfo?.games_played === 0 ? 0 : Math.round((userInfo?.games_won / userInfo?.games_played) * 100)
                                    }
                                />
                                {me && (
                                    <>
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
                                            onClick={signoutHandler}
                                        >
                                            Sign Out
                                        </Button>
                                    </>
                                )}
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
                                    played={userInfo?.games_played}
                                    wins={userInfo?.games_won}
                                    losses={userInfo?.games_lost}
                                    draws={userInfo?.games_drawn}
                                />
                            </Stack>

                            <Stack spacing={5} alignItems="center" flexGrow={1}>
                                <Heading fontSize="2xl">Matches History</Heading>
                                <Line maxW="7rem" />
                                <Stack maxH="25rem" overflow="auto" w="100%" alignItems="center">
                                    <MatchesHistory history={[]} login={userInfo?.user_login} avatar={userInfo?.user_avatar} />
                                </Stack>
                            </Stack>
                        </Stack>
                    </Card>
                </GridItem>
            </Grid>
        </>
    );
};

export default ProfilePage;
