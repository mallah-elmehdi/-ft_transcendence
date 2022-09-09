import {Box, Flex, Text, useColorMode, useColorModeValue} from "@chakra-ui/react";
import React from "react";
import {MoonIcon, SunIcon} from "@chakra-ui/icons";

// {/*'rgb(132,119,218)*/rgb(242,254,225)
// }
type MsgProps = {
    isSender: Boolean,
    content: String,
}
const Message = ({isSender, content}: MsgProps) => {
    const value = useColorModeValue('#000', 'white')
    const {colorMode} = useColorMode();
    return (
        <Flex
            w={'100%'}
            justifyContent={isSender ? 'right' : 'left'}
        >
            <Box
                overflow={'hidden'}
                rounded={20}
                roundedBottomRight={isSender ? 0 : 20}
                roundedTopLeft={isSender ? 20 : 0}
                px={3}
                py={2}
                bg={isSender ?
                    (colorMode == 'dark' ? 'rgb(132,119,218)' : 'rgb(242,254,225)') :
                    ((colorMode === 'dark') ? 'rgb(33,33,33)' : 'white')}
            >
                <Text
                    fontFamily={'monospace'}
                    fontWeight={'bold'}
                    color={value}
                >{content}</Text>
            </Box>
        </Flex>
    )
}

export default Message;