import React, {useContext, useEffect} from 'react';
import {
    Avatar,
    Box,
    Button,
    HStack,
    Modal,
    ModalBody,
    ModalCloseButton,
    ModalContent,
    ModalFooter,
    ModalHeader,
    Spacer,
    Text,
    useDisclosure
} from '@chakra-ui/react';
import {ArrowBackIcon} from '@chakra-ui/icons';
import {ChatContext} from '../hooks/ChatProvider';
import {MdOutlineDelete} from 'react-icons/md';
import {BsThreeDotsVertical} from 'react-icons/bs'

const BlockUser = () => {
    const {isOpen, onOpen, onClose} = useDisclosure();
    useEffect(() => {
        onOpen();
    }, []);

    return (
        <Box
            as="button"
            _hover={{
                bg: 'lightBlack'
            }}
            p={4}
        >
            <MdOutlineDelete size={24} color="red" onClick={() => onOpen()}/>
            <Modal onClose={onClose} size="md" isOpen={isOpen} isCentered>
                <ModalContent w={'20em'} h={'10em'} bg={'lightBlack'}>
                    <ModalHeader>Block User</ModalHeader>
                    <ModalCloseButton/>
                    <ModalBody>lkjlkjlkjlkj</ModalBody>
                    <ModalFooter
                        pb={6}

                    >
                        <Button variant={'ghost'} colorScheme='red' mr={3} onClick={() => {
                            console.log('BLOCK USER')
                        }}>BLOCK USER</Button>
                    </ModalFooter>
                </ModalContent>
            </Modal>
        </Box>
    );
};
const ChatMenu = () =>{
    return (
        <>
        </>
    )
}
type Props ={
    avatar: string,
    chatName: string,
    onClickCallBack: () => void,
    backArrowCallBack: () => void,
}

function ChatHeader({}:Props) {
    const {data} = useContext<any>(ChatContext);
    const {selectedChat, setSelectedChat} = useContext<any>(ChatContext);
    const {toggleDetails} = useContext<any>(ChatContext);
    let searchIndex;

    if (selectedChat.chat === 'F') searchIndex = data.friends.findIndex((id: any) => selectedChat.id === id.id);
    else searchIndex = data.groups.findIndex((id: any) => selectedChat.id === id.id);
    return (
        <HStack w={'100%'} mr={5}>
            <HStack onClick={() => toggleDetails()} as={'button'} px={5} w={'100%'} m={0} h={''}>
                <ArrowBackIcon m={0} mr={25} p={0} h={30} fontSize={25} onClick={() => setSelectedChat(null)}/>
                <Avatar
                    name={selectedChat.chat === 'G' ? data.groups[searchIndex].name.toString() : data.friends[searchIndex].name.toString()}
                    src={selectedChat.chat === 'G' ? data.groups[searchIndex].name.toString() : data.friends[searchIndex].avatar}
                ></Avatar>
                <Text>{selectedChat.chat === 'G' ? data.groups[searchIndex].name : data.friends[searchIndex].name}</Text>
            </HStack>
            <Spacer/>
            <BsThreeDotsVertical/>
            <BlockUser/>
        </HStack>
    );
}

export default ChatHeader;
