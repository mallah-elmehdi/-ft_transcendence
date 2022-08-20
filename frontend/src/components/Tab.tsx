import * as React from 'react';
import { Tab as ChakraTab } from '@chakra-ui/react';
import { Link as RRDLink } from 'react-router-dom';

// TYPE
type Props = {
    children: string;
    to: string;
    [other: string]: any;
};

export const Tab = ({ children, to, ...props }: Props) => {
    return (
        <RRDLink to={to}>
            <ChakraTab
                fontSize="2xl"
                {...props}
                _hover={{
                    textDecoration: 'none',
                }}
                _selected={{
                    color: 'secondary',
                }}
            >
                {children}
            </ChakraTab>
        </RRDLink>
    );
};
