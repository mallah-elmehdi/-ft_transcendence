import React from 'react'
import {
	Flex,
	Icon,
	Text
} from '@chakra-ui/react'

import { IconType } from 'react-icons';

interface Props {
	icon: IconType;
	title: string;
}

export default (props: Props) => {
	const { icon, title } = props;
	return (
		<Flex
			align="center"
			px="4"
			py="5"
			cursor="pointer"
			color="gray.400"
			_hover={{
				bg: "blue.400",
				color: "gray.100",
			}}
			role="group"
			fontWeight="semibold"
			transition=".15s ease"
			borderRadius="lg"
		>
			<Icon
				mx="3"
				color="gray.400"
				_groupHover={{
					color: "gray.100",
				}}
				as={icon}
			/>
			<Text fontSize="sm">
				{title}
			</Text>
		</Flex>
	);
  };
