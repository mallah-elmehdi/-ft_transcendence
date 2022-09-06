import React, {useContext} from 'react';
import { motion } from "framer-motion";
import {
    HStack,
    Tabs as ChakraTabs,
    Tab,
    TabList,
    TabPanel,
    TabPanels,
    Text,
    useColorModeValue,
    VStack,
    Flex,
} from "@chakra-ui/react";
import { Avatar as ChakraAvatar } from "@chakra-ui/avatar";
import {SearchContext} from "../hooks/ChatPageContext"

type Props = {
    data: {
        friends: { id: String, username: String, avatar: String }[],
        groups: { id: String, groupname: String, }[],
    },
}

function Tabs({ data }: Props) {
    const value = useColorModeValue('blackAlpha.200', 'whiteAlpha.200')
    const { setSelectedChat } = useContext<any>(SearchContext)
    return (
        <ChakraTabs
            // isLazy={true}
            onChange={(index) => {
                console.log(index)
            }}
            as={motion.div}
            initial={{ opacity: 0, scale: 0.99, }}
            animate={{ y: 0, opacity: 1, scale: 1, }}
            exit={{ transition: { duration: 0.1 }, opacity: 0, scale: 0.99, }}
            pt={3}
            w={'90%'}
            h={'99%'}
            m={0}
            overflow={'hidden'}
            align="center" _selected={{ color: 'pink' }}>
            <TabList>
                <Tab _selected={{ color: 'red' }}>
                    <Text fontSize={20}> Friends </Text>
                </Tab>
                <Tab
                    _selected={{ color: 'red' }}>
                    <Text fontSize={20}> Groups </Text>
                </Tab>
            </TabList>
            <TabPanels
                h={'100%'}
                p={2}
            >
                <TabPanel
                    overflow={'auto'}
                    h={'100%'}
                    w={'100%'}
                    m={0} p={0}
                >
                    <VStack
                        pb={10}
                        spacing={0} w={'100%'}>

                        {
                            data.friends.length ?
                                data.friends.map((friend, index) => (
                                    <HStack
                                        as={'button'}
                                        p={5}
                                        alignItems={'center'}
                                        _hover={{ bg: value }}
                                        rounded={5}
                                        h={'4.5em'}
                                        w={'100%'}
                                        key={index.toString()}
                                        onClick={()=> {
                                            setSelectedChat(friend.id)
                                        }}
                                    >
                                        <ChakraAvatar
                                            name={friend.username.toString()}
                                            src={friend.avatar.toString()}
                                        ></ChakraAvatar>
                                        <Text>
                                            {friend.username}
                                        </Text>
                                    </HStack>
                                ))
                                :
                                <Flex h={'100%'} justifyContent={'center'} alignItems={'center'} >
                                    <Text >No Chat</Text>
                                </Flex>
                        }
                    </VStack>
                </TabPanel>
                <TabPanel
                    h={'100%'}
                    w={'100%'}
                    m={0} p={0}
                    overflow={'auto'}
                >
                    <VStack
                        pb={10}
                        spacing={0} w={'100%'}>
                        {
                            data.groups.length ?
                                data.groups.map((group, index) => (
                                    <HStack
                                        onClick={()=> {
                                            setSelectedChat(group.id)
                                        }}
                                     as={'button'} p={5} alignItems={'center'} _hover={{ bg: value }} rounded={5} h={'4.5em'} w={'100%'} key={index.toString()} >
                                        <Text>
                                            {group.groupname}
                                        </Text>
                                    </HStack>
                                ))
                                :
                                <Flex h={'100%'} justifyContent={'center'} alignItems={'center'} >
                                    <Text>No Chat</Text>
                                </Flex>
                        }
                    </VStack>
                </TabPanel>
            </TabPanels>
        </ChakraTabs>
    );
}

export default Tabs;