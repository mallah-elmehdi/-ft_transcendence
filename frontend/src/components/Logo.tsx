import * as React from 'react';
import { Heading, Text } from '@chakra-ui/react';
import { useBreakpointValue } from '@chakra-ui/react';

export const Logo = () => {
    const fontSizeLogo = useBreakpointValue({
        md: '6xl',
        base: '5xl',
    });

    return (
        <Heading as="h2" lineHeight={1} fontSize={fontSizeLogo} _light={{ color: 'black' }}>
            Pon
            <Text as="span" color="secondary">
                G
            </Text>
            ame
        </Heading>
    );
};
