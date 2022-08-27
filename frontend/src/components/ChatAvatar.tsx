import * as React from 'react';
import { Avatar, AvatarBadge, Text, HStack } from '@chakra-ui/react';

// TYPE
type Props = {
    name: string;
    username: string;
    photo: string;
    isOnline: boolean;
};

export const ChatAvatar = ({ name, username, photo, isOnline }: Props) => {
    return (
        <HStack alignItems="center">
            <Avatar name={name} src={photo} size="lg">
                <AvatarBadge boxSize="1em" bg={isOnline ? 'primary' : 'secondary'} />
            </Avatar>
            <Text textTransform="capitalize" fontSize="2xl">
                {username}
            </Text>
        </HStack>
    );
};
