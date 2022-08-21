"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var PonGame_png_1 = require("../assets/PonGame.png");
var react_1 = require("@chakra-ui/react");
function Logo(props) {
    return (<react_1.Image src={PonGame_png_1.default} width={"200px"} {...props}></react_1.Image>);
}
exports.default = Logo;
