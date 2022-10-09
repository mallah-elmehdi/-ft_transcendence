import * as React from 'react';
import { Box } from '@chakra-ui/react';

// types
type Props = {
    children?: JSX.Element;
    [other: string]: any;
};

export const Card = ({ children, ...props }: Props) => {
    return (
        <Box
            p={10}
            _dark={{ boxShadow: 'dark-lg', bg: 'grey.700' }}
            _light={{ boxShadow: 'md' }}
            borderRadius="2xl"
            boxShadow="2xl"
            {...props}
        >
            {children}
        </Box>
    );
};
