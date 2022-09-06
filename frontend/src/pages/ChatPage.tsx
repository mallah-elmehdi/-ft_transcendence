import { Text, Flex, Show, Hide } from '@chakra-ui/react'
import SideBar from "../component/SideBar"
import ChatPageContext from "../hooks/ChatPageContext";

export default function ChatPage() {
    const data = {
        friends: [
            { id: '1', username: 'UserName', avatar: 'https://cdn.intra.42.fr/users/ynoam.jpg', },
            { id: '2', username: 'UserName', avatar: 'https://cdn.intra.42.fr/users/ynoam.jpg', },
            { id: '3', username: 'UserName', avatar: 'https://cdn.intra.42.fr/users/ynoam.jpg', },
            { id: '4', username: 'UserName', avatar: 'https://cdn.intra.42.fr/users/ynoam.jpg', },
            { id: '5', username: 'UserName', avatar: 'https://cdn.intra.42.fr/users/ynoam.jpg', },
            { id: '6', username: 'UserName', avatar: 'https://cdn.intra.42.fr/users/ynoam.jpg', },
            { id: '7', username: 'UserName', avatar: 'https://cdn.intra.42.fr/users/ynoam.jpg', },
            { id: '8', username: 'UserName', avatar: 'https://cdn.intra.42.fr/users/ynoam.jpg', },
            { id: '9', username: 'UserName', avatar: 'https://cdn.intra.42.fr/users/ynoam.jpg', },
            { id: '10', username: 'UserName', avatar: 'https://cdn.intra.42.fr/users/ynoam.jpg', },
            { id: '11', username: 'UserName', avatar: 'https://cdn.intra.42.fr/users/ynoam.jpg', },
            { id: '12', username: 'UserName', avatar: 'https://cdn.intra.42.fr/users/ynoam.jpg', },
            { id: '13', username: 'UserName', avatar: 'https://cdn.intra.42.fr/users/ynoam.jpg', },
            { id: '14', username: 'UserName', avatar: 'https://cdn.intra.42.fr/users/ynoam.jpg', },
            { id: '15', username: 'UserName', avatar: 'https://cdn.intra.42.fr/users/ynoam.jpg', },
            { id: '16', username: 'UserName', avatar: 'https://cdn.intra.42.fr/users/ynoam.jpg', },
            { id: '17', username: 'UserName', avatar: 'https://cdn.intra.42.fr/users/ynoam.jpg', },
            { id: '18', username: 'UserName', avatar: 'https://cdn.intra.42.fr/users/ynoam.jpg', },
            { id: '19', username: 'UserName', avatar: 'https://cdn.intra.42.fr/users/ynoam.jpg', },
            { id: '20', username: 'UserName', avatar: 'https://cdn.intra.42.fr/users/ynoam.jpg', },
            { id: '21', username: 'UserName', avatar: 'https://cdn.intra.42.fr/users/ynoam.jpg', },
            { id: '22', username: 'UserName', avatar: 'https://cdn.intra.42.fr/users/ynoam.jpg', },
            { id: '23', username: 'UserName', avatar: 'https://cdn.intra.42.fr/users/ynoam.jpg', },
            { id: '24', username: 'UserName', avatar: 'https://cdn.intra.42.fr/users/ynoam.jpg', },
            { id: '25', username: 'UserName', avatar: 'https://cdn.intra.42.fr/users/ynoam.jpg', },
            { id: '26', username: 'UserName', avatar: 'https://cdn.intra.42.fr/users/ynoam.jpg', },
            { id: '27', username: 'UserName', avatar: 'https://cdn.intra.42.fr/users/ynoam.jpg', },
            { id: '28', username: 'UserName', avatar: 'https://cdn.intra.42.fr/users/ynoam.jpg', },
            { id: '29', username: 'UserName', avatar: 'https://cdn.intra.42.fr/users/ynoam.jpg', },
            { id: '30', username: 'UserName', avatar: 'https://cdn.intra.42.fr/users/ynoam.jpg', },
            { id: '31', username: 'UserName', avatar: 'https://cdn.intra.42.fr/users/ynoam.jpg', },
        ],
        groups: [
            { id: '1', groupname: 'GroupNAme' },
            { id: '2', groupname: 'GroupNAme' },
            { id: '3', groupname: 'GroupNAme' },
            { id: '4', groupname: 'GroupNAme' },
            { id: '5', groupname: 'GroupNAme' },
            { id: '5', groupname: 'GroupNAme' },
            { id: '6', groupname: 'GraaaoupNAme' },
        ],
    }
    return (
        <>
            <ChatPageContext>
                <Flex
                    w={'100%'}
                    h={'98%'}
                    mx={{ base: 0, md: 0, lg: 0 }}
                    pb={10}
                    direction={'row'}
                >
                    <SideBar />
                    <Hide below={'md'}>

                        <Flex
                            w={'75%'}
                            h={'100%'}
                            _light={{ boxShadow: 'md' }}
                            _dark={{ boxShadow: 'dark-lg' }}
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
            </ChatPageContext>
        </>
    )
}
