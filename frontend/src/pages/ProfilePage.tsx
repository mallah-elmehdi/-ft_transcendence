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
    useColorMode,
    Stack,
    SimpleGrid,
    Center,
    Show,
    Hide,
    VStack,
    useDisclosure,
    Tooltip,
    Avatar as ChakraAvatar,
    useBoolean,
    ModalContent,
    Modal,
    ModalBody,
    ModalFooter,
    ModalHeader,
    ModalOverlay,
    useToast,
    Wrap,
    WrapItem,
    Alert,
    AlertIcon,
    SkeletonCircle,
    AvatarBadge,

} from "@chakra-ui/react";
import {  } from '@chakra-ui/react'
import {FaFacebook, FaInstagram, FaDiscord, FaShieldAlt, FaPen, FaPlus } from "react-icons/fa";
import {MdError} from "react-icons/md"
import {RiImageAddFill} from "react-icons/ri"
import {InfoOutlineIcon} from "@chakra-ui/icons"
import {SetStateAction, useEffect, useState} from "react";
import axios from "axios";
import React from "react"
import FacebookButton from "../component/FacebookButton";
import InstagramButton from "../component/InstagramButton";
import DiscordButton from "../component/DiscordButton";
import io from "socket.io-client"

// component


function Avatar(props: { name: string | undefined; src: string | undefined; })
{
    var socket = io('http://10.11.9.12:3333', { auth: { login: 'ynoam' } });
    let fileInput: any =  null;
    const { isOpen, onOpen, onClose } = useDisclosure()
    const [hoverAvatar, setHoverAvatar] = useBoolean()
    const [selectedAvatar , setSelectedAvatar] = useState(null)
    const selectImageToast = useToast()

    function avatarSelectHandler(event:any){
        console.log(event.target.files[0]!.name)
        setSelectedAvatar(event.target.files[0])
    }

    function avatarUploadHandler() {
        if (selectedAvatar != null)
        {
            // send data to backend
            const fd = new FormData();
            // @ts-ignore
            fd.append('avatarImage', selectedAvatar, selectedAvatar.name)
            const backEndLink = 'http://www.oac.uci.edu/indiv/franklin/cgi-bin/values';
            axios.post(backEndLink, fd, {
                onUploadProgress: progressEvent => {
                    console.log('upload Progress: ' + Math.round(progressEvent.load / progressEvent.total * 100) + "%")
                }
            })
                .then(res => {
                    console.log('RESULT');
                    console.log(res);
                })
                .catch(err => {
                    console.log('--------------------ERROR--------------------')
                    console.log(err)

                    console.log('---------------------------------------------')
                })
        }
        else
        {
            selectImageToast({
                position: 'top',
                duration: 3000,
                isClosable: true,
                render: () => (
                    // <Alert status='error'>
                    //     <AlertIcon />
                    //     There was an error processing your request
                    // </Alert>
                    <HStack color='white' rounded={5} p={3} bg='#D22B2B'>
                        <MdError size={30}/>
                        <Text>Please select image first</Text>
                    </HStack>
                ),
                // render: ()
            })
        }
    }
    // console.log(props)
    const [isConnected, setIsConnected] = useState(false);
    const [lastPong, setLastPong] = useState(null);
    useEffect(() => {
        console.log('useEFFECt')
        socket.on('new_user', (user) => {
            console.log(user)
          setIsConnected(true);
        });
    
        socket.on('user_offline', () => {
          setIsConnected(false);
        });
    
        return () => {
          socket.off('connect');
          socket.off('disconnect');
        };
      }, [isConnected]);
    
    return (
        <>
            <ChakraAvatar
                size={'xl'}
                name={props.name}
                src={props.src}
                position={'relative'}
                onClick={onOpen}
                // bg={'red'}
            >
                {/* <Flex
                    position={'absolute'}
                    w={'100%'}
                    h={'100%'}
                    rounded={'50%'}
                    _hover={{bg: '#aaaaaaaa'}}
                    justifyContent={"center"}
                    alignItems={"center"}
                    onMouseEnter={setHoverAvatar.toggle}
                    onMouseLeave={setHoverAvatar.toggle}
                >
                    {hoverAvatar && <Text as={'button'} fontSize={13}>Change Avatar</Text>}
                </Flex> */}
                <AvatarBadge boxSize='0.8em' bg={isConnected ?'green' : 'red'}/>
            </ChakraAvatar>
            <Modal
                isCentered
                onClose={onClose}
                isOpen={isOpen}
                motionPreset={'slideInBottom'}
            >
                <ModalOverlay />
                <ModalContent
                        justifyContent={"center"}
                        alignItems={"center"}
                >
                    <ModalHeader>Select Image</ModalHeader>
                    <ModalBody
                        justifyContent={"center"}
                        alignItems={"center"}
                        // align={
                        //     {
                        // justifyContent:"center",
                        // alignItems:"center",
                        //     }
                        // }
                    >{!selectedAvatar ?
                        <ChakraAvatar
                            size={'xl'}
                            bg= {'#aaaaaaaa'}
                            position={'relative'}
                        >
                            <Flex
                                justifyContent={"center"}
                                alignItems={"center"}
                                position={'absolute'}
                                w={'100%'}
                                h={'100%'}
                                rounded={'50%'}
                                bg={'#aaaaaaaa'}
                                onClick={() => fileInput!.click()}
                            >
                                <RiImageAddFill color={'white'} size={30}/>
                                <input
                                    accept={ 'image/*' }
                                    style={{display: 'none'}}
                                    ref={file => fileInput = file}
                                    type={'file'}
                                    onChange={avatarSelectHandler}
                                />
                            </Flex>
                        </ChakraAvatar>
                        :
                        <ChakraAvatar
                            size={'xl'}
                            bg= {'#aaaaaaaa'}
                            src={selectedAvatar}
                        >
                        </ChakraAvatar>
                        }
                    </ModalBody>
                    <ModalFooter>
                        <HStack>
                        <Button
                            onClick={avatarUploadHandler}
                            rounded='20px' bg={"green"}>
                            <Text fontSize={20} onClick={onClose}>Upload</Text>
                        </Button>
                        <Button rounded='20px' bg={"red"}>
                            <Text fontSize={20} onClick={onClose}>Discard</Text>
                        </Button>
                        </HStack>
                    </ModalFooter>
                </ModalContent>
            </Modal>
        </>
    )

}

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
            // h={'100%'}
            h={'98%'}
            mx={{base: 0,md: 0,lg:0}}
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
                minHeight={['none', 700,'none', 1000, 700]}
            >
                <Flex
                    direction={'column'}
                    justifyContent={"center"}
                    alignItems={"center"}
                    my={'50px'}
                >
                    <Avatar
                        name={data.profile.username}
                        src={data.profile.avatar} 
                    />
                    <Tooltip label={"Click to Change"}>
                        <Text my={7} fontSize={25} fontWeight={'bold'} > {data.profile.username} </Text>
                    </Tooltip>
                    <Divider border="1px" bg={'#2F3A53'} w={40} />
                    <HStack my={5} spacing={8} >
                        {/*<Tooltip label={"Click to Change"}>*/}
                        {/*    <Text>*/}
                        {/*        <FaFacebook size={35}/>*/}
                        {/*    </Text>*/}
                        {/*</Tooltip>*/}
                        {/*<Tooltip label={"Click to Change"}>*/}
                        {/*    <Text>*/}
                        {/*        <FaInstagram size={35}/>*/}
                        {/*    </Text>*/}
                        {/*</Tooltip>*/}
                        {/*<Tooltip label={"Click to Change"}>*/}
                        {/*    <Text>*/}
                        {/*        <FaDiscord size={35}/>*/}
                        {/*    </Text>*/}
                        {/*</Tooltip>*/}
                        {/* TODO: PLEASE DON'T DELETE ME . */}
                        {/* TODO: use this code for the mini profile in the chat page please . */}
                        <FacebookButton id={data.profile.facebook} />
                        <InstagramButton id={data.profile.instagram} />
                        <DiscordButton id={data.profile.discord} />
                        {/*<a*/}
                        {/*    target={'_blank'} href={`https://www.facebook.com/${data.profile.facebook}`} >*/}
                        {/*    <FaFacebook size={35}/>*/}
                        {/*</a>*/}
                        {/*<a target={'_blank'} href={`https://www.instagram.com/${data.profile.instagram}`} >*/}
                        {/*    <FaInstagram size={35}/>*/}
                        {/*</a>*/}
                        {/*<a target={'_blank'} href={`https://www.discordapp.com/users/${data.profile.discord}`} >*/}
                        {/*    <FaDiscord size={35}/>*/}
                        {/*</a>*/}
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
                minHeight={[1000, 1000, 1000, 1000, 700]}
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
                        justifyContent={"center"}
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
                                <Text textAlign={'right'} color={'red'}>{data.status.losses}</Text>
                                <Text textAlign={'right'} color={'orange'}>{data.status.equals}</Text>
                            </VStack>
                        </Flex>
                    </Flex>
                    {/*<Show above="xl" >*/}
                    {/*    <Center>*/}
                    {/*        <Divider mt={200} orientation='vertical' border="1px" bg={'#2F3A53'} h={'30%'}/>*/}
                    {/*    </Center>*/}
                    {/*</Show>*/}
                    <Flex
                        direction={'column'}
                        alignItems={"center"}
                        w={['100%', '100%', '100%', '100%', '60%']}
                        justifyContent={"center"}

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
                            rounded={10}
                        >
                            {
                                data.history.matches.map((match, id)=>(
                                    <>
                                        <HStack
                                            justifyContent={"center"}
                                            alignItems={"center"}
                                            spacing={3}
                                            my={2}
                                            w={'100%'}
                                            key = {id.toString()}
                                        >
                                            <Text>{match.player.slice(0,10)}</Text>
                                            <ChakraAvatar name={match.player} src={match.player_avatar} ></ChakraAvatar>
                                            <Text>{match.player_pointes}</Text>
                                            <Divider border="2px" bg={'#FFFFFF'} w={'20px'} />
                                            <Text>{match.opponent_pointes}</Text>
                                            <ChakraAvatar name={match.opponent} src={match.opponent_avatar} ></ChakraAvatar>
                                            <Text><Spacer/>{match.opponent.slice(0,8)}<Spacer/></Text>
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
