import * as React from 'react';
import { Tab as ChakraTab } from '@chakra-ui/react';
import { Link } from 'react-router-dom';

// TYPE
type Props = {
    children: string;
    to: string;
    isSelected?: boolean;
    [other: string]: any;
};

export const Tab = ({ children, isSelected, to, ...props }: Props) => {
    return (
        <Link to={to}>
            <ChakraTab
                fontSize="2xl"
                {...props}
                _hover={{
                    textDecoration: 'none',
                }}
                color={isSelected ? 'secondary' : ''}
            >
                {children}
            </ChakraTab>
        </Link>
    );
};
