import React, { useContext, useEffect, useState } from 'react'
import { Box, IconButton, Text, HStack, VStack, Spacer, Button, Tooltip, } from "@chakra-ui/react";
import { ChatContext } from '../State/ChatProvider';
import NewMember from './NewMember';
import { ArrowBackIcon, ArrowForwardIcon } from '@chakra-ui/icons';
import { GrIteration } from 'react-icons/gr';

type Props = {
  toggleNewMembers: () => void,
  roomId: string,
}

export default function AddMemebers({ toggleNewMembers, roomId }: Props) {
  const { data, friends, groups } = useContext<any>(ChatContext);
  const { members} = data;
  const membersId = members.findIndex((m: any) => m.id == roomId)
  const [selectedFriends, setSelectedFriends] = useState<any>([]);

  function addNewMembersHandler() {
    console.log(roomId, selectedFriends)
  }
  
  function isMember(id: any) {
    return members[membersId]?.membs?.findIndex((m: any) => m.id == id) == -1 ? false : true;

  }

  useEffect(() => {
    const keyDownHandler = (event: any) => {
      if (event.key === 'Escape') {
        event.preventDefault();
        toggleNewMembers()
      }
    };
    document.addEventListener('keydown', keyDownHandler);
    return () => {
      document.removeEventListener('keydown', keyDownHandler);
    };
  },);

  return (
    <VStack
      overflow={'auto'}
      position={'relative'}
      h={'100%'}
      w={'100%'}
    >
      <HStack
        overflow={'visible'}
        px={5} w={'100%'} m={0} spacing={8} >
        <Box as={'button'} >
          <ArrowBackIcon m={0} p={0} h={30} fontSize={25} onClick={toggleNewMembers} />
        </Box>
        <Text fontSize={20}>Add Members</Text>
      </HStack>
      <VStack
        pt={'1.5%'}
        h={'100%'}
        overflow={'auto'}
        w={'100%'} alignItems={'left'}>
        {
          friends.map((friend: any, key: any) => (
            !isMember(friend.id) ?
              <NewMember
                id={friend.id}
                name={friend.name}
                avatar={friend.avatar}
                addMe={setSelectedFriends}
                key={key.toString()}
              />
              : undefined
          ))
        }
      </VStack>
      {
        selectedFriends.length &&
        <Box
          position={'absolute'}
          right={4} bottom={4} rounded={30}
          onClick={addNewMembersHandler}
        >
          <Tooltip label='add Members' openDelay={500}>
            <IconButton
              fontSize={24} w={14} h={14} rounded={30} bg={'customPurple'} variant={'ghost'}
              aria-label={'add Members'}color={'white'} icon={<ArrowForwardIcon />}
            />
          </Tooltip>
        </Box>
      }
    </VStack>
  )
}
