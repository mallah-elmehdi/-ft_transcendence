import * as React from 'react';
import { Avatar, Text, VStack } from '@chakra-ui/react';

// TYPE
type Props = {
    name: string;
    username: string;
    photo: string;
};

export const GameAvatar = ({ name, username, photo }: Props) => {
    return (
        <VStack alignItems="center">
            <Text textTransform="capitalize" fontSize="2xl">
                {username}
            </Text>
            <Avatar name={name} src={photo} size="lg" />
        </VStack>
    );
};
