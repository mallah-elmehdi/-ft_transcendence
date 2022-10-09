import React, { useContext, useEffect, useState } from 'react';
import { Box, IconButton, Text, HStack, VStack, Spacer, Button, Tooltip } from '@chakra-ui/react';
import { CloseIcon } from '@chakra-ui/icons';
import { ChatContext } from '../State/ChatProvider';
import { Image } from '@chakra-ui/react';
import { RiPencilLine } from 'react-icons/ri';
import ChannelMemeber from './ChannelMember';
import { AddIcon } from '@chakra-ui/icons';
import useMute from '../hooks/useMute';
import useBlock from '../hooks/useBlock';
import RemoveMember from './RemoveMember';
import MuteMember from './MuteMember';
import { ArrowBackIcon } from '@chakra-ui/icons';

type Props = {
    toggleNewMembers: () => void;
    toggleSettings: () => void;
    isAdmin: boolean;
    isOwner: boolean;
};
export default function MainRoomDetails({ toggleNewMembers, toggleSettings, isAdmin, isOwner }: Props) {
    const { toggleDetails } = useContext<any>(ChatContext);
    const { data } = useContext<any>(ChatContext);
    const { selectedChat } = useContext<any>(ChatContext);
    let searchIndex = data.groups.findIndex((id: any) => selectedChat.id === id.id);
    let membersIndex = data.members.findIndex((members: any) => selectedChat.id === members.id);
    const [member, setMember] = useState<any>(null);
    const { isMuteOpen, onMuteOpen, onMuteClose } = useMute();
    const { isBlockOpen, onBlockOpen, onBlockClose } = useBlock();

    const { friends } = data;
    function isFriend(id: any) {
        return friends.findIndex((f: any) => f.id == id) == -1 ? false : true;
    }

    useEffect(() => {
        const keyDownHandler = (event: any) => {
            if (event.key === 'Escape') {
                event.preventDefault();
                toggleDetails();
            }
        };
        document.addEventListener('keydown', keyDownHandler);
        return () => {
            document.removeEventListener('keydown', keyDownHandler);
        };
    });

    return (
        <VStack overflow={'auto'} w='100%' position={'relative'} h={'100%'}>
            <HStack overflow={'visible'} px={5} w={'100%'} m={1} spacing={8}>
                <Box as={'button'}>
                    <ArrowBackIcon m={0} p={0} h={30} fontSize={25} onClick={toggleDetails} />
                </Box>
                <Text fontSize={20}>Details</Text>
                <Spacer />
                {isOwner && (
                    <Tooltip label="Edit" openDelay={500}>
                        <Box rounded={'50em'} bg={'none'} as={Button} onClick={toggleSettings}>
                            <RiPencilLine fontSize={'1.2em'} />
                        </Box>
                    </Tooltip>
                )}
            </HStack>
            <VStack pt={'1.5%'} h={'100%'} overflow={'auto'} w={'100%'} alignItems={'left'}>
                <Image h="20em" src={data.groups[searchIndex].avatar} />
                <Text>Memebers</Text>
                {data.members[membersIndex].membs.map((member: any, index: any) => (
                    <ChannelMemeber
                        id={member.id}
                        name={member.name.toString()}
                        avatar={member.avatar}
                        key={index.toString()}
                        isAdmin={isAdmin}
                        isOwner={isOwner}
                        onBlock={onBlockOpen}
                        onMute={onMuteOpen}
                        setMember={setMember}
                        isFriend={isFriend(member.id)}
                        roomId={data.groups[searchIndex].id}
                    />
                ))}
            </VStack>
            <MuteMember isOpen={isMuteOpen} onClose={onMuteClose} name={member?.name} memberId={member?.id} roomId={data.groups[searchIndex].id} />
            <RemoveMember isOpen={isBlockOpen} onClose={onBlockClose} name={member?.name} memberId={member?.id} roomId={data.groups[searchIndex].id} />
            {isAdmin && (
                <Box onClick={toggleNewMembers} position={'absolute'} right={5} bottom={5} rounded={30}>
                    <Tooltip label="add Members" openDelay={500}>
                        <IconButton fontSize={16} w={14} h={14} rounded={30} bg={'green'} variant={'ghost'} aria-label={'new channel'} icon={<AddIcon />} />
                    </Tooltip>
                </Box>
            )}
        </VStack>
    );
}
