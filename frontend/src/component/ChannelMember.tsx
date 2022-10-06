import React, { useContext, useState } from "react"
import { useColorModeValue,Button, IconButton, HStack, Avatar, Text, } from '@chakra-ui/react';
import { AiOutlineUserAdd, AiOutlineUserDelete } from "react-icons/ai"
import { BsClockHistory } from "react-icons/bs"
import { CheckIcon } from "@chakra-ui/icons"
import { ChatContext } from "../State/ChatProvider";

type Props = {
  name: string,
  avatar: string,
  isAdmin: boolean,
  isFriend: boolean,
  id: string,
  onMute: () => void,
  onBlock: () => void,
  setMember: (params: any) => any;

}

function ChannelMemeber({ id, name, avatar, isAdmin, onMute, onBlock, setMember, isFriend }: Props) {
  const value = useColorModeValue('blackAlpha.200', 'whiteAlpha.200');
  const [hover, setHover] = useState<any>(false)

  const sendFriendReq = () => {
    console.log('send Fiend Req to user id : ', id)
  }


  return (
    <HStack
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      // as={Button}
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
        < IconButton
          onClick={isFriend ? undefined : sendFriendReq}
          fontSize={18} rounded={30} color={'green'} variant={'ghost'}
          aria-label={'new channel'} icon={isFriend ? <CheckIcon /> : <AiOutlineUserAdd />}
        />
      }
      {
        hover &&
        (isAdmin &&
          <>
            <IconButton
              onClick={() => {
                setHover(false)
                setMember(() => {
                  return { id: id, name: name, }
                })
                onBlock()
              }}
              ml={14} fontSize={18} rounded={30} color={'red'} variant={'ghost'}
              aria-label={'new channel'} icon={<AiOutlineUserDelete />}
            />
            <IconButton
              onClick={() => {
                setHover(false)
                setMember(() => {
                  return {
                    id: id,
                    name: name,
                  }
                })
                onMute()
              }}
              ml={14} fontSize={18} rounded={30} color={'customPurple'} variant={'ghost'}
              aria-label={'new channel'} icon={<BsClockHistory />}
            />
          </>
        )
      }
    </HStack>
  )
}

export default ChannelMemeber;