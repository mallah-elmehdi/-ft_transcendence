import React from 'react';
import {motion} from "framer-motion";
import {
    HStack,
    Tabs as ChakraTabs,
    Tab,
    TabList,
    TabPanel,
    TabPanels,
    Text,
    useColorModeValue,
    VStack
} from "@chakra-ui/react";
import {Avatar as ChakraAvatar} from "@chakra-ui/avatar";

type Props = {
    data: {
        friends: { id: String, username: String, avatar: String }[],
        groups: { id: String, groupname: String, }[],
    },
}

function Tabs({data}: Props) {
    const value = useColorModeValue('blackAlpha.200', 'whiteAlpha.200')
    return (
        <ChakraTabs
            onChange={(index)=> {
                console.log(index)
            }}
            as={motion.div}
            initial={{
                y: '1%',
                opacity: 0,
                scale: 0.99,
            }}
            animate={{y: 0, opacity: 1, scale: 1,}}
            exit={{
                transition: {duration: 0.1},
                opacity: 0,
                y: '1%'
            }}
            pt={2}
            w={'90%'}
            h={'100%'}
            m={0}
            overflow={'hidden'}
            align="center" _selected={{color: 'pink'}}>
            <TabList>
                <Tab _selected={{color: 'red'}}>
                    <Text fontSize={20}> Friends </Text>
                </Tab>
                <Tab _selected={{color: 'red'}}>
                    <Text fontSize={20}> Groups </Text>
                </Tab>
            </TabList>
            <TabPanels
                overflow={'auto'}
                h={'100%'}
                p={2}
            >
                <TabPanel m={0} p={0}>
                    <VStack spacing={0} w={'100%'}>
                        {
                            data.friends.length ?
                                data.friends.map((friend, index) => (
                                    <HStack
                                        as={'button'}
                                        p={5}
                                        alignItems={'center'}
                                        _hover={{bg: value}}
                                        rounded={5}
                                        h={'4.5em'}
                                        w={'100%'}
                                        key={index.toString()}
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
                                <Text>No Chat</Text>
                        }
                    </VStack>
                </TabPanel>
                <TabPanel m={0} p={0}>
                    <VStack spacing={0} w={'100%'}>
                        {
                            data.groups.length ?
                                data.groups.map((group, index) => (
                                    <HStack
                                        as={'button'}
                                        p={5}
                                        alignItems={'center'}
                                        _hover={{bg: value}}
                                        rounded={5}
                                        h={'4.5em'}
                                        w={'100%'}
                                        key={index.toString()}
                                    >
                                        <Text>
                                            {group.groupname}
                                        </Text>
                                    </HStack>
                                ))
                                :
                                <Text>No Chat</Text>
                        }
                    </VStack>
                </TabPanel>
            </TabPanels>
        </ChakraTabs>
    );
}

export default Tabs;