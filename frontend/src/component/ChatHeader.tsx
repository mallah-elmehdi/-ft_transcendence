import React, { useContext } from 'react';
import { Tooltip, Avatar, Box, HStack, Spacer, Text, WrapItem, useDisclosure } from '@chakra-ui/react';
import { ArrowBackIcon } from '@chakra-ui/icons';
import { ChatContext } from '../hooks/ChatProvider';
import { MdOutlineDelete } from 'react-icons/md';
import {Button, Modal, ModalOverlay, ModalContent, ModalHeader, ModalFooter, ModalBody, ModalCloseButton } from '@chakra-ui/react';

const BlockUser = () => {
    const { isOpen, onOpen, onClose } = useDisclosure();
    return (
        <Box as="button">
            <MdOutlineDelete size={24} color="red" onClick={() => onOpen()} />
            <Modal
             onClose={onClose} size="md" isOpen={isOpen} isCentered>
                <ModalContent w={'20em'} h={'10em'} bg={'black'} >
                    <ModalHeader>Block User</ModalHeader>
                    <ModalCloseButton />
                    <ModalBody>lkjlkjlkjlkj</ModalBody>
                    <ModalFooter>
            <Button colorScheme='blue' mr={3} onClick={onClose}>
              Close
            </Button>
          </ModalFooter>
                </ModalContent>
            </Modal>
        </Box>
    );
};

function ChatHeader() {
    const { data } = useContext<any>(ChatContext);
    const { selectedChat, setSelectedChat } = useContext<any>(ChatContext);
    const { toggleDetails } = useContext<any>(ChatContext);
    let searchIndex;

    if (selectedChat.chat === 'F') searchIndex = data.friends.findIndex((id: any) => selectedChat.id === id.id);
    else searchIndex = data.groups.findIndex((id: any) => selectedChat.id === id.id);
    return (
        <HStack w={'100%'} mr={5}>
            <HStack onClick={() => toggleDetails() } as={'button'} px={5} w={'100%'} m={0} h={''}>
                <ArrowBackIcon m={0} mr={25} p={0} h={30} fontSize={25} onClick={() => setSelectedChat(null)} />
                <Avatar
                    name={selectedChat.chat === 'G' ? data.groups[searchIndex].name.toString() : data.friends[searchIndex].name.toString()}
                    src={selectedChat.chat === 'G' ? data.groups[searchIndex].name.toString() : data.friends[searchIndex].avatar}
                ></Avatar>
                <Text>{selectedChat.chat === 'G' ? data.groups[searchIndex].name : data.friends[searchIndex].name}</Text>
            </HStack>
            <Spacer />
            <BlockUser />
        </HStack>
    );
}

export default ChatHeader;
