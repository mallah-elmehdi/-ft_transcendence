import React, { useContext, useEffect, useState } from 'react';
import { InputRightAddon, Box, useNumberInput, Input, InputGroup, Flex, IconButton, Text, HStack, VStack, Avatar, Spacer, useColorModeValue, Button, Menu } from "@chakra-ui/react";
import { AiOutlineUserAdd, AiOutlineUserDelete } from "react-icons/ai"
import { CloseIcon } from "@chakra-ui/icons";
import { ChatContext } from "../State/ChatProvider";
import { Image } from "@chakra-ui/react"
import { RiPencilLine } from "react-icons/ri"
import ChannelMemeber from './ChannelMemeber';
import { AddIcon } from "@chakra-ui/icons"
import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    useDisclosure,
} from '@chakra-ui/react'

import {
    NumberInput,
    NumberInputField,
    NumberInputStepper,
    NumberIncrementStepper,
    NumberDecrementStepper,
} from '@chakra-ui/react'

function ChannelDetails() {
    const [isAdmin] = useState<any>(true);
    const [minute, setMinute] = useState<any>(5);

    const { toggleDetails } = useContext<any>(ChatContext);
    const { data } = useContext<any>(ChatContext);
    const { selectedChat } = useContext<any>(ChatContext);
    let searchIndex = data.groups.findIndex((id: any) => selectedChat.id === id.id);
    const [member, setMember] = useState<any>(null);
    const { isOpen, onOpen, onClose } = useDisclosure()
    const { getInputProps, getIncrementButtonProps, getDecrementButtonProps } =
        useNumberInput({
            step: 1,
            defaultValue: minute,
            min: 1,
            max: 5000,
        })

    const inc = getIncrementButtonProps()
    const dec = getDecrementButtonProps()
    const input = getInputProps()

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

    const toggleAddMemebers = () => {
        console.log('addMemeberHandler')
    }

    const toggleChatSetting = () => {
        console.log('add Memeber')
    }

    const muteMemberHandler = (info: any) => {
        console.log('Mute ', info.id, info.name, minute)
    }
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
                        onClick={toggleChatSetting}
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
                {
                    data.friends.map((friend: any, index: any) => (
                        <ChannelMemeber
                            id={friend.id}
                            name={friend.name.toString()}
                            avatar={friend.avatar}
                            key={index.toString()}
                            isAdmin={isAdmin}
                            onMute={onOpen}
                            setMember={setMember}
                        />
                    ))
                }
                {
                    isAdmin &&
                    <Box
                        onClick={toggleAddMemebers}
                        position={'absolute'} right={5} bottom={5} rounded={30}>
                        <IconButton
                            fontSize={16}
                            w={14}
                            h={14}
                            rounded={30}
                            bg={'green'}
                            variant={'ghost'}
                            aria-label={'new channel'} icon={<AddIcon />}
                        />
                    </Box>
                }
            </VStack>
            <Modal isOpen={isOpen} onClose={onClose} isCentered>
                <ModalOverlay />
                <ModalContent w={'20em'}>
                    <ModalHeader>Mute User</ModalHeader>
                    <ModalCloseButton />
                    <ModalBody>
                        <Text mb={4}>
                            Mute {member?.name} from the room?
                        </Text>
                        {/* <HStack w='14em'>
                            <Button {...dec}>-</Button>
                            <Input
                                {...input}
                                // value={minute}
                                // onChange={(m) => setMinute(m.target.value)}
                            />
                            <Button {...inc}>+</Button>
                        </HStack> */}
                        <HStack
                           justifyContent={'center'}
                        >
                            <NumberInput
                                defaultValue={15}
                                min={5}
                                max={5000}
                                maxW='100px'
                                value={minute}
                                onChange={setMinute}
                                allowMouseWheel>
                                <NumberInputField />
                                <NumberInputStepper>
                                    <NumberIncrementStepper />
                                    <NumberDecrementStepper />
                                </NumberInputStepper>
                            </NumberInput>
                            <Text>M</Text>
                        </HStack>
                    </ModalBody>
                    <ModalFooter>
                        <Button
                            variant={'ghost'}
                            color="red"
                            mr={3}
                            onClick={() => {
                                muteMemberHandler(member)
                                onClose()
                            }}
                        >
                            MUTE
                        </Button>
                        <Button
                            variant={'ghost'}
                            colorScheme="purple"
                            mr={3}
                            onClick={() => {
                                onClose()
                            }}
                        >
                            CANCEL
                        </Button>
                    </ModalFooter>
                </ModalContent>
            </Modal>
        </VStack>
    );
}

export default ChannelDetails;