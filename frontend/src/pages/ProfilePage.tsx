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
// import { useRedirect } from '../hooks/useRedirect';
import { GlobalContext } from '../State/GlobalProvider';
import UserInfo from '../api/userInfo';
import { Loading } from '../component/Loading';
import { AlertCompo } from '../component/AlertCompo';
import SignOut from '../api/signOut';
import { useNavigate } from 'react-router-dom';
import UserMatchHistory from '../api/userMatchHistory';

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
    const { userInfo, loader, notif, setLoader, setUserInfo, setNotif, userMatchHistory } = React.useContext<any>(GlobalContext);
    const navigate = useNavigate();

    // const get the user info;
    UserInfo();
    UserMatchHistory();

    // signout
    const signoutHandler = () => {
        SignOut(setLoader, setUserInfo, setNotif);
        navigate(pagesContent.login.url);
    };

    return (
        <>
            {loader && <Loading />}
            {notif && notif.exist && <AlertCompo message={notif.message} type={notif.type} />}
            <Grid h="100%" templateColumns="repeat(12, 1fr)" gap={6}>
                <GridItem colSpan={profileInfo}>
                    <Card w="100%" h="100%" position="relative">
                        <>
                            <EditProfile
                                avatar={userInfo?.user_avatar}
                                login={userInfo?.user_login}
                                user_name={userInfo?.user_name}
                                facebook={userInfo?.facebook}
                                discord={userInfo?.discord}
                                instagram={userInfo?.instagram}
                            />
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
                                <StatusProfile
                                    rate={
                                        userInfo?.games_played === 0 ? 0 : Math.round((userInfo?.games_won / userInfo?.games_played) * 100)
                                    }
                                />
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
