import { Flex, Box, Avatar, Text } from "@chakra-ui/react";
import SearchBar from "./SearchBar";
import { AnimatePresence } from "framer-motion";
import { useEffect, useContext } from "react";
import Tabs from "./Tabs"
import { SearchContext } from "../hooks/ChatPageContext";
import { ArrowBackIcon, Search2Icon } from "@chakra-ui/icons";
import { HStack, VStack, Input, InputGroup, InputLeftElement, } from "@chakra-ui/react";
import { IoSend } from "react-icons/io5"


const Messaging = () => {
    const { setSelectedChat } = useContext<any>(SearchContext)
    const { selectedChat } = useContext<any>(SearchContext)
    const { data } = useContext<any>(SearchContext)

    let searchIndex = data.friends.findIndex((id: any) => selectedChat === id.id);
    if (!searchIndex)
        searchIndex = data.groups.findIndex((id: any) => selectedChat === id.id);
    console.log(searchIndex)

    return (
        <VStack
            h={'100%'}
            w={'100%'}
        >
            <HStack
                px={5}
                w={'100%'}
                m={0} h={''}
                spacing={4}
            >
                <ArrowBackIcon m={0} p={0} h={30} fontSize={25} onClick={() => setSelectedChat(null)} />
                <Avatar
                    name={data.friends[searchIndex].username.toString()}
                    src={data.friends[searchIndex].avatar.toString()}
                ></Avatar>
                <Text>
                    {data.friends[searchIndex].username}
                </Text>
            </HStack>
            <VStack
                alignItems={'center'}
                h={'100%'}
                w={'100%'}
                flex={1}
                bg={'#666666'}
            >
                <Flex
                    alignItems={'center'}
                    justifyContent={'center'}
                    h={'100%'}
                    w={'100%'}
                    flex={1}
                >
                    lkkjlkjlkj

                </Flex>
                <HStack
                    w={'100%'}
                    m={0} h={'3em'}
                    spacing={4}
                >
                    <Input
                    rounded={'5 5 0 5'}
                     />
                    <IoSend
                        size={30}
                    />
                </HStack>
            </VStack>
        </VStack>
    )
}

const SideBar = () => {
    const { isSearch, toggleSearch } = useContext<any>(SearchContext);
    const { selectedChat } = useContext<any>(SearchContext)
    const { data } = useContext<any>(SearchContext)

    useEffect(() => {
        const keyDownHandler = (event: any) => {
            if (event.key === 'Escape') {
                event.preventDefault();
                toggleSearch();
                // setIsSearch(true);
            }
        };
        document.addEventListener('keydown', keyDownHandler);
        return () => {
            document.removeEventListener('keydown', keyDownHandler);
        };
    });

    return (
        <>
            <Flex
                w={['100%', '100%', '25%', '25%', '25%']}
                _light={{ boxShadow: 'md' }}
                _dark={{ boxShadow: 'dark-lg' }}
                rounded='30px'
                direction={"column"}
                alignItems={"center"}
                p={5}
            >
                {
                    !selectedChat ?
                        <>
                            <SearchBar />
                            <AnimatePresence>
                                {!isSearch ? <Tabs data={data} /> : undefined}
                            </AnimatePresence>
                        </>
                        :
                        <Messaging />
                }
            </Flex>
        </>
    )
}

export default SideBar;