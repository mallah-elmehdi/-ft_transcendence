import * as React from 'react';
import { Box } from '@chakra-ui/react';

// types
type Props = {
    children?: JSX.Element;
    [other: string]: any;
};

export const Card = ({ children, ...props }: Props) => {
    return (
        <Box p={10} _dark={{ bg: 'grey.700' }} borderRadius="2xl" boxShadow="default" {...props}>
            {children}
        </Box>
    );
};
