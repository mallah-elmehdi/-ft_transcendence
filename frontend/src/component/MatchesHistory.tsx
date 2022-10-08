import * as React from 'react';
import { List, ListItem, Avatar, HStack, Text } from '@chakra-ui/react';
import { useMediaQuery, useTheme } from '@chakra-ui/react';

// type
type Props = {
    login: string;
    avatar: string;
    history: {
        opponentLogin: string;
        opponentAvatar: string;
        opponentScore: number;
        myScore: number;
    }[];
};

export const MatchesHistory = ({ history, login, avatar }: Props) => {
    const theme = useTheme();
    const [isSmallScreen] = useMediaQuery(`(min-width: ${theme.breakpoints.md})`);

    return (
        <>
            {history.length ? (
                <List spacing={10} p={5}>
                    {history?.map((item, index) => {
                        return (
                            <ListItem key={index}>
                                <HStack spacing={5}>
                                    <HStack spacing={3}>
                                        {isSmallScreen && <Text fontSize="xl">{login}</Text>}
                                        <Avatar name={login} src={avatar} size="sm" />
                                    </HStack>
                                    <HStack fontSize="xl">
                                        <Text>{item.myScore}</Text>
                                        <Text>-</Text>
                                        <Text>{item.opponentScore}</Text>
                                    </HStack>
                                    <HStack spacing={3}>
                                        <Avatar name={item.opponentLogin} src={item.opponentAvatar} size="sm" />
                                        {isSmallScreen && <Text fontSize="xl">{item.opponentLogin}</Text>}
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
