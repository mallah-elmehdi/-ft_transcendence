import {Flex, Spacer, useColorMode} from "@chakra-ui/react";
import ToggleMode from "./toggleMode.tsx";
import Logo from "./logo.tsx";

export default function Navbar() {
    const { colorMode, toggleColorMode } = useColorMode()
    return (
        <Flex
            mb={5}
            px={10}
            justifyContent={"right"}

        >
            <Logo/>
            <Spacer/>
            <Spacer/>
            <ToggleMode colorMode={colorMode} toggleColorMode={toggleColorMode} />
        </Flex>
    )

}