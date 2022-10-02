import React, { useState } from "react"
import { ContextMenu } from 'chakra-ui-contextmenu';
import { useColorModeValue, IconButton, Box, HStack, Avatar, Text, Button, ChakraProvider, Spacer } from '@chakra-ui/react';
import { MenuList, MenuItem } from '@chakra-ui/menu';
import { AiOutlineUserAdd, AiOutlineUserDelete } from "react-icons/ai"
import { BsClockHistory } from "react-icons/bs"

type Props = {
  key: string,
  name: string,
  avatar: string,
  isAdmin: boolean,
  id: string,
}

function ChannelMemeber({ id, key, name, avatar, isAdmin }: Props) {
  const value = useColorModeValue('blackAlpha.200', 'whiteAlpha.200');
  const [showIcon, setShowIcon] = useState<any>(false);
  const [hover, setHover] = useState<any>(false)
  function toggleHover() {
    setHover(!hover)
  }

  const removeMemeberHandler = () => {
    console.log('removeMemeberHandler: ', id)
  }
  const muteMemeberHandler = () => {
    console.log('muteMemeberHandler: ', id)
  }
  return (
    <HStack
      onMouseEnter={toggleHover}
      onMouseLeave={toggleHover}
      as={'button'}
      p={5}
      alignItems={'center'}
      rounded={5}
      h={'4.5em'}
      w={'100%'}
      _hover={{ bg: value }}
    >
      <Avatar name={name} src={avatar}></Avatar>
      <Text>{name}</Text>
      {
        hover &&
        <IconButton
          onClick={() => console.log('send friend request')}
          fontSize={18}
          rounded={30}
          color={'green'}
          variant={'ghost'}
          aria-label={'new channel'} icon={<AiOutlineUserAdd />}
        />
      }
      {
        hover &&
        (isAdmin &&
          <>
            <IconButton
              onClick={removeMemeberHandler}
              ml={14}
              fontSize={18}
              rounded={30}
              color={'red'}
              variant={'ghost'}
              aria-label={'new channel'} icon={<AiOutlineUserDelete />}
            />
            <IconButton
              onClick={muteMemeberHandler}
              ml={14}
              fontSize={18}
              rounded={30}
              color={'customPurple'}
              variant={'ghost'}
              aria-label={'new channel'} icon={<BsClockHistory />}
            />

          </>
        )
      }
    </HStack>
  )
}

export default ChannelMemeber;