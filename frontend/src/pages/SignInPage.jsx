"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var intra_png_1 = require("../assets/intra.png");
var react_1 = require("@chakra-ui/react");
var logo_tsx_1 = require("../component/logo.tsx");
var toggleMode_tsx_1 = require("../component/toggleMode.tsx");
function SignInPage() {
    var _a = (0, react_1.useColorMode)(), colorMode = _a.colorMode, toggleColorMode = _a.toggleColorMode;
    // const width =
    return (<react_1.Box p={10} h={'100vh'}>
            <react_1.Flex mb={0} px={10} justifyContent={"right"}>
                <toggleMode_tsx_1.default colorMode={colorMode} toggleColorMode={toggleColorMode}/>
            </react_1.Flex>
            <react_1.Flex w={'100%'} h={'100%'} m={0} p={0} alignItems={"center"} justifyContent={"center"}>
                <react_1.Flex boxShadow={colorMode === 'dark' ? "dark-lg" : "md"} rounded='30px' w={{ base: '700px', md: '500px' }} h={"400px"} direction={"column"} justifyContent={"center"} alignItems={"center"}>
                    <react_1.Heading mb={"30px"} 
    // fontSize={{base: 45,md:60}}
    fontSize={60}>
                        Welcome To
                    </react_1.Heading>
                    <logo_tsx_1.default />
                    <react_1.Button _hover={{ bg: 'green' }} _active={{}} // TIPS: on click keep the color green
     
    // _focus={{
    //     // boxShadow:
    //     //     '0 0 1px 2px rgba(88, 144, 255, .75), 0 1px 1px rgba(0, 0, 0, .15)',
    // }}
    rounded='20px' p={8} h={'50px'} mt={10} 
    // w={{base:'200px',md:'300px'}}
    w={'300px'} bg={"green"}>
                        <react_1.Image w={10} mr={8} src={intra_png_1.default}></react_1.Image>
                        <react_1.Text fontSize={30}>
                            Sign In
                        </react_1.Text>
                    </react_1.Button>
                </react_1.Flex>
            </react_1.Flex>
        </react_1.Box>);
}
exports.default = SignInPage;
