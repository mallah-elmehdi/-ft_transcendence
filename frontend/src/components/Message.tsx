import * as React from 'react';
import { Box, Text } from '@chakra-ui/react';

// type
type Props = {
    children: string;
    isSent: boolean;
};

export const Message = ({ children, isSent }: Props) => {
    return (
        <Box
            w="fit-content"
            maxW="45%"
            alignSelf={isSent ? 'flex-start' : 'flex-end'}
            fontSize="lg"
            pt={3}
            pb={2}
            px={2}
            bg={isSent ? 'primary' : 'secondary'}
            color="black"
            sx={
                isSent
                    ? {
                          borderTopRightRadius: '2xl',
                          borderTopLeftRadius: '2xl',
                          borderBottomRightRadius: '2xl',
                          borderBottomLeftRadius: 'sm',
                      }
                    : {
                          borderTopRightRadius: 'sm',
                          borderTopLeftRadius: '2xl',
                          borderBottomLeftRadius: '2xl',
                          borderBottomRightRadius: '2xl',
                      }
            }
        >
            <Text textTransform="none" lineHeight={1.2} fontWeight="bold">
                {children}
            </Text>
        </Box>
    );
};
