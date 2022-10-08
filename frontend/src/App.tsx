import React from 'react';
import { Box, Center, ChakraProvider } from "@chakra-ui/react";
import theme from "./style/theme";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./component/Navbar";
import SignInPage from "./pages/SignInPage";
import HomePage from "./pages/HomePage";
import PlayPage from "./pages/PlayPage";
import ChatPage from "./pages/ChatPage";
import ProfilePage from "./pages/ProfilePage";
import PageNotFound from "./pages/PageNotFound";

function App() {
    return (
        <ChakraProvider theme={theme} >
            <Center >
                <Box
                    p={[0, 10, 10, 10]}
                    h={'99vh'}
                    w={['100%', '100%', '100%', '100%', '100%', '95%']}
                    maxW={'2000px'}
                >
                    <BrowserRouter>
                        <Routes>
                            <Route element={<Navbar />}>
                                <Route index element={<HomePage />} />
                                <Route path={'/home'} element={<HomePage />} />
                                <Route path={'/play'} element={<PlayPage />} />
                                <Route path={'/chat'} element={<ChatPage />} />
                                <Route path={'/profile'} element={<ProfilePage />} />
                                <Route path="*" element={<PageNotFound />} />
                            </Route>
                            <Route path={'/login'} element={<SignInPage />} />
                        </Routes>
                    </BrowserRouter>
                </Box>
            </Center>
        </ChakraProvider>
    );
}

export default App;