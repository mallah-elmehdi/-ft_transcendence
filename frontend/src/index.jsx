"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = require("react");
var client_1 = require("react-dom/client");
var theme_1 = require("./style/theme");
var react_2 = require("@chakra-ui/react");
// import {SignInPage} from "./pages/";
// import GamePage from "./pages/game.tsx";
var signin_tsx_1 = require("./pages/signin.tsx");
var root = client_1.default.createRoot(document.getElementById('root'));
root.render(<react_1.default.StrictMode>
        <react_2.ChakraProvider theme={theme_1.default}>
            <signin_tsx_1.default />
        </react_2.ChakraProvider>
    </react_1.default.StrictMode>);
