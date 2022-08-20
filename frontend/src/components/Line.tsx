import * as React from 'react';
import { Divider } from '@chakra-ui/react';

// type
type Props = {
    maxW?: string;
};

export const Line = ({ maxW }: Props) => {
    return <Divider maxW={maxW} border="2px" _light={{ borderColor: 'black' }} _dark={{ borderColor: 'gray.400' }} />;
};
