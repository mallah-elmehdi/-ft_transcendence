import * as React from "react"
import {
	useColorMode,
	useColorModeValue,
	IconButton,
	IconButtonProps,
} from "@chakra-ui/react"
import { FaMoon, FaSun } from "react-icons/fa"

type ColorModeSwitcherProps = Omit<IconButtonProps, "aria-label">

export default (props: ColorModeSwitcherProps) => {
	const { toggleColorMode } = useColorMode()
	const text = useColorModeValue("dark", "light")
	const SwitchIcon = useColorModeValue(FaMoon, FaSun)

	return (
		<IconButton
			_hover={{bgColor:"rgba(255,255,255, 0.1)"}}
			variant="ghost"
			size="sm"
			color="white"
			onClick={toggleColorMode}
			icon={<SwitchIcon />}
			aria-label={`Switch to ${text} mode`}
			{...props}
		/>
	)
}
