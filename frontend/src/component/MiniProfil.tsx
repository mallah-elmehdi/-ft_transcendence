import React from 'react';
import {Flex, Text,HStack,Avatar,  }  from "@chakra-ui/react";
import {FaDiscord, FaFacebook, FaInstagram} from "react-icons/fa";

type Props = {
    name: string,
    src: string,
    facebook: string,
    instagram: string,
    discord: string,
}
function MiniProfil({name, src, facebook, discord, instagram}:Props) {
    return (
        <Flex
            h={'100%'}
            w={'100%'}
            alignItems={'center'}
            justifyContent={'center'}
            direction={'column'}
        >
            <Avatar
                size={'2xl'}
                name={name}
                src={src}
            ></Avatar>
            <Text my={7} fontSize={25} fontWeight={'bold'}> {name} </Text>
            <HStack spacing={8}>
                <Text>
                    <FaFacebook size={35}/>
                </Text>
                <Text>
                    <FaInstagram size={35}/>
                </Text>
                <Text>
                    <FaDiscord size={35}/>
                </Text>
            </HStack>
        </Flex>
    );
}

export default MiniProfil;