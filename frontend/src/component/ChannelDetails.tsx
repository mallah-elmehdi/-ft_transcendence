import React, { useContext, useEffect, useState } from 'react';
import { Box, Flex, IconButton, Text, HStack, VStack, Avatar, Spacer, useColorModeValue, Button } from "@chakra-ui/react";
import { AiOutlineUserAdd } from "react-icons/ai"
import { CloseIcon } from "@chakra-ui/icons";
import { ChatContext } from "../State/ChatProvider";
import { Image } from "@chakra-ui/react"
import { Avatar as ChakraAvatar } from "@chakra-ui/avatar";
import { AddIcon } from "@chakra-ui/icons"
import { RiPencilLine } from "react-icons/ri"

function ChannelDetails() {
    const [isAdmin] = useState<any>(true);

    const { toggleDetails } = useContext<any>(ChatContext);
    const { data } = useContext<any>(ChatContext);
    const { selectedChat } = useContext<any>(ChatContext);
    let searchIndex = data.groups.findIndex((id: any) => selectedChat.id === id.id);
    const value = useColorModeValue('blackAlpha.200', 'whiteAlpha.200')

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
    
    const addMemeberHandler = ()=>{
        console.log('Edit Room')
    }
    const editRoom = ()=>{
        console.log('add Memeber')
    }
    const handleContextMenu = (event:any)=>{
        event.preventDefault();
        console.log('right click')
    }

    useEffect(()=>{
        document.addEventListener("contextmenu", handleContextMenu);
    return () => {
      document.removeEventListener("contextmenu", handleContextMenu);
    };
    })
    return (
        <VStack h={'100%'} w={'100%'} >
            <HStack h={14} px={5} w={'100%'} m={0} spacing={8}>
                <CloseIcon m={0} p={0} h={30} fontSize={15} onClick={() => toggleDetails()} />
                <Text fontSize={20}>Details</Text>
                <Spacer />
                {isAdmin &&
                    <Box
                        rounded={'50em'}
                        bg={'none'}
                        as={Button}
                        onClick={editRoom}
                    >
                        <RiPencilLine fontSize={'1.2em'} />
                    </Box>
                }
            </HStack>
            <VStack
                alignItems={'left'}
            >
                <Image
                    h='20em'
                    src={data.groups[searchIndex].avatar}
                />
                <Text  >Memebers</Text>
                <VStack>
                    {data.friends.length ? (
                        data.friends.map((friend: any, index: any) => (
                            <HStack
                                as={'button'}
                                p={5}
                                alignItems={'center'}
                                rounded={5}
                                h={'4.5em'}
                                w={'100%'}
                                _hover={{ bg: value }}
                                key={index.toString()}
                            >
                                <ChakraAvatar name={friend.name.toString()} src={friend.avatar.toString()}></ChakraAvatar>
                                <Text>{friend.name}</Text>

                            </HStack>
                        ))
                    ) : (
                        <Flex h={'100%'} justifyContent={'center'} alignItems={'center'}>
                            <Text>No Chat</Text>
                        </Flex>
                    )}

                </VStack>
            {
                isAdmin &&
                <Box
                onClick={addMemeberHandler}
                 position={'absolute'} right={10} bottom={10} rounded={30}>
                    <IconButton
                        fontSize={24}
                        w={14}
                        h={14}
                        rounded={30}
                        bg={'customPurple'}
                        variant={'ghost'}
                        aria-label={'new channel'} icon={<AiOutlineUserAdd />}
                         />
                </Box>
            }
            </VStack>
        </VStack>
    );
}

export default ChannelDetails;