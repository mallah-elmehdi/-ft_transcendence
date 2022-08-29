import {
    Badge,
    Button,
    Divider,
    Text,
    Box,
    Flex, HStack, Spacer, Tooltip, VStack, Wrap, WrapItem,
    Heading,
    useColorMode,
    Image,
} from "@chakra-ui/react";
import {FaDiscord, FaFacebook, FaInstagram, FaShieldAlt} from "react-icons/fa";
import {Avatar as ChakraAvatar} from "@chakra-ui/avatar";

export  default function ChatPage() {
    return (
        <>
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
                    minHeight={['none', 700,'none', 1000, 700]}
                >
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
                    </Flex>
                </Flex>
            </Flex>
        </>
    )
}
