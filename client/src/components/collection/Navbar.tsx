import * as React from 'react'
import chakra, {
	Box,
	HStack,
	Text,
	Container,
	Button,
	useColorModeValue
} from '@chakra-ui/react'
import {
	FaMoon,
	FaHeart,
	FaSun
} from 'react-icons/fa'

export default () => {
	return (
		<Box
			as="header"
			bg="gray.800"
			p={5}
		>
			<Container maxW="7xl">
				<HStack justifyContent="space-between" w="full">
					<Text color="white" fontSize="20">
						Retard
					</Text>
					<HStack>
						<Button colorScheme="cyan" variant="ghost" size="sm">
							Sign in
						</Button>
					</HStack>
				</HStack>
			</Container>
		</Box>
	)
};
