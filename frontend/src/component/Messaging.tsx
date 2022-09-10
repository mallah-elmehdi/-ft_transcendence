import React, {useContext, useEffect, useRef} from "react";
import {ChatContext} from "../hooks/ChatProvider";
import {useColorModeValue, VStack} from "@chakra-ui/react";
import MessageInput from "./MessageInput";
// import MessagingProvider, {MessagesContext} from "../hooks/MessagingProvider";
import MessagesList from "./MessagesList";
import ChatHeader from "./ChatHeader";
import ChatDetails from "./ChatDetails";

const Messaging = () => {
    const {setSelectedChat, selectedChat,toggleDetails } = useContext<any>(ChatContext);
    const chatBg = useColorModeValue('red', 'green')
    const {chatDetails} = useContext<any>(ChatContext)

    useEffect(() => {
        // toggleDetails()
        const keyDownHandler = (event: any) => {
            if (event.key === 'Escape') {
                event.preventDefault();
                console.log('Messaging')
                setSelectedChat(null);
            }
        };
        document.addEventListener('keydown', keyDownHandler);
        return () => {
            toggleDetails()
            document.removeEventListener('keydown', keyDownHandler);
        };
    }, []);
    console.log('>>>>>> Enter to Messaging <<<<<<<<' + selectedChat, chatDetails)

    return (
        <>
            {
                !chatDetails ?
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
                            >
                                <MessagesList/>
                            </VStack>
                            <MessageInput/>
                        </VStack>
                    </VStack>
                    :
                    <ChatDetails/>
            }
        </>
    );
};

export default Messaging;