import {Flex} from '@chakra-ui/react';
import SearchBar from './SearchBar';
import {AnimatePresence} from 'framer-motion';
import React, {useContext, useEffect} from 'react';
import Tabs from './Tabs';
import Messaging from "./Messaging";
import {ChatContext} from "../hooks/ChatProvider";

const ChatTabs = () => {
    const {isSearch, toggleSearch} = useContext<any>(ChatContext);
    const {setChatDetails} = useContext<any>(ChatContext);

    useEffect(() => {
        setChatDetails(false);
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
    const {setSelectedChat,setChatDetails } = useContext<any>(ChatContext);
    useEffect(() => {
        // setSelectedChat({chat: "F", id: "1"})
        // setChatDetails(true);
    }, [selectedChat]);



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
