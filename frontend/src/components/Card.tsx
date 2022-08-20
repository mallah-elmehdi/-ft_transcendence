import * as React from 'react';
import { Box } from '@chakra-ui/react';

// types
type Props = {
    children?: JSX.Element;
    [other: string]: any;
};

export const Card = ({ children, ...props }: Props) => {
    return (
        <Box p={5} bg="dark" borderRadius="2xl" boxShadow="default" w="fit-content" {...props}>
            {children}
        </Box>
    );
};
