import { Flex, useMediaQuery } from '@chakra-ui/react';
import React, { useContext, useEffect } from 'react';
import Messaging from './Messaging';
import { ChatContext } from '../State/ChatProvider';
import NewChannel from './NewChannel';
import ChatTabs from './ChatTabs';


const SideBar = () => {
    const { selectedChat } = useContext<any>(ChatContext);
    const { newChannel } = useContext<any>(ChatContext);

    return (
        <>
            <Flex
                w={['100%', '100%', '45%', '45%', '45%']}
                _light={{ boxShadow: 'md' }}
                _dark={{ boxShadow: 'dark-lg' }}
                rounded="30px"
                direction={'column'}
                alignItems={'center'}
                p={5}
                // overflow={'auto'}
                // h='100%'
            >
                {newChannel ? <NewChannel /> : !selectedChat ? <ChatTabs /> : <Messaging />}
            </Flex>
        </>
    );
};

export default SideBar;
