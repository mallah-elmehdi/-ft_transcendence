import React from 'react';
import ReactDOM from 'react-dom/client';
import theme from "./style/theme";
import {ChakraProvider} from "@chakra-ui/react";
// import {SignInPage} from "./pages/";
// import GamePage from "./pages/game.tsx";
import SignInPage from "./pages/signin.tsx";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <ChakraProvider theme={theme} >
            <SignInPage />
        </ChakraProvider>
    </React.StrictMode>
);