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
import Logo from "../component/logo.tsx";

export  default function SignInPage() {
    const { colorMode } = useColorMode()
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
                    boxShadow={colorMode === 'dark' ? "dark-lg" : "md"}
                    rounded='30px'
                    w={{base:'700px',md:'500px'}}
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
                    <Logo />
                    <Button
                        _hover={{ bg: 'green' }}
                        _active={{}} // TIPS: on click keep the color green
                        // _focus={{
                        //     // boxShadow:
                        //     //     '0 0 1px 2px rgba(88, 144, 255, .75), 0 1px 1px rgba(0, 0, 0, .15)',
                        // }}
                        rounded='20px'
                        p={8} h={'50px'} mt={10}
                        // w={{base:'200px',md:'300px'}}
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
                </Flex>
            </Flex>
        </>
    )
}
