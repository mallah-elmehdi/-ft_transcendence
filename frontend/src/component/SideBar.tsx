import {Flex} from '@chakra-ui/react';
import SearchBar from './SearchBar';
import {AnimatePresence} from 'framer-motion';
import {useEffect, useContext} from 'react';
import Tabs from './Tabs';
import React from 'react';
import Messaging from "./Messaging";
import {ChatContext} from "../hooks/ChatProvider";

const ChatTabs = () => {
    const {isSearch, toggleSearch} = useContext<any>(ChatContext);

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
            <SearchBar/>
            <AnimatePresence>{!isSearch ? <Tabs/> : undefined}</AnimatePresence>
        </>
    )
}

const SideBar = () => {
    const {selectedChat} = useContext<any>(ChatContext);

    return (
        <>
            <Flex w={['100%', '100%', '25%', '25%', '25%']} _light={{boxShadow: 'md'}} _dark={{boxShadow: 'dark-lg'}}
                  rounded="30px" direction={'column'} alignItems={'center'} p={5}
                  overflow={'auto'}
            >
                {!selectedChat ? <ChatTabs/> : <Messaging/>}
            </Flex>
        </>
    );
};

export default SideBar;
