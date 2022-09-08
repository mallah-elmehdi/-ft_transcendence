import React, {useEffect, useState} from "react";
import {Box, HStack, Input, useColorModeValue} from "@chakra-ui/react";
import {IoSend} from "react-icons/io5";

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
                    // bg={msgInputBg}
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

export default MessageInput;