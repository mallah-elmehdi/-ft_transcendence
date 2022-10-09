import * as React from 'react';
import { HStack, Avatar, Text, Button, Grid, GridItem } from '@chakra-ui/react';
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
        <Grid h="100%" templateColumns="repeat(9, 1fr)" gap={isSmallScreen ? 5 : 3}>
            <GridItem colSpan={2} h="fit-content" my="auto">
                <HStack justifyContent="flex-end" alignItems="center">
                    <Link to={match.link}>
                        <Button
                            variant="solid"
                            bg="red"
                            color="gray.900"
                            borderRadius="2xl"
                            fontSize="sm"
                            fontWeight="light"
                            size="xl"
                            py={2}
                            px={4}
                            _focus={{
                                bg: 'red',
                            }}
                            _hover={{
                                bg: 'red',
                            }}
                        >
                            watch
                        </Button>
                    </Link>
                </HStack>
            </GridItem>
            <GridItem colSpan={3}>
                <HStack justifyContent="flex-end">
                    {isSmallScreen && <Text fontSize="xl">{match.opponenOneUsername}</Text>}
                    <Avatar name={match.opponenOneName} src={match.opponenOnePhoto} size="md" />
                </HStack>
            </GridItem>
            <GridItem colSpan={1} h="fit-content" my="auto">
                <HStack fontSize="xl" alignItems="center" justifyContent="center">
                    <Text textAlign="center">vs</Text>
                </HStack>
            </GridItem>
            <GridItem colSpan={3}>
                <HStack justifyContent="flex-start">
                    <Avatar name={match.opponenTwoName} src={match.opponenTwoPhoto} size="md" />
                    {isSmallScreen && <Text fontSize="xl">{match.opponenTwoUsername}</Text>}
                </HStack>
            </GridItem>
        </Grid>
    );
};
