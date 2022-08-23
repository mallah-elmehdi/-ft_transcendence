import React from 'react';
import ReactDOM from 'react-dom/client';
import theme from "./style/theme";
import {ChakraProvider, Box} from "@chakra-ui/react";
import {BrowserRouter, Link, Route, Routes} from "react-router-dom";

// pages

import SignInPage from "./pages/SignInPage.tsx";
import Navbar from "./component/Navbar.tsx";
import GamePage from "./pages/GamePage.tsx";
import ProfilePage from "./pages/ProfilePage.tsx";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <ChakraProvider theme={theme} >
            <Box p={10} h={'100vh'} >
                <BrowserRouter>
                    <Navbar/>
                    <Routes>
                        <Route path={'/'} element={<SignInPage />} />
                        <Route path={'/game'} element={<GamePage />} />
                        <Route path={'/profile'} element={<ProfilePage />} />
                        <Route path={'/chat'} element={<ProfilePage />} />
                        <Route path={'/home'} element={<ProfilePage />} />
                    </Routes>
                </BrowserRouter>
            </Box>
        </ChakraProvider>
    </React.StrictMode>
);