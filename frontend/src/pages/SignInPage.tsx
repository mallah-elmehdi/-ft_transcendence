import intra from '../assets/intra.png';
import {
    Text,
    // Box,
    Flex,
    Button,
    Heading,
    useColorMode,
    Image,
} from "@chakra-ui/react";
import Logo from "../component/logo";
import React from "react"
import axios from "axios";

export default function SignInPage() {
    // const backEnd = 'http://10.11.9.12:3333/auth'
    const backEnd = 'http://10.11.9.10:3000/42'
    // const backEnd2 = 'http://10.11.10.5:3333/auth/ynoam'
    // function submitHandler()
    // {
    //     const fd = new FormData();
    //     axios.post(backEnd, fd )
    //         .then(res => {
    //             console.log('RESULT');
    //             console.log(res);
    //         })
    //         .catch(err => {
    //             console.log('--------------------ERROR--------------------')
    //             console.log(err)
    //             console.log('---------------------------------------------')
    //         })
    // }

    return (
        <>
            <Flex
                w={'100%'}
                h={'100%'}
                m={0} p={0}
                alignItems={"center"}
                justifyContent={"center"}
            >
                <Flex
                    _dark={{boxShadow: 'dark-lg'}} _light={{boxShadow: 'md'}}
                    rounded='30px'
                    w={{base: '700px', md: '500px'}}
                    h={"400px"}
                    direction={"column"}
                    justifyContent={"center"}
                    alignItems={"center"}
                >

                    <Heading
                        mb={"30px"}
                        // fontSize={{base: 45,md:60}}
                        fontSize={60}
                    >
                        Welcome To
                    </Heading>
                    <Logo/>
                    <form
                        method={'GET'}
                        action={backEnd}
                    >
                        <Button
                        // onClick={(e) => {
                        //     e.preventDefault()
                        //     const fd = new FormData();
                        //     axios.get(backEnd,fd)
                        //         .then(function (response) {
                        //             // console.log(response)
                        //             console.log('lkjlkjlkjlkjjlkj')
                        //             // if (response.data.redirect == '/') {
                        //             //     {
                        //             //         <Link to={'/'}/>
                        //             //     }
                        //             //     // window.location = "/"
                        //             // }
                        //             // else if (response.data.redirect == '/login') {
                        //             //     window.location = "/login"
                        //             // }
                        //         })
                        //         .catch(function (error) {
                        //             // console.log(error)
                        //             console.log('ERRRRRR')
                        //             // window.location = "/login"
                        //         })
                        // }
                        // }
                        type={'submit'}
                        _hover={{bg: 'green'}}
                        _active={{}} // TIPS: on click keep the color green
                        rounded='20px'
                        p={8} h={'50px'} mt={10}
                        w={'300px'}
                        bg={"green"}
                    >
                        <Image w={10} mr={8} src={intra}></Image>
                        <Text
                            fontSize={30}
                        >
                            Sign In
                        </Text>
                    </Button>
                    </form>
                </Flex>
            </Flex>
        </>
    )
}
