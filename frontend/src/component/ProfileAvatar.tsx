import * as React from 'react';
import { Avatar, AvatarBadge, Text, Stack } from '@chakra-ui/react';

// TYPE
type Props = {
    login: string;
    name: string;
    avatar: string;
    isOnline: boolean;
};

export const ProfileAvatar = ({ login, name, avatar, isOnline }: Props) => {
    return (
        <Stack alignItems="center">
            <Avatar name={name} src={avatar} size="xl">
                <AvatarBadge boxSize="1em" bg={isOnline ? 'green' : 'red'} />
            </Avatar>
            <Text fontWeight="bold" fontSize="2xl">
                {login}
            </Text>
        </Stack>
    );
};
