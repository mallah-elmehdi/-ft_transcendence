import React, {FC, useState} from "react";
import {Flex, HStack, Tab, TabList, TabPanel, TabPanels, Tabs, Text, VStack, useColorModeValue} from "@chakra-ui/react";
import SearchBar from "./SearchBar";
import {Avatar as ChakraAvatar} from "@chakra-ui/avatar";
import {AnimatePresence, motion} from "framer-motion";

interface Props {
    data: {
        friends: { id: String, username: String, avatar: String }[],
        groups: { id: String, groupname: String, }[],
    },
}


const SideBar: FC<Props> = ({data}: Props) => {
    const [isSearch, setIsSearch] = useState<boolean>(false);
    const value = useColorModeValue('gray.100', 'gray.700')
    const tabsAnimation = {
        hidden: {opacity: 0, scale: 0.9},
        visible: {y: 0, opacity: 1, scale: 1,},
        transition: {ease: 'easeOut', duration: 0.001},
        // exit: { },
    }
    return (
        <>
            {/*<AnimatePresence exitBeforeEnter >*/}
            <Flex
                w={'25%'}
                _light={{boxShadow: 'md'}}
                _dark={{boxShadow: 'dark-lg'}}
                rounded='30px'
                direction={"column"}
                alignItems={"center"}
                pt={50}
            >
                <SearchBar search={isSearch} setSearch={setIsSearch}/>
                <AnimatePresence>
                    {!isSearch ?
                        <Tabs
                            as={motion.div}
                            initial={{
                                y: '1%',
                                opacity: 0,
                                scale: 0.99,
                            }}
                            animate={{y: 0, opacity: 1, scale: 1,}}
                            // @ts-ignore no problem in operation, although type error appears.
                            // transition={{
                            //     duration: 0.1,
                            //     ease: "easeOut",
                            // }}
                            // transition= '0.001  ease-out 0.001'
                            // variants={tabsAnimation}
                            // initial={"hidden"}
                            // animate={"visible"}
                            // transition={"transition"}
                            exit={{
                                transition: {duration: 0.1},
                                opacity: 0,
                                y: '1%'
                            } }
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
                                                    <HStack as={'button'} p={5} alignItems={'center'}
                                                            _hover={{bg: '#EAEAEA'}} rounded={5} h={'4.5em'} w={'100%'}
                                                            key={index.toString()}>
                                                        <Text> {group.groupname} </Text>
                                                    </HStack>
                                                ))
                                                :
                                                <Text>No Chat</Text>
                                        }
                                    </VStack>
                                </TabPanel>
                            </TabPanels>
                        </Tabs>
                        : undefined
                    }
                </AnimatePresence>
            </Flex>
            {/*</AnimatePresence>*/}
        </>
    )
}

export default SideBar;