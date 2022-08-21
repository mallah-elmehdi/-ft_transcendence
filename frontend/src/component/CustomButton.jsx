"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = require("@chakra-ui/react");
function CustomButton(props) {
    return (<react_1.Button {...props.button}>
            {props.leading}
            {props.title}
        </react_1.Button>);
}
exports.default = CustomButton;
