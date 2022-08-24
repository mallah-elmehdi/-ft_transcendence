import React from 'react';
import ReactDOM from 'react-dom/client';
import theme from "./style/theme";
import {ChakraProvider, Box} from "@chakra-ui/react";
import {BrowserRouter, Link, Navigate, Route, Routes} from "react-router-dom";

import Navbar from "./component/Navbar.tsx";
// pages

import SignInPage from "./pages/SignInPage.tsx";
import GamePage from "./pages/GamePage.tsx";
import ProfilePage from "./pages/ProfilePage.tsx";
import ChatPage from "./pages/ChatPage.tsx";
import PlayPage from "./pages/PlayPage.tsx";
import HomePage from "./pages/HomePage.tsx";


const root = ReactDOM.createRoot(document.getElementById('root'));
const isSignIn = true;
root.render(
    <React.StrictMode>
        <ChakraProvider theme={theme} >
            <Box p={10} h={'100vh'} >
                <BrowserRouter>
                    <Navbar isSignIn={isSignIn}/>
                    <Routes>
                        <Route path={'/login'} element={isSignIn ? <Navigate to={'/home'}/> : <SignInPage />} />
                        <Route path={'/home'} element={isSignIn ?  <HomePage /> : <Navigate to={'/login'}/> } />
                        <Route path={'/play'} element={isSignIn ?  <PlayPage /> : <Navigate to={'/login'}/> } />
                        <Route path={'/chat'} element={isSignIn ?  <ChatPage /> : <Navigate to={'/login'}/> } />
                        <Route path={'/profile'} element={isSignIn ?  <ProfilePage /> : <Navigate to={'/login'}/> } />
                    </Routes>
                </BrowserRouter>
            </Box>
        </ChakraProvider>
    </React.StrictMode>
);