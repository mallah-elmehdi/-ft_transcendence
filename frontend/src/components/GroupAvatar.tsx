import * as React from 'react';
import { Avatar, Text, HStack } from '@chakra-ui/react';

// TYPE
type Props = {
    name: string;
    username: string;
    photo: string;
};

export const GroupAvatar = ({ name, username, photo }: Props) => {
    return (
        <HStack alignItems="center">
            <Avatar name={name} src={photo} size="lg" />
            <Text textTransform="capitalize" fontSize="2xl">
                {username}
            </Text>
        </HStack>
    );
};
