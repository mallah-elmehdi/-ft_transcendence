import { Text, Flex, } from '@chakra-ui/react'
import SideBar from "../component/SideBar"

export default function ChatPage() {
    const data = {
        friends: [
            {id: '1234567890', username: 'UserName', avatar: 'https://cdn.intra.42.fr/users/ynoam.jpg',},
            {id: '1234567890', username: 'UserName', avatar: 'https://cdn.intra.42.fr/users/ynoam.jpg',},
            {id: '1234567890', username: 'UserName', avatar: 'https://cdn.intra.42.fr/users/ynoam.jpg',},
            {id: '1234567890', username: 'UserName', avatar: 'https://cdn.intra.42.fr/users/ynoam.jpg',},
            {id: '1234567890', username: 'UserName', avatar: 'https://cdn.intra.42.fr/users/ynoam.jpg',},
            {id: '1234567890', username: 'UserName', avatar: 'https://cdn.intra.42.fr/users/ynoam.jpg',},
            {id: '1234567890', username: 'UserName', avatar: 'https://cdn.intra.42.fr/users/ynoam.jpg',},
            {id: '1234567890', username: 'UserName', avatar: 'https://cdn.intra.42.fr/users/ynoam.jpg',},
            {id: '1234567890', username: 'UserName', avatar: 'https://cdn.intra.42.fr/users/ynoam.jpg',},
            {id: '1234567890', username: 'UserName', avatar: 'https://cdn.intra.42.fr/users/ynoam.jpg',},
            {id: '1234567890', username: 'UserName', avatar: 'https://cdn.intra.42.fr/users/ynoam.jpg',},
            {id: '1234567890', username: 'UserName', avatar: 'https://cdn.intra.42.fr/users/ynoam.jpg',},
            {id: '1234567890', username: 'UserName', avatar: 'https://cdn.intra.42.fr/users/ynoam.jpg',},
            {id: '1234567890', username: 'UserName', avatar: 'https://cdn.intra.42.fr/users/ynoam.jpg',},
            {id: '1234567890', username: 'UserName', avatar: 'https://cdn.intra.42.fr/users/ynoam.jpg',},
            {id: '1234567890', username: 'UserName', avatar: 'https://cdn.intra.42.fr/users/ynoam.jpg',},
            {id: '1234567890', username: 'UserName', avatar: 'https://cdn.intra.42.fr/users/ynoam.jpg',},
            {id: '1234567890', username: 'UserName', avatar: 'https://cdn.intra.42.fr/users/ynoam.jpg',},
            {id: '1234567890', username: 'UserName', avatar: 'https://cdn.intra.42.fr/users/ynoam.jpg',},
            {id: '1234567890', username: 'UserName', avatar: 'https://cdn.intra.42.fr/users/ynoam.jpg',},
            {id: '1234567890', username: 'UserName', avatar: 'https://cdn.intra.42.fr/users/ynoam.jpg',},
            {id: '1234567890', username: 'UserName', avatar: 'https://cdn.intra.42.fr/users/ynoam.jpg',},
            {id: '1234567890', username: 'UserName', avatar: 'https://cdn.intra.42.fr/users/ynoam.jpg',},
            {id: '1234567890', username: 'UserName', avatar: 'https://cdn.intra.42.fr/users/ynoam.jpg',},
            {id: '1234567890', username: 'UserName', avatar: 'https://cdn.intra.42.fr/users/ynoam.jpg',},
            {id: '1234567890', username: 'UserName', avatar: 'https://cdn.intra.42.fr/users/ynoam.jpg',},
            {id: '1234567890', username: 'UserName', avatar: 'https://cdn.intra.42.fr/users/ynoam.jpg',},
            {id: '1234567890', username: 'UserName', avatar: 'https://cdn.intra.42.fr/users/ynoam.jpg',},
            {id: '1234567890', username: 'UserName', avatar: 'https://cdn.intra.42.fr/users/ynoam.jpg',},
            {id: '1234567890', username: 'UserName', avatar: 'https://cdn.intra.42.fr/users/ynoam.jpg',},
            {id: '1234567890', username: 'UserName', avatar: 'https://cdn.intra.42.fr/users/ynoam.jpg',},
        ],
        groups: [
            {id: '1234567890', groupname: 'GroupNAme'},
            {id: '1234567890', groupname: 'GroupNAme'},
            {id: '1234567890', groupname: 'GroupNAme'},
            {id: '1234567890', groupname: 'GroupNAme'},
            {id: '1234567890', groupname: 'GroupNAme'},
            {id: '1234567890', groupname: 'GroupNAme'},
            {id: '1234567890', groupname: 'GroupNAme'},
            {id: '1234567890', groupname: 'GroupNAme'},
        ],
    }
    return (
        <>
            <Flex
                w={'100%'}
                h={'98%'}
                mx={{base: 0, md: 0, lg: 0}}
                pb={10}
                // direction={{ base: 'column', md: 'column', lg: 'row' }}
                direction={'row'}
                minHeight={1000}
                minWidth={1500}
                // bg={'red'}
            >
                <SideBar data={data}/>
                <Flex
                    // w={['100%', '100%', '100%', '60%', '65%', '80%']}
                    w={'75%'}
                    h={'100%'}
                    _light={{boxShadow: 'md'}}
                    _dark={{boxShadow: 'dark-lg'}}
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
