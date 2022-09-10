import React from "react"
import {Text, Flex, Show, Hide} from '@chakra-ui/react'
import SideBar from "../component/SideBar"
import ChatProvider from "../hooks/ChatProvider";


export default function ChatPage() {
    return (
        <ChatProvider>
            <Flex
                w={['100%', '100%', '100%', '40%', '35%', '20%']}
                h={'98%'}
                mx={{base: 0, md: 0, lg: 0}}
                pb={10}
                direction={'row'}
            >
                <SideBar/>
                <Hide below={'md'}>
                    <Flex
                        w={'75%'}
                        h={'100%'}
                        _light={{boxShadow: 'md'}}
                        _dark={{boxShadow: 'dark-lg'}}
                        rounded='30px'
                        justifyContent={"center"}
                        alignItems={"center"}
                        direction={'column'}
                    >
                        <Flex
                            h={'100%'}
                            w={'100%'}
                            pt={10}
                            direction={['column', 'column', 'column', 'column', 'row']}
                            alignItems={"center"}
                            justifyContent={"center"}
                        >
                            <Text>No Chat Selected </Text>
                        </Flex>
                    </Flex>
                </Hide>
            </Flex>
        </ChatProvider>
    )
}
