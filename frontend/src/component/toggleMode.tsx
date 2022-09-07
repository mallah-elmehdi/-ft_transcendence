import React from "react"
import {Button, useColorMode, Box} from "@chakra-ui/react";
import { MoonIcon, SunIcon} from '@chakra-ui/icons'

export default function ToggleMode()  {
    const { colorMode, toggleColorMode } = useColorMode();
    return (
        <Box onClick={toggleColorMode}>
            {colorMode === 'light' ? <MoonIcon w={6} h={6}/> : <SunIcon w={6} h={6}/>}
        </Box>
    )
}
