import * as React from 'react';
import { Stack, VStack, Heading, Button, Image, Flex } from '@chakra-ui/react';
import { useBreakpointValue } from '@chakra-ui/react';

// COMPONENTS
import { ColorModeSwitcher } from '../components/ColorModeSwitcher';
import { Card } from '../components/Card';
import { Logo } from '../components/Logo';

// ICONS
import Logo42 from '../assets/icons/42_Logo.png';
// HOOKS
import { usePageTitle } from '../hooks/usePageTitle';

// CONSTANTS
import { pagesContent } from '../constants';

export const SignIn = () => {
    // page title
    usePageTitle(pagesContent.signIn.title);

    // breakpoint
    const paddingX = useBreakpointValue({
        md: 12,
        base: 10,
    });
    const fontSizeWelcome = useBreakpointValue({
        md: '7xl',
        base: '5xl',
    });
    return (
        <Stack h="90vh">
            <Flex justifyContent="flex-end">
                <ColorModeSwitcher />
            </Flex>
            <Flex w="100%" h="100%" alignItems="center" justifyContent="center">
                <Card px={paddingX} py={10} w="fit-content">
                    <VStack spacing={10}>
                        <Heading as="h1" fontSize={fontSizeWelcome} lineHeight={1}>
                            Welcome To
                        </Heading>
                        <Logo />
                        <Button
                            leftIcon={<Image src={Logo42} width="3rem" mr={2} />}
                            variant="solid"
                            bg="primary"
                            color="white"
                            borderRadius="2xl"
                            fontSize="xl"
                            size="xl"
                            fontWeight="light"
                            w="100%"
                            _focus={{
                                bg: 'primary',
                            }}
                            _hover={{
                                bg: 'primary',
                            }}
                        >
                            Sign In
                        </Button>
                    </VStack>
                </Card>
            </Flex>
        </Stack>
    );
};
