import React from 'react';
import { Box, Center, ChakraProvider } from '@chakra-ui/react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Navbar from './component/Navbar';
import ChatPage from './pages/ChatPage';
import HomePage from './pages/HomePage';
import PlayPage from './pages/PlayPage';
import SignInPage from './pages/SignInPage';
import theme from './style/theme';
// import ProfilePage from './pages/ProfilePage-dup';
import PageNotFound from './pages/PageNotFound';
import ProfilePage from './pages/ProfilePage';

// CONSTANTS
import { pagesContent } from './constants';
import GlobalContextProvider from './State/GlobalProvider';

function App() {
    return (
        <GlobalContextProvider>
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
                                <Route path={pagesContent.login.url} element={<SignInPage />} />
                                <Route path="*" element={<PageNotFound />} />
                            </Routes>
                        </BrowserRouter>
                    </Box>
                </Center>
            </ChakraProvider>
        </GlobalContextProvider>
    );
}

export default App;
