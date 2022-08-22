import * as React from 'react';
import { Avatar, AvatarBadge, Text, Stack } from '@chakra-ui/react';

// TYPE
type Props = {
    name: string;
    username: string;
    photo: string;
    isOnline: boolean;
};

export const ProfileAvatar = ({ name, username, photo, isOnline }: Props) => {
    return (
        <Stack alignItems="center">
            <Avatar name={name} src={photo} size="2xl">
                <AvatarBadge boxSize="1em" bg={isOnline ? 'primary' : 'secondary'} />
            </Avatar>
            <Text textTransform="capitalize" fontSize="5xl">
                {username}
            </Text>
        </Stack>
    );
};
