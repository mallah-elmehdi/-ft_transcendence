import React, {useContext} from 'react';
import {Avatar, HStack, Spacer, Text} from "@chakra-ui/react";
import {ArrowBackIcon} from "@chakra-ui/icons";
import {ChatContext} from "../hooks/ChatProvider";
import {BsThreeDotsVertical} from  "react-icons/bs"

// import {ChatContext} from "../hooks/MessagingProvider";

function ChatHeader() {
    const {data} = useContext<any>(ChatContext);
    const {selectedChat, setSelectedChat} = useContext<any>(ChatContext);
    const {setChatDetails} = useContext<any>(ChatContext);
    let searchIndex;

    if (selectedChat.chat === 'F') searchIndex = data.friends.findIndex((id: any) => selectedChat.id === id.id);
    else searchIndex = data.groups.findIndex((id: any) => selectedChat.id === id.id);
    return (
        <HStack w={'100%'} mr={5} >
            <HStack
                onClick={() => setChatDetails(true)}
                as={'button'}
                px={5} w={'100%'} m={0} h={''}>
                <ArrowBackIcon m={0} mr={25} p={0} h={30} fontSize={25} onClick={() => setSelectedChat(null)}/>
                <Avatar
                    // pr={25}
                    // mx={20}
                    name={selectedChat.chat === 'G' ? data.groups[searchIndex].name.toString() : data.friends[searchIndex].name.toString()}
                    src={selectedChat.chat === 'G' ? data.groups[searchIndex].name.toString() : data.friends[searchIndex].avatar}
                ></Avatar>
                <Text>{selectedChat.chat === 'G' ? data.groups[searchIndex].name : data.friends[searchIndex].name}</Text>
            </HStack>
            <Spacer/>
            <BsThreeDotsVertical onClick={()=>{
               console.log('Clicked three dot')
            }}  size={22}/>
        </HStack>
    );
}

export default ChatHeader;