import React, {useContext, useEffect} from "react";
import {HStack, Input, useColorModeValue} from "@chakra-ui/react";
import {IoSend} from "react-icons/io5";
import {ChatContext} from "../State/ChatProvider";

const MessageInput = () => {
    const {typingMessage, setTypingMessage} = useContext<any>(ChatContext);
    const msgInputBg = useColorModeValue('white', 'rgb(33,33,33)')
    const {setMessages} = useContext<any>(ChatContext)

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
                // pl={5}
                // pr={6}
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
                    onClick={sendMessageHandler}
                    size={30}/>
            </HStack>
        </>
    );
};

export default MessageInput;