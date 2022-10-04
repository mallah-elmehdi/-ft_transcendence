import React from 'react'
import {
	Flex,
	Icon,
	Box,
	Drawer,
	DrawerOverlay,
	DrawerContent,
	IconButton,
	Text,
	Avatar,
	useDisclosure,
	useColorModeValue
} from '@chakra-ui/react'

import { FaBell } from 'react-icons/fa'
import { FiMenu, FiSearch } from 'react-icons/fi'

import { SideBar } from '../../components'

interface Props {
	children: JSX.Element
}

export default (props: Props) => {
	const sidebar = useDisclosure();
	const integrations = useDisclosure();

	return (
		<Box
			as="section"
			bg="gray.700"
			minH="100vh"
		>
			<SideBar
				display={{
					base: "none",
					md: "unset",
				}}
			/>
			<Drawer
				isOpen={sidebar.isOpen}
				onClose={sidebar.onClose}
				placement="left"
			>
				<DrawerOverlay />
				<DrawerContent>
					<SideBar w="full" borderRight="none" />
				</DrawerContent>
			</Drawer>
			<Box
				ml={{
					base: 0,
					md: 60,
				}}
				transition=".3s ease"
			>
				<Flex
					as="header"
					align="center"
					justify="space-between"
					w="full"
					px="4"
					bg="gray.800"
					color="inherit"
					h="14"
				>
					<IconButton
						aria-label="Menu"
						display={{
							base: "inline-flex",
							md: "none",
						}}
						onClick={sidebar.onOpen}
						icon={<FiMenu />}
						size="sm"
					/>
					<Text
						// bgGradient="linear(to-tr, cyan.400, blue.400)"
						bg="white"
						fontWeight="light"
						bgClip="text"
						fontSize="xl"
					>
						Retards
					</Text>
					<Flex align="center">
						<Avatar
							ml="4"
							size="sm"
							name="LOGIN" // ! hardcoded
							src="https://avatars.githubusercontent.com/u/30869823?v=4"
							cursor="pointer"
						/>
					</Flex>
				</Flex>

				<Box as="main" p="4">
					{props.children}
				</Box>
			</Box>
		</Box>
	);
};
