import * as React from 'react';
import { HStack, Avatar, Text, Button } from '@chakra-ui/react';
import { useMediaQuery, useTheme } from '@chakra-ui/react';
import { Link } from 'react-router-dom';

// type
type Props = {
    match: {
        opponenOneName: string;
        opponenOnePhoto: string;
        opponenOneUsername: string;

        opponenTwoName: string;
        opponenTwoPhoto: string;
        opponenTwoUsername: string;

        link: string;
    };
};

export const LiveMatch = ({ match }: Props) => {
    const theme = useTheme();
    const [isSmallScreen] = useMediaQuery(`(min-width: ${theme.breakpoints.md})`);

    return (
        <HStack spacing={isSmallScreen ? 5 : 3}>
            <Link to={match.link}>
                <Button
                    variant="solid"
                    bg="secondary"
                    color="gray.900"
                    borderRadius="full"
                    fontSize="md"
                    fontWeight="light"
                    size="8xl"
                    py={2}
                    px={4}
                    _focus={{
                        bg: 'secondary',
                    }}
                    _hover={{
                        bg: 'secondary',
                    }}
                >
                    watch
                </Button>
            </Link>
            <HStack spacing={3}>
                {isSmallScreen && <Text fontSize="2xl">{match.opponenOneUsername}</Text>}
                <Avatar name={match.opponenOneName} src={match.opponenOnePhoto} size="md" />
            </HStack>
            <HStack fontSize="2xl">
                <Text>vs</Text>
            </HStack>
            <HStack spacing={3}>
                <Avatar name={match.opponenTwoName} src={match.opponenTwoPhoto} size="md" />
                {isSmallScreen && <Text fontSize="2xl">{match.opponenTwoUsername}</Text>}
            </HStack>
        </HStack>
    );
};
