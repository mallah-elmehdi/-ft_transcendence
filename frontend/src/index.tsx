import React from 'react';
import ReactDOM from 'react-dom/client';
import theme from "./style/theme";
import {ChakraProvider, Box, Center} from "@chakra-ui/react";
import {BrowserRouter, Link, Navigate, Route, Routes} from "react-router-dom";

import Navbar from "./component/Navbar.tsx";
// pages

import SignInPage from "./pages/SignInPage.tsx";
import ProfilePage from "./pages/ProfilePage.tsx";
import ChatPage from "./pages/ChatPage.tsx";
import PlayPage from "./pages/PlayPage.tsx";
import HomePage from "./pages/HomePage.tsx";


import "./index.css"
const root = ReactDOM.createRoot(document.getElementById('root'));
const isSignIn = true;
root.render(
    <React.StrictMode>
        <ChakraProvider theme={theme} >
            <Center>
            <Box
                p={[1, 10, 10,10]}
                h={'100vh'}
                // mx={{base: 0,md: 0,lg:0, xl: '2em', '2xl': '6em',  }}
                // mx={[0, 0, 0, 0, '1em', '4em', '8em']}
                w={['100%','100%','100%','100%','100%', '95%' ]}
                maxW={'2000px'}
                // mx={'auto'}
                // maxWidth={"8xl"}
                // bg={'red'}
            >
                <BrowserRouter>
                    <Navbar isSignIn={isSignIn}/>
                    <Routes>
                        <Route path={'/login'} element={isSignIn ? <Navigate to={'/home'}/> : <SignInPage />} />
                        <Route path={'/'} element={isSignIn ? <Navigate to={'/home'}/> : <SignInPage />} />
                        <Route path={'/home'} element={isSignIn ?  <HomePage /> : <Navigate to={'/login'}/> } />
                        <Route path={'/play'} element={isSignIn ?  <PlayPage /> : <Navigate to={'/login'}/> } />
                        <Route path={'/chat'} element={isSignIn ?  <ChatPage /> : <Navigate to={'/login'}/> } />
                        <Route path={'/profile'} element={isSignIn ?  <ProfilePage /> : <Navigate to={'/login'}/> } />
                    </Routes>
                </BrowserRouter>
            </Box>
            </Center>
        </ChakraProvider>
    </React.StrictMode>
);