import React from 'react';
import { Stack, HStack, Text, Box } from '@chakra-ui/react';
import { useMediaQuery, useTheme } from '@chakra-ui/react';

// COMPONENTS
import { Card } from '../components/Card';
import { GameAvatar } from '../components/GameAvatar';

// HOOKS
import { usePageTitle } from '../hooks/usePageTitle';

// CONSTANTS
import { pagesContent } from '../constants';

export const Game = () => {
    // page title
    usePageTitle(pagesContent.play.title);

    // screen sizes
    const theme = useTheme();
    const [isSmallScreen] = useMediaQuery(`(max-width: ${theme.breakpoints.lg})`);

    // garbage value [FOR TEST]<----------------------------------------
    const opponenOne = {
        name: 'el mehdi mallah',
        username: 'emallah',
        photo: 'https://cdn.intra.42.fr/users/emallah.jpg',
        score: 10,
    };
    const opponenTwo = {
        name: 'youssef noam',
        username: 'ynoam',
        photo: 'https://cdn.intra.42.fr/users/ynoam.jpg',
        score: 8,
    };
    // garbage value [FOR TEST]<----------------------------------------

    return (
        <Card>
            <Stack spacing={5}>
                <HStack>
                    <Text flexGrow={1} align="center" fontSize="4xl">
                        {opponenOne.score}
                    </Text>
                    <Text flexGrow={1} align="center" fontSize="4xl">
                        {opponenTwo.score}
                    </Text>
                </HStack>
                <HStack spacing={10}>
                    {!isSmallScreen && <GameAvatar name={opponenOne.name} username={opponenOne.username} photo={opponenOne.photo} />}
                    <Box h="30rem" bg="black" flexGrow={1}></Box>
                    {!isSmallScreen && <GameAvatar name={opponenTwo.name} username={opponenTwo.username} photo={opponenTwo.photo} />}
                </HStack>
            </Stack>
        </Card>
    );
};
