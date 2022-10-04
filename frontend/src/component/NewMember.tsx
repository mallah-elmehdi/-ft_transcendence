import React from 'react';
import { useColorModeValue, IconButton, HStack, Avatar, Text, Checkbox, } from '@chakra-ui/react';

type Props = {
    id: string,
    name: string,
    avatar: string,
}
export default function NewMember({ id, name, avatar }: Props) {
    const value = useColorModeValue('blackAlpha.200', 'whiteAlpha.200');
    return (
        <HStack
            as={'button'}
            p={5}
            pl={6}
            alignItems={'center'}
            rounded={5}
            h={'4.5em'}
            w={'100%'}
            _hover={{ bg: value }}
        >
            <Checkbox
                mr={6}
                colorScheme='purple' />
            <Avatar name={name} src={avatar} />
            <Text>{name}</Text>
        </HStack>
    )
}
