import React from 'react';
import {Box, Center, ChakraProvider} from "@chakra-ui/react";
import theme from "./style/theme";
import {BrowserRouter, Navigate, Route, Routes} from "react-router-dom";
import Navbar from "./component/Navbar";
import SignInPage from "./pages/SignInPage";
import HomePage from "./pages/HomePage";
import PlayPage from "./pages/PlayPage";
import ChatPage from "./pages/ChatPage";
import ProfilePage from "./pages/ProfilePage";
import PageNotFound from "./pages/PageNotFound";

function App() {
    const isSignIn = true;
    return (
        <ChakraProvider theme={theme} >
            <Center>
                <Box
                    p={[1, 10, 10,10]}
                    h={'99vh'}
                    w={['100%','100%','100%','100%','100%', '95%' ]}
                    maxW={'2000px'}
                >
                    <BrowserRouter>
                        <Navbar isSignIn={isSignIn}/>
                        <Routes>
                            {/*<Route path={'/login'}  element={isSignIn ? <Navigate to={'/home'}/> : <SignInPage />} />*/}
                            {/*<Route path={'/'}       element={isSignIn ? <Navigate to={'/home'}/> : <SignInPage />} />*/}
                            <Route path={'/login'}  element={<SignInPage />} />
                            <Route path={'/'}       element={<HomePage />} />
                            <Route path={'/home'}   element={isSignIn ?  <HomePage /> : <Navigate to={'/login'}/> } />
                            <Route path={'/play'}   element={isSignIn ?  <PlayPage /> : <Navigate to={'/login'}/> } />
                            <Route path={'/chat'}   element={isSignIn ?  <ChatPage /> : <Navigate to={'/login'}/> } />
                            <Route path={'/profile'} element={isSignIn ?  <ProfilePage /> : <Navigate to={'/login'}/> } />
                            <Route path="*"         element={isSignIn ?  <PageNotFound /> : <Navigate to={'/login'}/> }/>
                        </Routes>
                    </BrowserRouter>
                </Box>
            </Center>
        </ChakraProvider>
    );
}

export default App;