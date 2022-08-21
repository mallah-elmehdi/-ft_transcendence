import {Button, useColorMode, Box} from "@chakra-ui/react";
import { MoonIcon, SunIcon} from '@chakra-ui/icons'

export default function ToggleMode(props)  {
    return (
        <Box onClick={props.toggleColorMode}>
            {props.colorMode === 'light' ? <MoonIcon w={6} h={6}/> : <SunIcon w={6} h={6}/>}
        </Box>
    )
}
