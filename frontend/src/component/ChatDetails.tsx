import React, {useContext} from 'react';
import {Divider, HStack, Text, Tooltip, Avatar, Flex, VStack} from "@chakra-ui/react";
import {FaDiscord, FaFacebook, FaInstagram} from "react-icons/fa";
import {ChatContext} from "../hooks/ChatProvider";
import {CloseIcon} from "@chakra-ui/icons";
import MiniProfil from "./MiniProfil";
import {useEffect} from "react";


function ChatDetails() {
    const {data} = useContext<any>(ChatContext);
    const {selectedChat} = useContext<any>(ChatContext);
    const {toggleDetails, ChatDetails } = useContext<any>(ChatContext);
    let searchIndex;
    if (selectedChat.chat === 'F') searchIndex = data.friends.findIndex((id: any) => selectedChat.id === id.id);
    else searchIndex = data.groups.findIndex((id: any) => selectedChat.id === id.id);

    // useEffect(() => {
    //     const keyDownHandler = (event: any) => {
    //         if (event.key === 'Escape') {
    //             event.preventDefault();
    //             console.log('Chat Details : Escape')
    //             toggleDetails()
    //         }
    //     };
    //     document.addEventListener('keydown', keyDownHandler);
    //     return () => {
    //         document.removeEventListener('keydown', keyDownHandler);
    //     };
    // }, );
    // console.log('>>>>>>>>> Enter to ChatDetails <<<<<<<<<<<<<')


    return (
        <VStack h={'100%'} w={'100%'}>
            <HStack h={14} px={5} w={'100%'} m={0} spacing={8}>
                <CloseIcon m={0} p={0} h={30} fontSize={15} onClick={() => {
                    console.log('Chat Details : Icon')
                    toggleDetails()
                }}/>
                <Text fontSize={20}>Profile</Text>
            </HStack>
            <Flex
                h={'100%'}
                w={'100%'}
                flex={1}
                alignItems={'center'}
                justifyContent={'center'}
            >
                {
                    <MiniProfil
                        name={'Youssef'}
                        src={selectedChat.chat === 'G' ? data.groups[searchIndex].name.toString() : data.friends[searchIndex].avatar}
                        facebook={'face'}
                        instagram={'insta'}
                        discord={'discord'}
                    />
                }
            </Flex>
        </VStack>
    );
}

export default ChatDetails;