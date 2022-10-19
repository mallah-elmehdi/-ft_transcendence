import React, { useContext, useEffect, useState } from 'react';
import { HStack, Input, useColorModeValue } from '@chakra-ui/react';
import { IoSend } from 'react-icons/io5';
import { ChatContext } from '../State/ChatProvider';
import { SOCKET } from '../constants';
import { io } from 'socket.io-client';
import { GlobalContext } from '../State/Provider';

const MessageInput = () => {
    const [typingMessage, setTypingMessage] = useState<any>('');
    const msgInputBg = useColorModeValue('white', 'rgb(33,33,33)');
    // const { socket } = useContext<any>(ChatContext);
    const { selectedChat } = useContext<any>(ChatContext);
    const { dispatch, state } = useContext<any>(ChatContext);
    const { newFriends, newGroups, roomDm } = state;
    const { data } = React.useContext<any>(GlobalContext);
    const { userInfo } = data;

    function sendMessageHandler() {
        if (typingMessage.trim()) {
            // let newDate = Date.now();
            // console.log(newDate);
            // console.log("sendMessage: ", {
            //   room_id: selectedChat.chat === "F" ? roomDm : selectedChat.id,
            //   message: typingMessage.trim(),
            //   userId: ,
            //   // currentTime: newDate,
            // });
            const payload = {
                room_id: selectedChat.chat === 'F' ? roomDm : selectedChat.id,
                message: typingMessage.trim(),
                userId: userInfo.user_id,
            };

            console.log('sendMessage: ', payload);

            const socket = io(SOCKET + '/dm');
            socket.emit('message', payload);
        }
        setTypingMessage('');
    }

    // useEffect(() => {
    //   const keyDownHandler = (event: any) => {
    //     if (event.key === "Enter") {
    //       event.preventDefault();
    //       sendMessageHandler();
    //     }
    //   };

    //   document.addEventListener("keydown", keyDownHandler);

    //   return () => {
    //     document.removeEventListener("keydown", keyDownHandler);
    //   };
    // }, []);

    return (
        <>
            <HStack w={'100%'} m={5} h={'3em'} spacing={4}>
                <Input
                    bg={msgInputBg}
                    value={typingMessage}
                    onChange={(m) => setTypingMessage(m.target.value)}
                    focusBorderColor="none"
                    border={'none'}
                    placeholder="Message"
                    w={'100%'}
                />
                <IoSend color={'rgb(132,119,218)'} onClick={sendMessageHandler} size={30} />
            </HStack>
        </>
    );
};

export default MessageInput;
