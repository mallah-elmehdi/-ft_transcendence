import React from 'react';
import {BsThreeDotsVertical} from 'react-icons/bs';
import {
    AlertDialog,
    AlertDialogBody,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogContent,
    AlertDialogOverlay,
} from '@chakra-ui/react'

import {
    Button,
    IconButton,
    Menu,
    MenuButton,
    MenuItem,
    MenuList,
    Modal,
    ModalCloseButton,
    ModalContent,
    ModalFooter,
    ModalHeader,
    Text,
    useDisclosure,
    useColorModeValue,
} from '@chakra-ui/react';
import {MdDelete} from "react-icons/md"

const FriendMenu = () => {
    const value = useColorModeValue('white', 'lightBlack')
    const {isOpen, onOpen, onClose} = useDisclosure();

    const blockUserHandler = () => {
        console.log('BLOCK USER')
    }

    return (
        <>
            <Menu>
                <MenuButton as={IconButton} icon={<BsThreeDotsVertical/>} variant="ghost"/>
                <MenuList>
                    <MenuItem
                        icon={<MdDelete size={20} color={'#FF5C5C'}/>}
                        onClick={() => onOpen()}>
                        <Text color={'customRed'}> Block User </Text>
                    </MenuItem>
                </MenuList>
            </Menu>
            <Modal onClose={onClose} size="md" isOpen={isOpen} isCentered>
                <ModalContent w={'20em'} h={'10em'}
                              bg={value}
                >
                    <ModalHeader>Block User</ModalHeader>
                    <ModalCloseButton/>
                    <ModalFooter pb={6}>
                        <Button
                            variant={'ghost'}
                            colorScheme="purple"
                            mr={3}
                            onClick={onClose}
                        >
                            CANCEL
                        </Button>
                        <Button
                            variant={'ghost'}
                            color="customRed"
                            mr={3}
                            onClick={ blockUserHandler }
                        >
                            BLOCK USER
                        </Button>
                    </ModalFooter>
                </ModalContent>
            </Modal>
        </>
    );
};

export default FriendMenu;
