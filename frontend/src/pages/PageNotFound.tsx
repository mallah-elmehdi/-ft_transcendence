import React from "react"
import {
    Flex,
    Text

} from "@chakra-ui/react"

export  default function PageNotFound()
{
    return(
        <Flex
            alignItems={'center'}
            justifyContent={'center'}
            w={'100%'}
            h={'100%'}
        >
            <Text fontSize={40}>
                Opps, Page Not Found
            </Text>
        </Flex>
    )
}