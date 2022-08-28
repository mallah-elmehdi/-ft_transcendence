import {
    Box,
    Button,
    Divider,
    Flex,
    HStack,
    Badge,
    Image,
    Spacer,
    Text,
    useColorMode, Stack, SimpleGrid, Center, Show,
    Hide, VStack,
    useDisclosure, Tooltip,
    Avatar

} from "@chakra-ui/react";
import { Wrap, WrapItem } from '@chakra-ui/react'
import {FaFacebook, FaInstagram, FaDiscord, FaShieldAlt, FaPen, FaPlus } from "react-icons/fa";

// component
import MyAvatar  from "../component/MyAvatar.tsx"


export  default function ProfilePage() {
    const data = {
        profile : {
            id: '1234567890',
            avatar:'https://cdn.intra.42.fr/users/ynoam.jpg',
            username: 'ynoam',
            facebook: 'ynoam',
            discord: '831112187321253928',
            instagram: 'ynoam__',
            two_factor_auth: false,
            achievement: {
                beginner: true,
                intermediate: true,
                pro: true,
            }
        },
        status: {
            total_games: 100,
            wins: 70,
            losses: 25,
            equals:5
        },
        history: {
            matches:[
                {
                    player:  'You',
                    player_avatar :'https://cdn.intra.42.fr/users/ynoam.jpg',
                    player_pointes: 1,
                    opponent:  'aymaatou',
                    opponent_avatar:'https://cdn.intra.42.fr/users/aymaatou.jpg',
                    opponent_pointes: 3,
                },
                {
                    player:  'You',
                    player_avatar :'https://cdn.intra.42.fr/users/ynoam.jpg',
                    player_pointes: 1,
                    opponent:  'aymaatou',
                    opponent_avatar:'https://cdn.intra.42.fr/users/aymaatou.jpg',
                    opponent_pointes: 3,
                },
                {
                    player:  'You',
                    player_avatar :'https://cdn.intra.42.fr/users/ynoam.jpg',
                    player_pointes: 1,
                    opponent:  'aymaatou',
                    opponent_avatar:'https://cdn.intra.42.fr/users/aymaatou.jpg',
                    opponent_pointes: 3,
                },
                {
                    player:  'You',
                    player_avatar :'https://cdn.intra.42.fr/users/ynoam.jpg',
                    player_pointes: 1,
                    opponent:  'aymaatou',
                    opponent_avatar:'https://cdn.intra.42.fr/users/aymaatou.jpg',
                    opponent_pointes: 3,
                },
                {
                    player:  'You',
                    player_avatar :'https://cdn.intra.42.fr/users/ynoam.jpg',
                    player_pointes: 1,
                    opponent:  'aymaatou',
                    opponent_avatar:'https://cdn.intra.42.fr/users/aymaatou.jpg',
                    opponent_pointes: 3,
                },
                {
                    player:  'You',
                    player_avatar :'https://cdn.intra.42.fr/users/ynoam.jpg',
                    player_pointes: 1,
                    opponent:  'aymaatou',
                    opponent_avatar:'https://cdn.intra.42.fr/users/aymaatou.jpg',
                    opponent_pointes: 3,
                },
                {
                    player:  'You',
                    player_avatar :'https://cdn.intra.42.fr/users/ynoam.jpg',
                    player_pointes: 1,
                    opponent:  'aymaatou',
                    opponent_avatar:'https://cdn.intra.42.fr/users/aymaatou.jpg',
                    opponent_pointes: 3,
                },
                {
                    player:  'You',
                    player_avatar :'https://cdn.intra.42.fr/users/ynoam.jpg',
                    player_pointes: 1,
                    opponent:  'aymaatou',
                    opponent_avatar:'https://cdn.intra.42.fr/users/aymaatou.jpg',
                    opponent_pointes: 3,
                },
                {
                    player:  'You',
                    player_avatar :'https://cdn.intra.42.fr/users/ynoam.jpg',
                    player_pointes: 1,
                    opponent:  'aymaatou',
                    opponent_avatar:'https://cdn.intra.42.fr/users/aymaatou.jpg',
                    opponent_pointes: 3,
                },
                {
                    player:  'You',
                    player_avatar :'https://cdn.intra.42.fr/users/ynoam.jpg',
                    player_pointes: 1,
                    opponent:  'aymaatou',
                    opponent_avatar:'https://cdn.intra.42.fr/users/aymaatou.jpg',
                    opponent_pointes: 3,
                },
                {
                    player:  'You',
                    player_avatar :'https://cdn.intra.42.fr/users/ynoam.jpg',
                    player_pointes: 1,
                    opponent:  'aymaatou',
                    opponent_avatar:'https://cdn.intra.42.fr/users/aymaatou.jpg',
                    opponent_pointes: 3,
                },
                {
                    player:  'You',
                    player_avatar :'https://cdn.intra.42.fr/users/ynoam.jpg',
                    player_pointes: 1,
                    opponent:  'aymaatou',
                    opponent_avatar:'https://cdn.intra.42.fr/users/aymaatou.jpg',
                    opponent_pointes: 3,
                },
                {
                    player:  'You',
                    player_avatar :'https://cdn.intra.42.fr/users/ynoam.jpg',
                    player_pointes: 1,
                    opponent:  'aymaatou',
                    opponent_avatar:'https://cdn.intra.42.fr/users/aymaatou.jpg',
                    opponent_pointes: 3,
                },
                {
                    player:  'You',
                    player_avatar :'https://cdn.intra.42.fr/users/ynoam.jpg',
                    player_pointes: 1,
                    opponent:  'aymaatou',
                    opponent_avatar:'https://cdn.intra.42.fr/users/aymaatou.jpg',
                    opponent_pointes: 3,
                },
                {
                    player:  'You',
                    player_avatar :'https://cdn.intra.42.fr/users/ynoam.jpg',
                    player_pointes: 1,
                    opponent:  'aymaatou',
                    opponent_avatar:'https://cdn.intra.42.fr/users/aymaatou.jpg',
                    opponent_pointes: 3,
                },
                {
                    player:  'You',
                    player_avatar :'https://cdn.intra.42.fr/users/ynoam.jpg',
                    player_pointes: 1,
                    opponent:  'aymaatou',
                    opponent_avatar:'https://cdn.intra.42.fr/users/aymaatou.jpg',
                    opponent_pointes: 3,
                },
                {
                    player:  'You',
                    player_avatar :'https://cdn.intra.42.fr/users/ynoam.jpg',
                    player_pointes: 2,
                    opponent:  'Another User',
                    opponent_avatar:'https://cdn.intra.42.fr/users/aymaatou.jpg',
                    opponent_pointes: 3,
                },
                {
                    player:  'You',
                    player_avatar :'https://cdn.intra.42.fr/users/ynoam.jpg',
                    player_pointes: 2,
                    opponent:  'Another User',
                    opponent_avatar:'https://cdn.intra.42.fr/users/aymaatou.jpg',
                    opponent_pointes: 3,
                },
                {
                    player:  'You',
                    player_avatar :'https://cdn.intra.42.fr/users/ynoam.jpg',
                    player_pointes: 2,
                    opponent:  'Another User',
                    opponent_avatar:'https://cdn.intra.42.fr/users/aymaatou.jpg',
                    opponent_pointes: 3,
                },
                {
                    player:  'You',
                    player_avatar :'https://cdn.intra.42.fr/users/ynoam.jpg',
                    player_pointes: 2,
                    opponent:  'Another User',
                    opponent_avatar:'https://cdn.intra.42.fr/users/aymaatou.jpg',
                    opponent_pointes: 3,
                },
                {
                    player:  'You',
                    player_avatar :'https://cdn.intra.42.fr/users/ynoam.jpg',
                    player_pointes: 2,
                    opponent:  'Another User',
                    opponent_avatar:'https://cdn.intra.42.fr/users/aymaatou.jpg',
                    opponent_pointes: 3,
                },
                {
                    player:  'You',
                    player_avatar :'https://cdn.intra.42.fr/users/ynoam.jpg',
                    player_pointes: 2,
                    opponent:  'Another User',
                    opponent_avatar:'https://cdn.intra.42.fr/users/aymaatou.jpg',
                    opponent_pointes: 3,
                },
            ],
        }
    }
    return (
        <Flex
            w={'100%'}
            h={'100%'}
            mx={{base: 0,md: 0,lg:0}}
            pb={10}
            direction={{base: 'column',md: 'column',lg:'row'}}
            minHeight={700}
            minWidth={300}
        >
            <Flex
                w={['100%','100%','100%', '40%', '35%', '20%']}
                _light={{ boxShadow: 'md' }}
                _dark={{ boxShadow: 'dark-lg' }}
                rounded='30px'
                direction={"column"}
                justifyContent={"center"}
                alignItems={"center"}
            >
                <Flex
                    h={'100%'}
                    direction={'column'}
                    justifyContent={"center"}
                    alignItems={"center"}
                    my={'50px'}
                >
                    <MyAvatar name={data.profile.username} src={data.profile.avatar} />
                    <Tooltip label={"Click to Change"}>
                        <Text my={7} fontSize={25} fontWeight={'bold'} > {data.profile.username} </Text>
                        <Text>
                        lkjlkjlkj
                        </Text>
                    </Tooltip>
                    <Divider border="1px" bg={'#2F3A53'} w={40} />
                    <HStack my={5} spacing={8} >
                        <a
                            target={'_blank'} href={`https://www.facebook.com/${data.profile.facebook}`} >
                            <FaFacebook size={35}/>
                        </a>
                        <a target={'_blank'} href={`https://www.instagram.com/${data.profile.instagram}`} >
                            <FaInstagram size={35}/>
                        </a>
                        <a target={'_blank'} href={`https://www.discordapp.com/users/${data.profile.discord}`} >
                            <FaDiscord size={35}/>
                        </a>
                    </HStack>
                    <Button
                        _hover={{ bg: 'red' }}
                        mb={7}
                        bg={'#BFC5DC'}
                        color={'#000000'}
                        w={200}
                        h={35}
                        rounded={20} leftIcon={<FaShieldAlt color={'black'}size={20}/>} colorScheme='gray' variant='solid'>
                        2-Factor Auth
                    </Button>
                    <Divider border="1px" bg={'#2F3A53'} w={40} />
                    <Wrap
                        w={'100%'}
                        maxW={150}
                        my={7}
                        justifyContent={"left"}
                        alignItems={"left"}
                    >
                        {data.profile.achievement.pro && <WrapItem > <Badge borderRadius='full' px='4' py={1} colorScheme='purple'> Pro </Badge> </WrapItem>}
                        {data.profile.achievement.beginner && <WrapItem > <Badge borderRadius='full'  px='4' py={1}  colorScheme='teal'> Beginner </Badge> </WrapItem>}
                        {data.profile.achievement.intermediate && <WrapItem > <Badge borderRadius='full'  px='4' py={1}  colorScheme='orange'> Intermediate </Badge> </WrapItem>}
                    </Wrap>
                    <Divider border="1px" bg={'#2F3A53'} w={40} />
                    <Button
                        _hover={{}}
                        _active={{}} // TIPS: on click keep the color green
                        _focus={{}}
                        rounded='20px'
                        p={8} h={'50px'}
                        mt={7}
                        w={200}
                        bg={"red"}
                    >
                        <Text
                            fontSize={30}
                        >
                            Sign Out
                        </Text>
                    </Button>
                    <Spacer/>
                </Flex>
            </Flex>
            <Flex
                w={['100%','100%','100%', '60%', '65%', '80%']}
                h={'100%'}
                _light={{ boxShadow: 'md' }}
                _dark={{ boxShadow: 'dark-lg' }}
                rounded='30px'
                justifyContent={"center"}
                alignItems={"center"}
                direction={'column'}
                minHeight={1000}
            >
                <Flex
                    h={'100%'}
                    w={'100%'}
                    pt={10}
                    direction={['column','column','column', 'column', 'row']}
                >
                    <Flex
                        direction={'column'}
                        w={['100%', '100%', '100%', '100%', '40%']}
                        alignItems={"center"}
                    >
                        <Text
                            my={7}
                            fontSize={25}
                            fontWeight={'bold'}
                        >
                            Status
                        </Text>
                        <Divider border="1px" bg={'#2F3A53'} w={'50%'} />
                        <Flex
                            pt={14}
                            p={10}
                            direction={'row'}
                            w={'80%'}
                        >
                            <VStack
                                justifyContent={"left"}
                                alignItems={"left"}
                                spacing={3}
                            >
                                <Text>Total Games</Text>
                                <Text>Wins</Text>
                                <Text>Losses</Text>
                                <Text>Equals</Text>
                            </VStack>
                            <Spacer/>
                            <VStack
                                justifyContent={"right"}
                                alignItems={"right"}
                                align={'right'}
                                spacing={3}
                            >
                                <Text textAlign={'right'} >{data.status.total_games}</Text>
                                <Text textAlign={'right'} color={'green'}>{data.status.wins}</Text>
                                <Text textAlign={'right'} color={'orange'}>{data.status.losses}</Text>
                                <Text textAlign={'right'} color={'red'}>{data.status.equals}</Text>
                            </VStack>
                        </Flex>
                    </Flex>
                    {/*<Hide below="md" >*/}
                    {/*/!*<Center>*!/*/}
                    {/*/!*    <Divider mt={200} orientation='vertical' border="1px" bg={'#2F3A53'} h={'30%'}/>*!/*/}
                    {/*/!*</Center>*!/*/}
                    {/*</Hide>*/}
                    <Flex
                        direction={'column'}
                        alignItems={"center"}
                        w={['100%', '100%', '100%', '100%', '60%']}
                    >
                        <Text
                            my={7}
                            fontSize={25}
                            fontWeight={'bold'}
                        >
                            Matches History
                        </Text>
                        <Divider border="1px" bg={'#2F3A53'} w={'50%'} />
                        <Flex
                            mt={7}
                            direction={'column'}
                            w={['100%', '100%', '70%', '70%', '80%']}
                            justifyContent={"center"}
                            alignItems={"center"}
                            maxHeight={500}
                            minHeight={500}
                            overflow={'auto'}
                        >
                            {
                                data.history.matches.map((match)=>(
                                    <>
                                        <HStack
                                            justifyContent={"center"}
                                            alignItems={"center"}
                                            spacing={3}
                                            my={2}
                                            w={'100%'}
                                        >
                                            <Text>{match.player}</Text>
                                            <Avatar name={match.player} src={match.player_avatar} ></Avatar>
                                            <Text>{match.player_pointes}</Text>
                                            <Divider border="2px" bg={'#FFFFFF'} w={'20px'} />
                                            <Text>{match.opponent_pointes}</Text>
                                            <Avatar name={match.opponent} src={match.opponent_avatar} ></Avatar>
                                            <Text>{match.opponent}</Text>
                                        </HStack>
                                    </>
                                ))
                            }
                        </Flex>
                    </Flex>
                </Flex>
            </Flex>
        </Flex>
    )
}
