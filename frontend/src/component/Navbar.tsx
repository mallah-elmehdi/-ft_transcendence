import {
    Flex,
    Spacer,
    Tabs,
    TabList,
    Text,
    useColorMode,
    Tab,
    Show,
    Hide,
    IconButton,
} from "@chakra-ui/react";

import ToggleMode from "./toggleMode.tsx";
import Logo from "./logo.tsx";

import {Link} from "react-router-dom";

export default function Navbar(props) {
    const { colorMode, toggleColorMode } = useColorMode()
    const tabs = ['Home', 'Play', 'Chat', 'Profile'];
    return (
        <Flex
            mb={5}
            px={10}
            justifyContent={"right"}
            // bg={'#777777'}
        >
            <Hide below="sm">
                <Logo/>
            </Hide>
            {/*<Spacer/>*/}
            {/*{*/}
            {/*    props.isSignIn &&*/}
            {/*    <Show above="sm">*/}
            {/*        <Flex*/}
            {/*            boxShadow={colorMode === 'dark' ? "dark-lg" : "md"}*/}
            {/*            rounded='20px'*/}
            {/*            justifyContent={"center"}*/}
            {/*            alignItems={"center"}*/}
            {/*        >*/}
            {/*            <Tabs*/}
            {/*                variant={'unstyled'}*/}
            {/*                size={'sm'}*/}
            {/*            >*/}
            {/*                <TabList>*/}
            {/*                    {tabs.map((tab) =>*/}
            {/*                        <Tab _selected={{*/}
            {/*                            color: 'red'*/}
            {/*                        }}>*/}
            {/*                            <Link to={`/${tab.toLowerCase()}`}>*/}
            {/*                                <Text fontSize={'30px'}>{tab}</Text>*/}
            {/*                            </Link>*/}
            {/*                        </Tab>*/}

            {/*                    )}*/}
            {/*                </TabList>*/}
            {/*            </Tabs>*/}
            {/*        </Flex>*/}
            {/*    </Show>*/}
            {/*}*/}
            {/*<Spacer/>*/}

            <ToggleMode colorMode={colorMode} toggleColorMode={toggleColorMode} />
        </Flex>
    )

}