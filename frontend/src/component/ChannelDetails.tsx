import React, { useContext, useEffect, useState } from 'react';
import { Box, Flex, IconButton, Text, HStack, VStack, Avatar, Spacer, useColorModeValue, Button, Menu } from "@chakra-ui/react";
import { AiOutlineUserAdd, AiOutlineUserDelete } from "react-icons/ai"
import { CloseIcon } from "@chakra-ui/icons";
import { ChatContext } from "../State/ChatProvider";
import { Image } from "@chakra-ui/react"
import { RiPencilLine } from "react-icons/ri"
import ChannelMemeber from './ChannelMemeber';

function ChannelDetails() {
    const [isAdmin] = useState<any>(false);

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

    const addMemeberHandler = () => {
        console.log('addMemeberHandler')
    }

    const removeMemeberHandler = () => {
        console.log('removeMemeberHandler')
    }

    const editRoom = () => {
        console.log('add Memeber')
    }

    const handleContextMenu = (event: any) => {
        event.preventDefault();
        console.log('right click')
    }

    // useEffect(() => {
    //     document.addEventListener("contextmenu", handleContextMenu);
    //     return () => {
    //         document.removeEventListener("contextmenu", handleContextMenu);
    //     };
    // })
    const [isOpen, setIsOpen] = useState(false);
    return (
        <VStack
            overflow={'auto'}
            position={'relative'}
        >
            <HStack
                overflow={'visible'}
                px={5} w={'100%'} m={0} spacing={8} >
                <Box as={'button'} >
                    <CloseIcon m={0} p={0} h={30} fontSize={15} onClick={() => toggleDetails()} />
                </Box>
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
                pt={'1.5%'}
                h={'100%'}
                overflow={'auto'}
                w={'100%'} alignItems={'left'}>
                <Image h='20em' src={data.groups[searchIndex].avatar} />
                <Text>Memebers</Text>
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
                            <Avatar name={friend.name.toString()} src={friend.avatar.toString()}></Avatar>
                            <Text>{friend.name}</Text>
                        </HStack>
                    ))
                ) : (
                    <Flex h={'100%'} justifyContent={'center'} alignItems={'center'}>
                        <Text>No Memebers</Text>
                    </Flex>
                )}
                {
                    isAdmin &&
                    <>
                    <Box
                        onClick={addMemeberHandler}
                        position={'absolute'} right={5} bottom={5} rounded={30}>
                        <IconButton
                            fontSize={24}
                            w={14}
                            h={14}
                            rounded={30}
                            // bg={'customPurple'}
                            bg={'green'}
                            variant={'ghost'}
                            aria-label={'new channel'} icon={<AiOutlineUserAdd />}
                        />
                    </Box>
                    <Box
                        onClick={removeMemeberHandler}
                        position={'absolute'} right={20} bottom={5} rounded={30}>
                        <IconButton
                            fontSize={24}
                            w={14}
                            h={14}
                            rounded={30}
                            bg={'red'}
                            variant={'ghost'}
                            aria-label={'new channel'} icon={<AiOutlineUserDelete />}
                        />
                    </Box>
                    </>
                }
            </VStack>
        </VStack>
    );
}

export default ChannelDetails;