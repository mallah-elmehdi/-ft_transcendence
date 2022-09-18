import React from 'react';
import { BsThreeDotsVertical } from 'react-icons/bs';
import { Button, Text, IconButton, Menu, MenuButton, MenuList, MenuItem, MenuItemOption, MenuGroup, MenuOptionGroup, MenuDivider } from '@chakra-ui/react';
import {
    Avatar,
    Box,
    HStack,
    Modal,
    ModalBody,
    ModalCloseButton,
    ModalContent,
    ModalFooter,
    ModalHeader,
    Spacer,
    useDisclosure
} from '@chakra-ui/react';

const FriendMenu = () => {
    const blockUserHandler = () => {
                            console.log('BLOCK USER')
    }

    const {isOpen, onOpen, onClose} = useDisclosure();
    return (
        <>
            <Menu>
                <MenuButton as={IconButton} icon={<BsThreeDotsVertical />} variant="ghost"/>
                <MenuList>
                    <MenuItem onClick={() => onOpen()}>
                        <Text color={'red'}> Block User </Text>
                    </MenuItem>
                </MenuList>
            </Menu>
            <Modal onClose={onClose} size="md" isOpen={isOpen} isCentered>
                <ModalContent w={'20em'} h={'10em'} bg={'lightBlack'}>
                    <ModalHeader>Block User</ModalHeader>
                    <ModalCloseButton />
                    <ModalFooter pb={6}>
                        <Button
                            variant={'ghost'}
                            colorScheme="pink"
                            mr={3}
                            onClick={() => {
                                blockUserHandler();
                            }}
                        >
                            BLOCK USER
                        </Button>
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
                    </ModalFooter>
                </ModalContent>
            </Modal>
        </>
    );
};

export default FriendMenu;
