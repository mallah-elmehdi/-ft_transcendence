import React, {useContext, useEffect} from 'react';
import ChatHeader from "./ChatHeader"
import MessagesList from "./MessagesList";
import MessageInput from "./MessageInput";
import {useColorModeValue, VStack} from "@chakra-ui/react";
import {ChatContext} from "../hooks/ChatProvider";

function MessagingBox() {
    const {setSelectedChat} = useContext<any>(ChatContext);
    useEffect(() => {
        const keyDownHandler = (event: any) => {
            if (event.key === 'Escape') {
                event.preventDefault();
                console.log('Messaging')
                setSelectedChat(null);
            }
        };
        document.addEventListener('keydown', keyDownHandler);
        return () => {
            document.removeEventListener('keydown', keyDownHandler);
        };
    }, []);

    console.log('Enter MessagingBox')
    const chatBg = useColorModeValue('red', 'green')
    return (
        <VStack h={'100%'} w={'100%'} overflow={'auto'}>
            <ChatHeader/>
            <VStack
                overflow={'auto'}
                maxW={'62em'}
                bgGradient={[
                    'linear(to-t, purple.3000, black)',
                    `linear(to-b, pink.900, ${chatBg})`,
                ]}
                alignItems={'center'} h={'100%'} w={'100%'} flex={1} p={3} pb={1.5}>
                <VStack
                    maxW={'100%'}
                    flex={1}
                    h={'100%'} w={'100%'}
                    overflowY={'auto'}
                    px={5}
                    // pos={'relative'}
                >
                    <MessagesList/>
                </VStack>
                <MessageInput/>
            </VStack>
        </VStack>
    );
}

export default MessagingBox;