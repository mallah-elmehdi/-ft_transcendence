import React from 'react'
import {
	Box,
	Flex,
	Text
} from '@chakra-ui/react'

import { NavItem } from "../../components";
import { IconType } from 'react-icons';
import { FaHome } from "react-icons/fa";

interface Props {
	icon: IconType;
	title: string;
}

export default (props: any) => (
	<Box
		as="nav"
		pos="fixed"
		top="0"
		left="0"
		zIndex="sticky"
		h="full"
		pb="10"
		overflowX="hidden"
		overflowY="auto"
		bg="gray.800"
		color="inherit"
		w="60"
		{...props}
	>
		<Flex
			direction="column"
			aria-label="Main Navigation"
			p="5"
			as="nav"
			gap="2"
		>
			<NavItem icon={FaHome} title="Let's play"/>
			<NavItem icon={FaHome} title="Watch a live game"/>
		</Flex>
	</Box>
	);
