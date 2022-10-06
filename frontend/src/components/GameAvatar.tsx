import * as React from 'react';
import { Avatar, Text, VStack, Box } from '@chakra-ui/react';
import AvatarBG from '../assets/images/avatar_background.png';

// TYPE
type Props = {
    name: string;
    username: string;
    photo: string;
};

export const GameAvatar = ({ name, username, photo }: Props) => {
    return (
        <VStack alignItems="center" spacing={0}>
            <Avatar name={name} size="lg" src={photo} />
            <Text textTransform="capitalize" color="white" fontSize="4xl" lineHeight={1}>
                {username}
            </Text>
        </VStack>
    );
};
