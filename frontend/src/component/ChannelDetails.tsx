import React, {useContext, useEffect} from 'react';
import {Box, Flex, IconButton, Text, HStack} from "@chakra-ui/react";
import {AiOutlineUserAdd} from "react-icons/ai"
import {CloseIcon} from "@chakra-ui/icons";
import {ChatContext} from "../State/ChatProvider";

function ChannelDetails() {
    const {toggleDetails} = useContext<any>(ChatContext);
    useEffect(() => {
        const keyDownHandler = (event: any) => {
            if (event.key === 'Escape') {
                event.preventDefault();
                toggleDetails()
            }
        };
        document.addEventListener('keydown', keyDownHandler);
        return () => {
            document.removeEventListener('keydown', keyDownHandler);
        };
    },);
    return (
        <Flex h={'100%'} w={'100%'} position={'relative'}>
            <HStack h={14} px={5} w={'100%'} m={0} spacing={8}>
                <CloseIcon m={0} p={0} h={30} fontSize={15} onClick={() => toggleDetails()}/>
                <Text fontSize={20}>Details</Text>
            </HStack>
            <Box position={'absolute'} right={4} bottom={0} rounded={30}>
                <IconButton
                    fontSize={24}
                    w={14}
                    h={14}
                    rounded={30}
                    bg={'customPurple'}
                    variant={'ghost'}
                    aria-label={'new channel'} icon={<AiOutlineUserAdd/>}/>
            </Box>
        </Flex>
    );
}

export default ChannelDetails;