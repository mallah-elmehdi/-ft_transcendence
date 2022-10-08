import React from 'react';
import { Box, Center, ChakraProvider } from '@chakra-ui/react';
import theme from './style/theme';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Navbar from './component/Navbar';
import SignInPage from './pages/SignInPage';
import HomePage from './pages/HomePage';
import PlayPage from './pages/PlayPage';
import ChatPage from './pages/ChatPage';
// import ProfilePage from './pages/ProfilePage-dup';
import ProfilePage from './pages/ProfilePage';
import PageNotFound from './pages/PageNotFound';

// CONSTANTS
import { pagesContent } from './constants';

function App() {
    return (
        <ChakraProvider theme={theme}>
            <Center>
                <Box p={[0, 10, 10, 10]} h={'99vh'} w={['100%', '100%', '100%', '100%', '100%', '95%']} maxW={'2000px'}>
                    <BrowserRouter>
                        <Routes>
                            <Route element={<Navbar />}>
                                <Route path={pagesContent.home.url} element={<HomePage />} />
                                <Route path={pagesContent.play.url} element={<PlayPage />} />
                                <Route path={pagesContent.chat.url} element={<ChatPage />} />
                                <Route path={pagesContent.profile.url} element={<ProfilePage />} />
                            </Route>
                            <Route path="*" element={<PageNotFound />} />
                            <Route path={pagesContent.login.url} element={<SignInPage />} />
                        </Routes>
                    </BrowserRouter>
                </Box>
            </Center>
        </ChakraProvider>
    );
}

export default App;
