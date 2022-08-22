import * as React from 'react';
import { List, ListItem, ListIcon, OrderedList, UnorderedList, Avatar, HStack, Text, VStack, Box } from '@chakra-ui/react';
import { useMediaQuery, useBreakpointValue, useTheme } from '@chakra-ui/react';

// COMPONENTS
import { Line } from './Line';

// type
type Props = {
    name: string;
    photo: string;
    history: {
        name: string;
        username: string;
        photo: string;
        opponentScore: number;
        myScore: number;
    }[];
};

export const MatchesHistory = ({ history, name, photo }: Props) => {
    const theme = useTheme();
    const [isSmallScreen] = useMediaQuery(`(min-width: ${theme.breakpoints.md})`);

    // breakpoint
    const profileInfo = useBreakpointValue({
        xl: 4,
        base: 12,
    });

    return (
        <>
            {history.length ? (
                <List spacing={10}>
                    {history.map((item, index) => {
                        return (
                            <ListItem key={index}>
                                <HStack spacing={isSmallScreen ? 10 : 5}>
                                    <HStack spacing={3}>
                                        {isSmallScreen && <Text fontSize="3xl">You</Text>}
                                        <Avatar name={name} src={photo} size="lg" />
                                    </HStack>
                                    <HStack fontSize="4xl">
                                        <Text>{item.myScore}</Text>
                                        <Text>-</Text>
                                        <Text>{item.opponentScore}</Text>
                                    </HStack>
                                    <HStack spacing={3}>
                                        <Avatar name={item.name} src={item.photo} size="lg" />
                                        {isSmallScreen && <Text fontSize="3xl">{item.username}</Text>}
                                    </HStack>
                                </HStack>
                            </ListItem>
                        );
                    })}
                </List>
            ) : (
                <Text color="gray.400">no match yet</Text>
            )}
        </>
    );
};
