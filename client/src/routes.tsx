import * as React from "react";
import { Routes, Route } from "react-router-dom";
import {
	ChakraProvider
} from "@chakra-ui/react"

import theme from './theme'
import { Base } from "./components"

export default () => {
	return (
		<ChakraProvider theme={theme}>
			<Base>
				<Routes>
					<Route path="/" element={<div>home</div>} />
					<Route path="about" element={<div>about</div>} />
				</Routes>
			</Base>
		</ChakraProvider>
	);
}
