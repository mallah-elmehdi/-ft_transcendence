import React, { useState } from 'react';
import {
    Stack,
    GridItem,
    Grid,
    Avatar,
    Text,
    HStack,
    IconButton,
    Link as ChakraLink,
    Badge,
    Button,
    Spacer,
    AvatarBadge,
    Heading,
    Box,
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    Input,
} from '@chakra-ui/react';
import { useMediaQuery, useBreakpointValue, useDisclosure, useTheme } from '@chakra-ui/react';

// ICONS
import { FaDiscord, FaFacebook, FaInstagram, FaThumbsUp, FaThumbsDown, FaEquals, FaCamera } from 'react-icons/fa';

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

    // modal
    const { isOpen, onOpen, onClose } = useDisclosure();

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

    // upload image
    const [image, setImage] = useState(photo);
    const onImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        if (event.target.files) {
            const objectUrl = URL.createObjectURL(event.target.files[0]);
            setImage(objectUrl);
        }
    };

    return (
        <Grid h="100%" templateColumns="repeat(12, 1fr)" gap={gap}>
            <GridItem colSpan={profileInfo} mb={marginBottom}>
                <Card w="100%" h="100%">
                    <Grid templateColumns="repeat(12, 1fr)" gap={5} h="100%">
                        <GridItem colSpan={profilePart1}>
                            <Stack spacing={5} alignItems="center">
                                <ProfileAvatar name={name} username={username} photo={photo} isOnline={isOnline} />
                                <Button onClick={onOpen} variant="link" color="primary" fontWeight="light">
                                    Edit
                                </Button>

                                <Modal isOpen={isOpen} onClose={onClose} isCentered>
                                    <ModalOverlay />
                                    <ModalContent borderRadius="2xl">
                                        <ModalHeader>Edit Profile</ModalHeader>
                                        <ModalCloseButton />
                                        <ModalBody>
                                            <Stack alignItems="center" spacing={5}>
                                                <Box position="relative">
                                                    <Avatar name={name} src={image} size="2xl" />
                                                    <Box
                                                        opacity={0}
                                                        _hover={{ opacity: 1 }}
                                                        top="50%"
                                                        right="50%"
                                                        transform="translate(50%, -50%)"
                                                        borderRadius="full"
                                                        position="absolute"
                                                        zIndex={2}
                                                        w="100%"
                                                        h="100%"
                                                        cursor="pointer"
                                                        bg="rgba(0,0,0,.5)"
                                                        border="2px solid white"
                                                        transition="all 0.3s ease"
                                                    >
                                                        <IconButton
                                                            size="lg"
                                                            aria-label="Camera"
                                                            fontSize="2xl"
                                                            borderRadius="full"
                                                            position="absolute"
                                                            top="50%"
                                                            right="50%"
                                                            transform="translate(50%, -50%)"
                                                            icon={<FaCamera />}
                                                            zIndex={3}
                                                        />
                                                        <Input
                                                            type="file"
                                                            borderRadius="full"
                                                            top="50%"
                                                            position="absolute"
                                                            right="50%"
                                                            transform="translate(50%, -50%)"
                                                            cursor="pointer"
                                                            w="100%"
                                                            h="100%"
                                                            zIndex={4}
                                                            border={0}
                                                            opacity={0}
                                                            onChange={onImageChange}
                                                            sx={{
                                                                '::-webkit-file-upload-button': {
                                                                    visibility: 'hidden',
                                                                },
                                                            }}
                                                        />
                                                    </Box>
                                                </Box>
                                            </Stack>
                                        </ModalBody>

                                        <ModalFooter>
                                            <Button
                                                onClick={onClose}
                                                variant="solid"
                                                bg="secondary"
                                                color="black"
                                                borderRadius="2xl"
                                                fontSize="xl"
                                                size="xl"
                                                py={2}
                                                px={5}
                                                fontWeight="light"
                                                _focus={{
                                                    bg: 'secondary',
                                                }}
                                                _hover={{
                                                    bg: 'secondary',
                                                }}
                                            >
                                                Close
                                            </Button>
                                            <Button
                                                ml={5}
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
                                                Save
                                            </Button>
                                        </ModalFooter>
                                    </ModalContent>
                                </Modal>

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
