import React, {useContext, useEffect, useState} from "react";
import {Box, HStack, Input, useColorMode, useColorModeValue} from "@chakra-ui/react";
import {IoSend} from "react-icons/io5";
import {MessagesContext} from "../hooks/MessagingProvider";

const MessageInput = () => {
    // const [message, setMessage] = useState('');
    // const sendIconBg = useColorModeValue('rgb(81,143,229)','rgb(132,119,218)')
    const {typingMessage, setTypingMessage} = useContext<any>(MessagesContext);
    const msgInputBg = useColorModeValue('white', 'rgb(33,33,33)')
    const {setMessages} = useContext<any>(MessagesContext)

    function sendMessageHandler() {
        if (typingMessage.trim()) {
            setMessages((messagesinfo: any) => {
                return [
                    ...messagesinfo,
                    {isSender: true, content: typingMessage}
                ]
            })
        }
        setTypingMessage('')

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
    }, [typingMessage]);
    return (
        <>
            <HStack
                pl={5}
                pr={6}
                w={'100%'}
                m={5}
                h={'3em'}
                spacing={4}
            >

                <Input
                    bg={msgInputBg}
                    value={typingMessage}
                    onChange={(m) => setTypingMessage(m.target.value)}
                    focusBorderColor="none" border={'none'} placeholder="Message" w={'100%'}
                />
                <IoSend
                    color={'rgb(132,119,218)'}
                    // color={sendIconBg}
                    onClick={sendMessageHandler}
                    size={30}/>
            </HStack>
        </>
    );
};

export default MessageInput;