import * as React from 'react';
import { Stack, VStack, Heading, Button, Image } from '@chakra-ui/react';

// COMPONENTS
import { Card } from '../components/Card';

// ICONS
// import Logo42 from '../assets/icons/42_Logo.svg';

export const SignIn = () => {
    return (
        <Stack w="100%" h="100%" alignItems="center" justifyContent="center">
            <Card px={20} py={10}>
                <VStack spacing={5}>
                    <Heading as="h1" fontSize="6xl">
                        Welcome To
                    </Heading>
                    <Button
                        // leftIcon={<Logo42 />}
                        variant="solid"
                        bg="main.secondary"
                        color="white"
                        borderRadius="2xl"
                        fontSize="lg"
                        w="100%"
                        _focus={{
                            bg: 'main.secondary',
                        }}
                        _hover={{
                            bg: 'main.secondary',
                        }}
                    >
                        Sign In
                    </Button>
                </VStack>
            </Card>
        </Stack>
    );
};
