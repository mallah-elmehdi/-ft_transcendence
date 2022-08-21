"use strict";
var _a, _b;
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = require("@chakra-ui/react");
// import the default theme as base and add it to the heading and body in case of the Jua font not loaded
require("fontsource-jua");
var fonts = {
    heading: "Jua, ".concat((_a = react_1.theme.fonts) === null || _a === void 0 ? void 0 : _a.heading),
    body: "Jua, ".concat((_b = react_1.theme.fonts) === null || _b === void 0 ? void 0 : _b.body),
};
var colors = {
    white: '#FFFFFF',
    black: '#475772',
    green: '#A2CE73',
    red: '#EF9795',
};
var config = {};
var Card = {
    baseStyle: {
        display: 'flex',
        flexDirection: 'column',
        background: 'white',
        alignItems: 'center',
        gap: 6,
    },
    variants: {
        rounded: {
            padding: 8,
            borderRadius: 'xl',
            boxShadow: 'xl',
        },
        smooth: {
            padding: 6,
            borderRadius: 'base',
            boxShadow: 'md',
        },
    },
    defaultProps: {
        variant: 'smooth',
    },
};
var components = {
    Card: Card,
};
var theme = (0, react_1.extendTheme)({ fonts: fonts, colors: colors, config: config, components: components });
exports.default = theme;
