import {extendTheme, theme as base} from "@chakra-ui/react";
// import the default theme as base and add it to the heading and body in case of the Jua font not loaded
import "fontsource-jua"

const fonts = {
        heading: `Jua, ${base.fonts?.heading}`,
        body: `Jua, ${base.fonts?.body}`,
}
const colors = {
    // white: '#FFFFFF',
    // black: '#475772',
    // green: '#A2CE73',
    // red:   '#EF9795',
}

const config = {
}

const Card = {
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
}

const components = {
    Card,
}
const theme = extendTheme({fonts, colors, config, components});

export default theme;