import { Flex, Box, Avatar, Text } from '@chakra-ui/react';
import SearchBar from './SearchBar';
import { AnimatePresence } from 'framer-motion';
import { useEffect, useContext, useState } from 'react';
import Tabs from './Tabs';
import { SearchContext } from '../hooks/ChatPageContext';
import { ArrowBackIcon, Search2Icon } from '@chakra-ui/icons';
import { HStack, VStack, Input, InputGroup, InputLeftElement } from '@chakra-ui/react';
import { IoSend } from 'react-icons/io5';
import React from 'react';

const MessageInput = () => {
    const [message, setMessage] = useState('');
    function sendMessageHandler  () {
        console.log('Sending Message' + message)
        setMessage('')
    }
    useEffect(() => {
        const keyDownHandler = (event:any) => {
          if (event.key === 'Enter') {
            event.preventDefault();
            sendMessageHandler();
          }
        };
    
        document.addEventListener('keydown', keyDownHandler);
    
        return () => {
          document.removeEventListener('keydown', keyDownHandler);
        };
      }, []);
    return (
        <>
            <HStack px={4} overflow={'hidden'} bg={'black'} rounded={20} w={'100%'} m={5} minH={'3em'} spacing={4}>
                <Input
                value={message}
                onChange={(m)=> setMessage(m.target.value)}
                 focusBorderColor="none" border={'none'} placeholder="Message" overflowWrap={'break-word'} w={'100%'} rounded={'5 5 0 5'} />
                <IoSend
                    onClick={sendMessageHandler}
                 color='#A2CE73' size={30} />
            </HStack>
        </>
    );
};

const Messaging = () => {
    const { setSelectedChat } = useContext<any>(SearchContext);
    const { selectedChat } = useContext<any>(SearchContext);
    const { data } = useContext<any>(SearchContext);

    let searchIndex;

    if (selectedChat.chat == 'F') searchIndex = data.friends.findIndex((id: any) => selectedChat.id === id.id);
    else searchIndex = data.groups.findIndex((id: any) => selectedChat.id === id.id);
    console.log(searchIndex);

    return (
        <VStack h={'100%'} w={'100%'}>
            <HStack px={5} w={'100%'} m={0} h={''} spacing={4}>
                <ArrowBackIcon m={0} p={0} h={30} fontSize={25} onClick={() => setSelectedChat(null)} />
                <Avatar
                    name={selectedChat.chat == 'G' ? data.groups[searchIndex].name.toString() : data.friends[searchIndex].name.toString()}
                    src={selectedChat.chat == 'G' ? data.groups[searchIndex].name.toString() : data.friends[searchIndex].avatar}
                    // src={data.groups[searchIndex].groupname.toString()}
                ></Avatar>
                <Text>{selectedChat.chat == 'G' ? data.groups[searchIndex].name : data.friends[searchIndex].name}</Text>
            </HStack>
            <VStack alignItems={'center'} h={'100%'} w={'100%'} flex={1} bg={'white'} p={5}>
                <Flex alignItems={'center'} justifyContent={'center'} h={'100%'} w={'100%'} flex={1}>
                    lkkjlkjlkj
                </Flex>
                <MessageInput/>
            </VStack>
        </VStack>
    );
};

const SideBar = () => {
    const { isSearch, toggleSearch } = useContext<any>(SearchContext);
    const { selectedChat } = useContext<any>(SearchContext);

    useEffect(() => {
        const keyDownHandler = (event: any) => {
            if (event.key === 'Escape') {
                event.preventDefault();
                toggleSearch();
            }
        };
        document.addEventListener('keydown', keyDownHandler);
        return () => {
            document.removeEventListener('keydown', keyDownHandler);
        };
    });

    return (
        <>
            <Flex w={['100%', '100%', '25%', '25%', '25%']} _light={{ boxShadow: 'md' }} _dark={{ boxShadow: 'dark-lg' }} rounded="30px" direction={'column'} alignItems={'center'} p={5}>
                {!selectedChat ? (
                    <>
                        <SearchBar />
                        <AnimatePresence>{!isSearch ? <Tabs /> : undefined}</AnimatePresence>
                    </>
                ) : (
                    <Messaging />
                )}
            </Flex>
        </>
    );
};

export default SideBar;
