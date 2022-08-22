import * as React from 'react';
import { Badge, Text, HStack, Stack } from '@chakra-ui/react';
import { useMediaQuery, useBreakpointValue, useTheme } from '@chakra-ui/react';

// ICONS
import { FaDiscord, FaFacebook, FaInstagram, FaThumbsUp, FaThumbsDown, FaEquals } from 'react-icons/fa';

// TYPE
type Props = {
    wins: number;
    losses: number;
    draws: number;
};

export const StatusProfile = ({ wins, losses, draws }: Props) => {
    const theme = useTheme();
    const [isLargerScreen] = useMediaQuery(`(min-width: ${theme.breakpoints.xl})`);
    const [isSmallScreen] = useMediaQuery(`(max-width: ${theme.breakpoints.md})`);

    return (
        <Stack direction={isLargerScreen || isSmallScreen ? 'column' : 'row'} spacing={5} alignItems="center">
            <Badge variant="solid" bg="primary" color="gray.900" borderRadius="full" fontSize="3xl" px={5} py={2}>
                <HStack alignItems="center" spacing={3}>
                    <FaThumbsUp />
                    <Text lineHeight={1}>{wins}</Text>
                </HStack>
            </Badge>
            <Badge variant="solid" bg="secondary" color="gray.900" borderRadius="full" fontSize="3xl" px={5} py={2}>
                <HStack alignItems="center" spacing={3}>
                    <FaThumbsDown />
                    <Text lineHeight={1}>{losses}</Text>
                </HStack>
            </Badge>
            <Badge variant="solid" bg="gray.900" color="white" borderRadius="full" fontSize="3xl" px={5} py={2}>
                <HStack alignItems="center" spacing={3}>
                    <FaEquals />
                    <Text lineHeight={1}>{draws}</Text>
                </HStack>
            </Badge>
        </Stack>
    );
};
