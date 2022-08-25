import {Avatar, AvatarBadge, Divider, Flex, Spacer, Text, useColorMode,} from "@chakra-ui/react";

export  default function ProfilePage() {
    return (
        <Flex
            w={'100%'}
            h={'100%'}
            mx={{base: 0,md: 0,lg:0}}
            pb={10}
            direction={{base: 'column',md: 'column',lg:'row'}}
            // bg={'green'}
        >
            <Flex
                w={['100%','100%','100%', '40%', '35%', '20%']}
                // h={'100%'}
                _light={{ boxShadow: 'md' }}
                _dark={{ boxShadow: 'dark-lg' }}
                rounded='30px'
                direction={"column"}
                justifyContent={"center"}
                alignItems={"center"}
            >
                <Flex
                    // w={'100%'}
                    // w={['100%','70%']}
                    // w={{base: '100%',md: '70%'}}
                    h={'100%'}
                    direction={'column'}
                    justifyContent={"center"}
                    alignItems={"center"}
                    // bg={'#aaaaaa'}
                    mt={'50px'}
                >
                    <Avatar
                        size={'xl'}
                        name={'Youssef Noam'}
                        // src={'https://cdn.intra.42.fr/users/ynoam.jpg'}
                    >
                        <AvatarBadge boxSize={'0.7em'} bg={'green'} />
                    </Avatar>
                    <Text
                        my={5}
                        fontSize={25}
                    >
                        Ynoam
                    </Text>
                    <Divider
                        border="1px"
                        bg={'white'}
                        w={40}
                    />
                    {/*<Spacer/>*/}
                </Flex>
                {/*<Spacer/>*/}
            </Flex>
            <Flex
                w={['100%','100%','100%', '65%', '70%', '80%']}
                h={'100%'}
                _light={{ boxShadow: 'md' }}
                _dark={{ boxShadow: 'dark-lg' }}
                rounded='30px'
                direction={"column"}
                justifyContent={"center"}
                alignItems={"center"}
            >
                Details
            </Flex>
        </Flex>
    )
}
