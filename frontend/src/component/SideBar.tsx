import {Flex, Box, Avatar, Text, useColorModeValue, Grid} from '@chakra-ui/react';
import SearchBar from './SearchBar';
import {AnimatePresence} from 'framer-motion';
import {useEffect, useContext, useState} from 'react';
import Tabs from './Tabs';
import {SearchContext} from '../hooks/ChatPageContext';
import {ArrowBackIcon, Search2Icon} from '@chakra-ui/icons';
import {HStack, VStack, Input, InputGroup, InputLeftElement} from '@chakra-ui/react';
import {IoSend} from 'react-icons/io5';
import React from 'react';

type MsgProps = {
    who: Boolean,
    content: String,
}
const Message = ({who, content }:MsgProps) => {
    return (
       <>
           <Box
               rounded={50}
               roundedBottomRight={who ? 0 : 50}
               roundedTopLeft ={who ? 50 : 0}
               p={2}
               bg={who ? 'green': 'red'}
           >
               <Text>{content}</Text>
           </Box>
       </>
    )

}
const MessageInput = () => {
    const [message, setMessage] = useState('');
    const msgInputBg = useColorModeValue('white', 'black')

    function sendMessageHandler() {
        console.log('Sending Message' + message)
        setMessage('')
    }
    useEffect(() => {
        const keyDownHandler = (event: any) => {
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
            <HStack
                px={4}
                overflow={'auto'}
                rounded={20}
                w={'100%'}
                m={5}
                minH={'3em'}
                spacing={4}
            >

                <Input
                    bg={msgInputBg}
                    value={message}
                    onChange={(m) => setMessage(m.target.value)}
                    focusBorderColor="none" border={'none'} placeholder="Message" w={'100%'}
                />
                <Box
                    justifyContent={'center'}
                    alignItems={'center'}
                    rounded={50}
                    bg={msgInputBg}
                    p={2}
                    color={'black'}
                    _hover={{bg: 'black', color: 'green'}}
                >
                    <IoSend
                        onClick={sendMessageHandler}
                        size={30}/>
                </Box>
            </HStack>
        </>
    );
};

const Messaging = () => {
    const {setSelectedChat} = useContext<any>(SearchContext);
    const {selectedChat} = useContext<any>(SearchContext);
    const {data} = useContext<any>(SearchContext);
    const chatBg = useColorModeValue('black', 'white')

    useEffect(() => {
        const keyDownHandler = (event: any) => {
            if (event.key === 'Escape') {
                event.preventDefault();
                setSelectedChat(null);
            }
        };
        document.addEventListener('keydown', keyDownHandler);
        return () => {
            document.removeEventListener('keydown', keyDownHandler);
        };
    }, []);

    let searchIndex;

    if (selectedChat.chat == 'F') searchIndex = data.friends.findIndex((id: any) => selectedChat.id === id.id);
    else searchIndex = data.groups.findIndex((id: any) => selectedChat.id === id.id);
    console.log(searchIndex);

    return (
        <VStack h={'100%'} w={'100%'}
                overflow={'auto'}
        >
            <HStack
                px={3} w={'100%'} m={0} h={''} spacing={4}>
                <ArrowBackIcon m={0} p={0} h={30} fontSize={25} onClick={() => setSelectedChat(null)}/>
                <Avatar
                    name={selectedChat.chat === 'G' ? data.groups[searchIndex].name.toString() : data.friends[searchIndex].name.toString()}
                    src={selectedChat.chat === 'G' ? data.groups[searchIndex].name.toString() : data.friends[searchIndex].avatar}
                ></Avatar>
                <Text>{selectedChat.chat === 'G' ? data.groups[searchIndex].name : data.friends[searchIndex].name}</Text>
            </HStack>
            <VStack
                overflow={'auto'}
                alignItems={'center'} h={'100%'} w={'100%'} flex={1} bg={chatBg} p={3} pb={1.5}>
                <VStack
                    // bg={"#798798"}
                    flex={1}
                    h={'100%'} w={'100%'}
                    overflow={'auto'}
                >
                    <Message who={false} content={'testetstmlkjlkj'}/>
                    <Message who={false} content={'testetstmlkjlkj'}/>
                    <Message who={false} content={'testetstmlkjlkj'}/>
                    <Message who={false} content={'testetstmlkjlkj'}/>
                    <Message who={false} content={'testetstmlkjlkj'}/>
                    <Message who={false} content={'testetstmlkjlkj'}/>
                    <Message who={false} content={'testetstmlkjlkj'}/>
                    <Message who={false} content={'testetstmlkjlkj'}/>
                    <Message who={false} content={'testetstmlkjlkj'}/>
                    <Message who={false} content={'testetstmlkjlkj'}/>
                    <Message who={false} content={'testetstmlkjlkj'}/>
                    <Message who={false} content={'testetstmlkjlkj'}/>
                    <Message who={false} content={'testetstmlkjlkj'}/>
                    <Message who={false} content={'testetstmlkjlkj'}/>
                    <Message who={false} content={'testetstmlkjlkj'}/>
                    <Message who={false} content={'testetstmlkjlkj'}/>
                    <Message who={false} content={'testetstmlkjlkj'}/>
                    <Message who={false} content={'testetstmlkjlkj'}/>
                    <Message who={false} content={'testetstmlkjlkj'}/>
                    <Message who={false} content={'testetstmlkjlkj'}/>
                    <Message who={true} content={'testetstmlkjlkj'}/>
                    <Message who={true} content={'testetstmlkjlkj'}/>
                    <Message who={true} content={'testetstmlkjlkj'}/>
                    <Message who={true} content={'testetstmlkjlkj'}/>
                    <Message who={true} content={'testetstmlkjlkj'}/>
                    <Message who={true} content={'testetstmlkjlkj'}/>
                    <Message who={true} content={'testetstmlkjlkj'}/>
                    <Message who={true} content={'testetstmlkjlkj'}/>
                    <Message who={true} content={'testetstmlkjlkj'}/>
                    <Message who={true} content={'testetstmlkjlkj'}/>
                    <Message who={true} content={'testetstmlkjlkj'}/>
                    <Message who={true} content={'testetstmlkjlkj'}/>
                    <Message who={true} content={'testetstmlkjlkj'}/>
                    <Message who={true} content={'testetstmlkjlkj'}/>
                    <Message who={true} content={'testetstmlkjlkj'}/>
                    <Message who={true} content={'testetstmlkjlkj'}/>
                    <Message who={true} content={'testetstmlkjlkj'}/>
                    <Message who={true} content={'testetstmlkjlkj'}/>
                </VStack>
                <MessageInput/>
            </VStack>
        </VStack>
    );
};
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
