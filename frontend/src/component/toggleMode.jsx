"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = require("@chakra-ui/react");
var icons_1 = require("@chakra-ui/icons");
function ToggleMode(props) {
    return (<react_1.Box onClick={props.toggleColorMode}>
            {props.colorMode === 'light' ? <icons_1.MoonIcon w={6} h={6}/> : <icons_1.SunIcon w={6} h={6}/>}
        </react_1.Box>);
}
exports.default = ToggleMode;
