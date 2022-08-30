import {
    Badge,
    Button,
    Divider,
    Text,
    Box,
    Flex, HStack, Spacer, Tooltip, VStack, Wrap, WrapItem,
    Heading,
    useColorMode,
    Image,
} from "@chakra-ui/react";
import { FaDiscord, FaFacebook, FaInstagram, FaShieldAlt, FaUserFriends } from "react-icons/fa";
import { Avatar as ChakraAvatar } from "@chakra-ui/avatar";
import { Tabs, TabList, TabPanels, Tab, TabPanel } from '@chakra-ui/react'
import React, { FC } from "react"

interface IProps {
    data: {
        friends: { id: String, username: String, }[],
        groups: { id: String, groupname: String, }[],
    },
}

const SideBar: FC<IProps> = ({ data }: IProps) => {
    return (
        <>
            <Flex
                // w={['100%', '100%', '100%', '40%', '35%', '20%']}
                w={'25%'}
                _light={{ boxShadow: 'md' }}
                _dark={{ boxShadow: 'dark-lg' }}
                rounded='30px'
                direction={"column"}
                alignItems={"center"}
                minHeight={[700, 700, 700, 1000, 700]}
                pt={50}
            >
                <Tabs
                m={0}
                
                    align="center" _selected={{ color: 'pink' }}>
                    <TabList >
                        <Tab _selected={{ color: 'red' }}>
                            <Text fontSize={20}> Friends </Text>
                        </Tab>
                        <Tab _selected={{ color: 'red' }}>
                            <Text fontSize={20}> Groups </Text>
                        </Tab>
                    </TabList>
                    <TabPanels
                        overflow={'auto'}
                        maxHeight={800}
                        p={0}
                    >
                        <TabPanel
                                m={0}
                                p={0}
                             >
                            <VStack
                                spacing={0}
                                w={'100%'}
                            >
                                {
                                    data.friends.length ?
                                        data.friends.map((friend, index) => (
                                            <Button
                                                bg={'none'}
                                                w={'100%'}
                                                key={index.toString()}>
                                                <Text >
                                                    {friend.username}
                                                </Text>
                                            </Button>
                                        ))
                                        :
                                        <Text>No Chat</Text>
                                }
                            </VStack>
                        </TabPanel>
                        <TabPanel
                                m={0}
                                p={0}
                             >
                            <VStack
                                spacing={0}
                                w={'100%'}
                            >
                                {
                                    data.groups.length ?
                                        data.groups.map((group, index) => (
                                            <Button
                                                bg={'none'}
                                                w={'100%'}
                                                key={index.toString()}>
                                                {group.groupname}
                                            </Button>
                                        ))
                                        :
                                        <Text>No Chat</Text>
                                }
                            </VStack>
                        </TabPanel>
                    </TabPanels>
                </Tabs>
            </Flex>
        </>
    )
}

export default function ChatPage() {
    const data = {
        friends: [
            { id: '1234567890', username: 'UserName' },
            { id: '1234567890', username: 'UserName' },
            { id: '1234567890', username: 'UserName' },
            { id: '1234567890', username: 'UserName' },
            { id: '1234567890', username: 'UserName' },
            { id: '1234567890', username: 'UserName' },
            { id: '1234567890', username: 'UserName' },
            { id: '1234567890', username: 'UserName' },
            { id: '1234567890', username: 'UserName' },
            { id: '1234567890', username: 'UserName' },
            { id: '1234567890', username: 'UserName' },
            { id: '1234567890', username: 'UserName' },
            { id: '1234567890', username: 'UserName' },
            { id: '1234567890', username: 'UserName' },
            { id: '1234567890', username: 'UserName' },
            { id: '1234567890', username: 'UserName' },
            { id: '1234567890', username: 'UserName' },
            { id: '1234567890', username: 'UserName' },
            { id: '1234567890', username: 'UserName' },
            { id: '1234567890', username: 'UserName' },
        ],
        groups: [
            { id: '1234567890', groupname: 'GroupNAme' },
            { id: '1234567890', groupname: 'GroupNAme' },
            { id: '1234567890', groupname: 'GroupNAme' },
            { id: '1234567890', groupname: 'GroupNAme' },
            { id: '1234567890', groupname: 'GroupNAme' },
            { id: '1234567890', groupname: 'GroupNAme' },
            { id: '1234567890', groupname: 'GroupNAme' },
            { id: '1234567890', groupname: 'GroupNAme' },
        ],
    }
    return (
        <>
            <Flex
                w={'100%'}
                h={'100%'}
                mx={{ base: 0, md: 0, lg: 0 }}
                pb={10}
                // direction={{ base: 'column', md: 'column', lg: 'row' }}
                direction={'row'}
                minHeight={1000}
                minWidth={1500}
            >
                <SideBar data={data} />
                <Flex
                    // w={['100%', '100%', '100%', '60%', '65%', '80%']}
                    w={'75%'}
                    h={'100%'}
                    _light={{ boxShadow: 'md' }}
                    _dark={{ boxShadow: 'dark-lg' }}
                    rounded='30px'
                    justifyContent={"center"}
                    alignItems={"center"}
                    direction={'column'}
                    minHeight={[1000, 1000, 1000, 1000, 700]}
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
            </Flex>
        </>
    )
}
