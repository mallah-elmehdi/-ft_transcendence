import {
    Badge,
    Button,
    Divider,
    Text,
    Box,
    Flex, HStack, Spacer, Tooltip, VStack, Wrap, WrapItem,
    Heading,
    useColorMode,
    Image, Stack, InputGroup, InputLeftElement,
    Input,
    InputRightElement,
    useDisclosure,
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    Tabs,
    TabList,
    TabPanels,
    Tab,
    TabPanel,
} from '@chakra-ui/react'
import { FaDiscord, FaFacebook, FaInstagram, FaShieldAlt, FaUserFriends } from "react-icons/fa";
import { Avatar as ChakraAvatar } from "@chakra-ui/avatar";
import {Search2Icon, ArrowBackIcon} from '@chakra-ui/icons'
import React, {FC, useState} from "react"

interface searchBarProps {
    setSearch: (value: boolean) =>void;
    search: boolean;
}
const SearchBar: FC<searchBarProps> = ({search, setSearch}: searchBarProps) => {
    return (
        <>
            <Flex
                w={'80%'}
                h={'3.5em'}
                rounded={50}
                // mb={4}
                justifyContent={'center'}
                alignItems={'center'}
            >
                <HStack  m={0} p={0} w={'100%'} >
                    {<ArrowBackIcon m={0} p={0} h={30} fontSize={25} onClick={()=>setSearch(false)} /> }
                    <InputGroup
                        boxSizing={'border-box'}
                    >
                        <InputLeftElement pointerEvents='none' children={<Search2Icon color={!search ? 'gray.500': 'red'}/> } />
                        <Input
                            _focus={{}}
                            _active={{}}
                            onClick={()=> setSearch(true)}
                            border={'1px'}
                            onChange={
                            (event)=> console.log(event.target.value)
                        }
                            w={'100%'}
                            m={0}
                            rounded={30}
                            size='md'
                            focusBorderColor={'red'}
                            type={'search'}
                            placeholder={'Search'} />
                    </InputGroup>
                </HStack>
            </Flex>
        </>
    )
}
interface IProps {
    data: {
        friends: { id: String, username: String, avatar: String }[],
        groups: { id: String, groupname: String, }[],
    },
}
const SideBar: FC<IProps> = ({ data }: IProps) => {
    const [search , setSearch] = useState<boolean>(false);
    return (
        <>
            <Flex
                w={'25%'}
                _light={{ boxShadow: 'md' }}
                _dark={{ boxShadow: 'dark-lg' }}
                rounded='30px'
                direction={"column"}
                alignItems={"center"}
                pt={50}
            >
                <SearchBar search={search} setSearch={setSearch}  />
                { !search ?
                <Tabs
                    w={'80%'}
                    h={'100%'}
                    m={0}
                    overflow={'hidden'}

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
                        h={'100%'}
                        p={2}
                    >
                        <TabPanel m={0} p={0} >
                            <VStack spacing={0} w={'100%'} >
                                {
                                    data.friends.length ?
                                        data.friends.map((friend, index) => (
                                            <HStack as={'button'} p={5} alignItems={'center'} _hover={{bg:'gray.700'}} rounded={5} h={'4.5em'} w={'100%'} key={index.toString()}>
                                                <ChakraAvatar name={friend.username.toString()} src={friend.avatar.toString()} ></ChakraAvatar>
                                                <Text >
                                                    {friend.username}
                                                </Text>
                                            </HStack>
                                        ))
                                        :
                                        <Text>No Chat</Text>
                                }
                            </VStack>
                        </TabPanel>
                        <TabPanel m={0} p={0} >
                            <VStack spacing={0} w={'100%'} >
                                {
                                    data.groups.length ?
                                        data.groups.map((group, index) => (
                                            <HStack as={'button'} p={5} alignItems={'center'} _hover={{bg:'gray.700'}} rounded={5} h={'4.5em'} w={'100%'} key={index.toString()}>
                                                <Text > {group.groupname} </Text>
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
            </Flex>
        </>
    )
}

export default function ChatPage() {
    const data = {
        friends: [
            { id: '1234567890', username: 'UserName', avatar:'https://cdn.intra.42.fr/users/ynoam.jpg', },
            { id: '1234567890', username: 'UserName', avatar:'https://cdn.intra.42.fr/users/ynoam.jpg', },
            { id: '1234567890', username: 'UserName', avatar:'https://cdn.intra.42.fr/users/ynoam.jpg', },
            { id: '1234567890', username: 'UserName', avatar:'https://cdn.intra.42.fr/users/ynoam.jpg', },
            { id: '1234567890', username: 'UserName', avatar:'https://cdn.intra.42.fr/users/ynoam.jpg', },
            { id: '1234567890', username: 'UserName', avatar:'https://cdn.intra.42.fr/users/ynoam.jpg', },
            { id: '1234567890', username: 'UserName', avatar:'https://cdn.intra.42.fr/users/ynoam.jpg', },
            { id: '1234567890', username: 'UserName', avatar:'https://cdn.intra.42.fr/users/ynoam.jpg', },
            { id: '1234567890', username: 'UserName', avatar:'https://cdn.intra.42.fr/users/ynoam.jpg', },
            { id: '1234567890', username: 'UserName', avatar:'https://cdn.intra.42.fr/users/ynoam.jpg', },
            { id: '1234567890', username: 'UserName', avatar:'https://cdn.intra.42.fr/users/ynoam.jpg', },
            { id: '1234567890', username: 'UserName', avatar:'https://cdn.intra.42.fr/users/ynoam.jpg', },
            { id: '1234567890', username: 'UserName', avatar:'https://cdn.intra.42.fr/users/ynoam.jpg', },
            { id: '1234567890', username: 'UserName', avatar:'https://cdn.intra.42.fr/users/ynoam.jpg', },
            { id: '1234567890', username: 'UserName', avatar:'https://cdn.intra.42.fr/users/ynoam.jpg', },
            { id: '1234567890', username: 'UserName', avatar:'https://cdn.intra.42.fr/users/ynoam.jpg', },
            { id: '1234567890', username: 'UserName', avatar:'https://cdn.intra.42.fr/users/ynoam.jpg', },
            { id: '1234567890', username: 'UserName', avatar:'https://cdn.intra.42.fr/users/ynoam.jpg', },
            { id: '1234567890', username: 'UserName', avatar:'https://cdn.intra.42.fr/users/ynoam.jpg', },
            { id: '1234567890', username: 'UserName', avatar:'https://cdn.intra.42.fr/users/ynoam.jpg', },
            { id: '1234567890', username: 'UserName', avatar:'https://cdn.intra.42.fr/users/ynoam.jpg', },
            { id: '1234567890', username: 'UserName', avatar:'https://cdn.intra.42.fr/users/ynoam.jpg', },
            { id: '1234567890', username: 'UserName', avatar:'https://cdn.intra.42.fr/users/ynoam.jpg', },
            { id: '1234567890', username: 'UserName', avatar:'https://cdn.intra.42.fr/users/ynoam.jpg', },
            { id: '1234567890', username: 'UserName', avatar:'https://cdn.intra.42.fr/users/ynoam.jpg', },
            { id: '1234567890', username: 'UserName', avatar:'https://cdn.intra.42.fr/users/ynoam.jpg', },
            { id: '1234567890', username: 'UserName', avatar:'https://cdn.intra.42.fr/users/ynoam.jpg', },
            { id: '1234567890', username: 'UserName', avatar:'https://cdn.intra.42.fr/users/ynoam.jpg', },
            { id: '1234567890', username: 'UserName', avatar:'https://cdn.intra.42.fr/users/ynoam.jpg', },
            { id: '1234567890', username: 'UserName', avatar:'https://cdn.intra.42.fr/users/ynoam.jpg', },
            { id: '1234567890', username: 'UserName', avatar:'https://cdn.intra.42.fr/users/ynoam.jpg', },
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
                h={'98%'}
                mx={{ base: 0, md: 0, lg: 0 }}
                pb={10}
                // direction={{ base: 'column', md: 'column', lg: 'row' }}
                direction={'row'}
                minHeight={1000}
                minWidth={1500}
                // bg={'red'}
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
