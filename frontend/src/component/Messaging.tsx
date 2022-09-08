import React, {useContext, useEffect, useRef} from "react";
import {SearchContext} from "../hooks/ChatPageContext";
import {Avatar, HStack, Text, useColorModeValue, VStack} from "@chakra-ui/react";
import {ArrowBackIcon} from "@chakra-ui/icons";
import Message from "./Message";
import MessageInput from "./MessageInput";

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
    // console.logblack(searchIndex);
    const AlwaysScrollToBottom = () => {
        const elementRef = useRef();
        // @ts-ignore
        useEffect(() => elementRef.current.scrollIntoView());
        // @ts-ignore
        return <div ref={elementRef} />;
    };


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

                bgGradient={[
                    'linear(to-t, purple.3000, black)',
                    'linear(to-b, pink.900, red)',
                ]}
                alignItems={'center'} h={'100%'} w={'100%'} flex={1}  p={3} pb={1.5}>
                <VStack
                    maxW={'100%'}
                    flex={1}
                    h={'100%'} w={'100%'}
                    overflowY={'auto'}

                >
                    <Message isSender={false} content={'testesdfsdfsdfsdfsdfsdfsdfffffffffffffffffffffffffffffffffffffffffffffffffsdfsdfssdfsdfsdfsddfsdfsdfsdfsdfsdfsdfsdfsdfsddftstmlkjlkj'}/>
                    <Message isSender={false} content={'testesdfsdfsdfsdfsdfsdfsdfffffffffffffffffffffffffffffffffffffffffffffffffsdfsdfssdfsdfsdfsddfsdfsdfsdfsdfsdfsdfsdfsdfsddftstmlkjlkj'}/>
                    <Message isSender={false} content={'testesdfsdfsdfsdfsdfsdfsdfffffffffffffffffffffffffffffffffffffffffffffffffsdfsdfssdfsdfsdfsddfsdfsdfsdfsdfsdfsdfsdfsdfsddftstmlkjlkj'}/>
                    <Message isSender={false} content={'testesdfsdfsdfsdfsdfsdfsdfffffffffffffffffffffffffffffffffffffffffffffffffsdfsdfssdfsdfsdfsddfsdfsdfsdfsdfsdfsdfsdfsdfsddftstmlkjlkj'}/>
                    <Message isSender={false} content={'testesdfsdfsdfsdfsdfsdfsdfffffffffffffffffffffffffffffffffffffffffffffffffsdfsdfssdfsdfsdfsddfsdfsdfsdfsdfsdfsdfsdfsdfsddftstmlkjlkj'}/>
                    <Message isSender={true} content={'testesdfsdfsdfsdfsdfsdfsdfffffffffffffffffffffffffffffffffffffffffffffffffsdfsdfssdfsdfsdfsddfsdfsdfsdfsdfsdfsdfsdfsdfsddftstmlkjlkj'}/>
                    <Message isSender={true} content={'testetstmlkjlkj'}/>
                    <Message isSender={true} content={'testesdfsdfsdfsdfsdfsdfsdfffffffffffffffffffffffffffffffffffffffffffffffffsdfsdfssdfsdfsdfsddfsdfsdfsdfsdfsdfsdfsdfsdfsddftstmlkjlkj'}/>
                    <Message isSender={true} content={'testetstmlkjlkj'}/>
                    <Message isSender={true} content={'testesdfsdfsdfsdfsdfsdfsdfffffffffffffffffffffffffffffffffffffffffffffffffsdfsdfssdfsdfsdfsddfsdfsdfsdfsdfsdfsdfsdfsdfsddftstmlkjlkj'}/>
                    <Message isSender={true} content={'testesdfsdfsdfsdfsdfsdfsdfffffffffffffffffffffffffffffffffffffffffffffffffsdfsdfssdfsdfsdfsddfsdfsdfsdfsdfsdfsdfsdfsdfsddftstmlkjlkj'}/>
                    <Message isSender={true} content={'testetstmlkjlkj'}/>
                    <AlwaysScrollToBottom />
                </VStack>
                <MessageInput/>
            </VStack>
        </VStack>
    );
};

export default Messaging;