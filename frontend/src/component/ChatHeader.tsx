import React, {useContext} from 'react';
import {Avatar, HStack, Text} from "@chakra-ui/react";
import {ArrowBackIcon} from "@chakra-ui/icons";
import {ChatContext} from "../hooks/ChatProvider";
// import {ChatContext} from "../hooks/MessagingProvider";

function ChatHeader() {
    const {data} = useContext<any>(ChatContext);
    const {selectedChat, setSelectedChat} = useContext<any>(ChatContext);
    const {toggleDetails} = useContext<any>(ChatContext);
    let searchIndex;

    if (selectedChat.chat === 'F') searchIndex = data.friends.findIndex((id: any) => selectedChat.id === id.id);
    else searchIndex = data.groups.findIndex((id: any) => selectedChat.id === id.id);
    return (
        <HStack
            onClick={() => toggleDetails() }
            px={5} w={'100%'} m={0} h={''} >
            <ArrowBackIcon m={0} mr={25} p={0} h={30} fontSize={25} onClick={() => setSelectedChat(null)}/>
            <Avatar
                // pr={25}
                // mx={20}
                name={selectedChat.chat === 'G' ? data.groups[searchIndex].name.toString() : data.friends[searchIndex].name.toString()}
                src={selectedChat.chat === 'G' ? data.groups[searchIndex].name.toString() : data.friends[searchIndex].avatar}
            ></Avatar>
            <Text >{selectedChat.chat === 'G' ? data.groups[searchIndex].name : data.friends[searchIndex].name}</Text>
        </HStack>
    );
}

export default ChatHeader;