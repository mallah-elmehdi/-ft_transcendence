import * as React from 'react';
import { useColorMode, useColorModeValue, IconButton, IconButtonProps, Flex, Spacer } from '@chakra-ui/react';
import { RiMoonClearFill, RiSunFill } from 'react-icons/ri';

type ColorModeSwitcherProps = Omit<IconButtonProps, 'aria-label'>;

export const ColorModeSwitcher: React.FC<ColorModeSwitcherProps> = (props) => {
    const { toggleColorMode } = useColorMode();
    const text = useColorModeValue('dark', 'light');
    const SwitchIcon = useColorModeValue(RiMoonClearFill, RiSunFill);

    return (
        <Flex w="100%">
            <Spacer />

            <IconButton
                size="lg"
                // p={3}
                fontSize="4xl"
                borderRadius="2xl"
                variant="ghost"
                color="current"
                onClick={toggleColorMode}
                icon={<SwitchIcon />}
                aria-label={`Switch to ${text} mode`}
                {...props}
            />
        </Flex>
    );
};
