import * as React from 'react';
import { ChakraProvider } from '@chakra-ui/react';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import { pagesContent } from './constants';

// FONT
import '@fontsource/jua/400.css';

// THEME
import { theme } from './theme';

// COMPONENTS
import { Wrapper } from './components/Wrapper';
import { UserWrapper } from './components/UserWrapper';

// PAGES
import { SignIn } from './pages/SignIn';
import { Home } from './pages/Home';
import { Profile } from './pages/Profile';
import { Chat } from './pages/Chat';
import { Game } from './pages/Game';

export const AppRoutes = () => (
    <ChakraProvider theme={theme}>
        <BrowserRouter>
            <Routes>
                <Route element={<Wrapper />}>
                    <Route path={pagesContent.signIn.url} element={<SignIn />} />
                    <Route element={<UserWrapper />}>
                        <Route path={pagesContent.home.url} element={<Home />} />
                        <Route path={pagesContent.profile.url} element={<Profile />} />
                        <Route path={pagesContent.chat.url} element={<Chat />} />
                        <Route path={pagesContent.play.url} element={<Game />} />
                    </Route>
                </Route>
            </Routes>
        </BrowserRouter>
    </ChakraProvider>
);
