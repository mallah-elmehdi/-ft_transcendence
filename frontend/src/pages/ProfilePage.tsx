import {
    Avatar,
    AvatarBadge,
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
    Hide
} from "@chakra-ui/react";
import { Wrap, WrapItem } from '@chakra-ui/react'
import {FaFacebook, FaInstagram, FaDiscord, FaShieldAlt } from "react-icons/fa";
import React from "react";

export  default function ProfilePage() {
    const data = {
        profile : {
            avatar:'https://cdn.intra.42.fr/users/aymaatou.jpg',
            username: 'ynoam',
            facebook: 'ynoam',
            discord: 'ynoam',
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
                    <Avatar
                        size={'xl'}
                        name={'Youssef Noam'}
                        src={data.profile.avatar}
                    >
                        <AvatarBadge boxSize={'0.7em'} bg={'green'} />
                    </Avatar>
                    <Text
                        my={7}
                        fontSize={25}
                        fontWeight={'bold'}
                    >
                        {data.profile.username}
                    </Text>
                    <Divider border="1px" bg={'#2F3A53'} w={40} />
                    <HStack my={5} spacing={8} >
                        <a href={`https://www.facebook.com/${data.profile.facebook}`} >
                            <FaFacebook size={35}/>
                        </a>
                        <a href={`https://www.instagram.com/${data.profile.instagram}`} >
                            <FaInstagram size={35}/>
                        </a>
                        <a href={`https://www.discord.com/${data.profile.discord}`} >
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
                    {/*<SimpleGrid  columns={3} spacing={1}>*/}
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
                {/*<Spacer/>*/}
            </Flex>
            <Flex
                w={['100%','100%','100%', '65%', '70%', '80%']}
                h={'100%'}
                _light={{ boxShadow: 'md' }}
                _dark={{ boxShadow: 'dark-lg' }}
                rounded='30px'
                justifyContent={"center"}
                alignItems={"center"}
                direction={{base: 'column',md: 'column',lg:'row'}}
            >
                <Flex
                    h={'100%'}
                    w={'100%'}
                    p={10}
                    // bg={'red'}
                >
                    <Flex
                        direction={'column'}
                        w={'50%'}
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
                    </Flex>
                    <Hide below="md" >
                    <Center>
                        <Divider orientation='vertical' border="1px" bg={'#2F3A53'} h={'50%'}/>
                    </Center>
                    </Hide>
                    <Flex
                        direction={'column'}
                        w={'50%'}
                        alignItems={"center"}
                    >
                        <Text
                            my={7}
                            fontSize={25}
                            fontWeight={'bold'}
                        >
                            Matches History
                        </Text>
                        <Divider border="1px" bg={'#2F3A53'} w={'50%'} />
                    </Flex>
                </Flex>
                {/*Details*/}
            </Flex>
        </Flex>
    )
}
