import React from 'react';
import { BsThreeDotsVertical } from 'react-icons/bs';
import { Button, Text, IconButton, Menu, MenuButton, MenuList, MenuItem, MenuItemOption, MenuGroup, MenuOptionGroup, MenuDivider } from '@chakra-ui/react';
import { Avatar, Box, HStack, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, Spacer, useDisclosure, useColorModeValue } from '@chakra-ui/react';
import {MdDelete} from "react-icons/md"

const GroupMenu = () => {
    const value = useColorModeValue('white', 'lightBlack')
    const { isOpen, onOpen, onClose } = useDisclosure();

    const leaveChannelHandler = () => {
        console.log('BLOCK USER');
    };
    return (
        <>
            <Menu>
                <MenuButton as={IconButton} icon={<BsThreeDotsVertical />} variant="ghost" />
                <MenuList>
                    <MenuItem onClick={() => onOpen()}
                              icon={<MdDelete size={20} color={'#FF5C5C'}/>}
                    >
                        <Text color={'customRed'}>Leave Channel</Text>
                    </MenuItem>
                </MenuList>
            </Menu>
            <Modal onClose={onClose} size="md" isOpen={isOpen} isCentered>
                <ModalContent w={'20em'} h={'10em'} bg={value}>
                    <ModalHeader>Leave Channel</ModalHeader>
                    <ModalCloseButton />
                    <ModalFooter pb={6}>
                        <Button
                            variant={'ghost'}
                            colorScheme="purple"
                            mr={3}
                            onClick={() => {
                                onClose();
                            }}
                        >
                            CANCEL
                        </Button>
                        <Button
                            variant={'ghost'}
                            color="customRed"
                            mr={3}
                            onClick={() => leaveChannelHandler() }
                        >
                            LEAVE CHANNEL
                        </Button>
                    </ModalFooter>
                </ModalContent>
            </Modal>
        </>
    );
};

export default GroupMenu;
