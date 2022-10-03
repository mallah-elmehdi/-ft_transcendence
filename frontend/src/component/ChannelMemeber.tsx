import React, { useState } from "react"
import { useColorModeValue, IconButton, HStack, Avatar, Text, Button, ChakraProvider, Spacer, InputGroup, InputRightAddon } from '@chakra-ui/react';
import { AiOutlineUserAdd, AiOutlineUserDelete } from "react-icons/ai"
import { BsClockHistory } from "react-icons/bs"

type Props = {
  name: string,
  avatar: string,
  isAdmin: boolean,
  id: string,
  onMute: () => void,
  setMember: (params: any)=> any;
}

function ChannelMemeber({ id, name, avatar, isAdmin, onMute, setMember }: Props) {
  const value = useColorModeValue('blackAlpha.200', 'whiteAlpha.200');
  const [hover, setHover] = useState<any>(false)
  function toggleIconsHover() {
    setHover(!hover)
  }

  const removeMemeberHandler = () => {
    console.log('removeMemeberHandler: ', id)
  }
  return (
    <HStack
      onMouseEnter={toggleIconsHover}
      onMouseLeave={toggleIconsHover}
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
              onClick={() => {
                toggleIconsHover()
                setMember(()=>{
                  return {
                    id: id,
                    name: name,
                  }
                })
                onMute()
              }}
              // onClick={onOpen}
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