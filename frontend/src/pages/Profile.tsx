import * as React from 'react';
import { Stack, GridItem, Grid, Avatar, Text, HStack, IconButton, Link as ChakraLink, Badge, Button, Spacer, AvatarBadge } from '@chakra-ui/react';
import { useMediaQuery, useBreakpointValue } from '@chakra-ui/react';

// ICONS
import { FaDiscord, FaFacebook, FaInstagram, FaThumbsUp, FaThumbsDown, FaEquals } from 'react-icons/fa';

// COMPONENTS
import { Card } from '../components/Card';
import { Line } from '../components/Line';

export const Profile = () => {
    const profileInfo = useBreakpointValue({
        xl: 4,
        lg: 6,
        sm: 12,
        base: 12,
    });
    const statusInfo = useBreakpointValue({
        xl: 8,
        lg: 6,
        sm: 12,
        base: 12,
    });
    return (
        <Grid h="100%" templateColumns="repeat(12, 1fr)" gap={10}>
            <GridItem colSpan={profileInfo}>
                <Card w="100%" h="100%">
                    <Stack alignItems="center" spacing={5} h="100%">
                        <Avatar name="yousef noam" src="https://cdn.intra.42.fr/users/ynoam.jpg" size="2xl">
                            <AvatarBadge boxSize="0.8em" bg="primary" />
                        </Avatar>
                        <Text textTransform="capitalize" fontSize="5xl">
                            ynoam
                        </Text>
                        <Line maxW="13rem" />
                        <HStack spacing={5}>
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
                        <Line maxW="13rem" />
                        <Spacer />
                        <Badge variant="solid" bg="primary" color="gray.900" borderRadius="full" fontSize="3xl" px={5} py={2}>
                            <HStack alignItems="center" spacing={3}>
                                <FaThumbsUp />
                                <Text lineHeight={1}>0</Text>
                            </HStack>
                        </Badge>
                        <Badge variant="solid" bg="secondary" color="gray.900" borderRadius="full" fontSize="3xl" px={5} py={2}>
                            <HStack alignItems="center" spacing={3}>
                                <FaThumbsDown />
                                <Text lineHeight={1}>0</Text>
                            </HStack>
                        </Badge>
                        <Badge variant="solid" bg="gray.900" color="white" borderRadius="full" fontSize="3xl" px={5} py={2}>
                            <HStack alignItems="center" spacing={3}>
                                <FaEquals />
                                <Text lineHeight={1}>0</Text>
                            </HStack>
                        </Badge>
                        <Spacer />
                        <Line maxW="13rem" />
                        <Button
                            variant="solid"
                            bg="secondary"
                            // color="gray.900"
                            borderRadius="3xl"
                            fontSize="5xl"
                            fontWeight="light"
                            size="8xl"
                            py={4}
                            px={12}
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
                </Card>
            </GridItem>
            <GridItem colSpan={statusInfo}>
                <Card w="100%" h="100%">
                    <Text>Coming soon.... </Text>
                </Card>
            </GridItem>
        </Grid>
    );
};
