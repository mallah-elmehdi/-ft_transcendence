import * as React from 'react';
import { ChakraProvider } from '@chakra-ui/react';
import { ColorModeSwitcher } from './components/ColorModeSwitcher';
import { Routes, Route, BrowserRouter } from 'react-router-dom';

// THEME
import { theme } from './theme';

// COMPONENTS
import { Wrapper } from './components/Wrapper';

// PAGES
import { SignIn } from './pages/SignIn';

export const AppRoutes = () => (
    <ChakraProvider theme={theme}>
        <BrowserRouter>
            <Routes>
                <Route element={<Wrapper />}>
                    <Route path="/" element={<SignIn />} />
                </Route>
            </Routes>
        </BrowserRouter>
    </ChakraProvider>
);
