import * as React from 'react';
import { Divider } from '@chakra-ui/react';

// type
type Props = {
    maxW?: string;
};

export const Line = ({ maxW }: Props) => {
    return <Divider maxW={maxW} border="1px" _light={{ borderColor: 'gray.400' }} _dark={{ borderColor: 'gray.200' }} />;
};
