import {Flex, Box, Avatar, Text, useColorModeValue, Grid} from '@chakra-ui/react';
import SearchBar from './SearchBar';
import {AnimatePresence} from 'framer-motion';
import {useEffect, useContext, useState, useRef} from 'react';
import Tabs from './Tabs';
import {ArrowBackIcon, Search2Icon} from '@chakra-ui/icons';
import {HStack, VStack, Input, InputGroup, InputLeftElement} from '@chakra-ui/react';
import {IoSend} from 'react-icons/io5';
import React from 'react';
import MessageInput from "./MessageInput"
import Message from "./Message"
import Messaging from "./Messaging";
import {SearchContext} from "../hooks/ChatProvider";

const ChatTabs = () => {
    const {isSearch, toggleSearch} = useContext<any>(SearchContext);

    useEffect(() => {
        const keyDownHandler = (event: any) => {
            if (event.key === 'Escape') {
                console.log('SideBar')
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
            <SearchBar/>
            <AnimatePresence>{!isSearch ? <Tabs/> : undefined}</AnimatePresence>
        </>
    )
}

const SideBar = () => {
    const {selectedChat, setSelectedChat} = useContext<any>(SearchContext);
    useEffect(() => {
        setSelectedChat({chat: "F", id: '1'});

    }, []);

    return (
        <>
            <Flex w={['100%', '100%', '25%', '25%', '25%']} _light={{boxShadow: 'md'}} _dark={{boxShadow: 'dark-lg'}}
                  rounded="30px" direction={'column'} alignItems={'center'} p={5}
                  overflow={'auto'}
            >
                {
                    !selectedChat ?
                        <ChatTabs/>
                        :
                        <Messaging/>
                }
            </Flex>
        </>
    );
};

export default SideBar;
