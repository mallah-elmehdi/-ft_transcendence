import React, { useContext, useEffect } from "react";
import { motion } from "framer-motion";
import {
  Button,
  Flex,
  HStack,
  IconButton,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs as ChakraTabs,
  Text,
  Tooltip,
  useColorModeValue,
  VStack,
} from "@chakra-ui/react";
import { Avatar as ChakraAvatar } from "@chakra-ui/avatar";
import { ChatContext } from "../State/ChatProvider";
import { AddIcon, CheckIcon } from "@chakra-ui/icons";
import FloatingActionButton from "./FloatingActionButton";
import useFriends from "../api/useFriends";
import useGroups from "../api/useGroups";
import useAllUsers from "../api/useAllUsers";
import { AiOutlineUserAdd } from "react-icons/ai";
import axios from "axios";
import { FRIENDS_URL, FRIEND_REQ, USER_URL } from "../constants";

function Tabs() {
  const value = useColorModeValue("blackAlpha.200", "whiteAlpha.200");
  const { setSelectedChat } = useContext<any>(ChatContext);
  const { friends, setFriends, groups } = useContext<any>(ChatContext);
  const { allUsers, setAllUsers } = React.useContext<any>(ChatContext);
  const { dispatch, state } = useContext<any>(ChatContext);
  const { newFriends, users } = state;
//   useEffect(() => {
//     axios.get(FRIENDS_URL).then((response: any) => {
//       for (var i = 0; i < response.data.length; i++) {
//         axios.get(USER_URL + response.data[i].friendId).then((res: any) => {
//           dispatch({
//             type: "ADD_FRIEND",
//             data: {
//               id: res.data.user_id,
//               name: res.data.user_name,
//               avatar: res.data.user_avatar,
//             },
//           });
//         });
//       }
//     });
//   }, []);

//   useFriends();
  useGroups();
  useAllUsers();

  function isFriend(id: any) {
    return newFriends.findIndex((f: any) => f.id == id) == -1 ? false : true;
  }

  function sendFriendReq(id: any) {
    //   console.log("user", users)
    const user = users.find((element:any) => element.user_id == id)
    axios
      .post(FRIEND_REQ + id)
      .then((res) => {
        dispatch({
            type: "ADD_FRIEND",
            data: {
                id: user.user_id,
                name: user.user_name,
                avatar: user.user_avatar,
            },
        })
      })
      .catch((err) => {
        console.log(err);
      });
  }

  return (
    <ChakraTabs
      as={motion.div}
      initial={{ opacity: 0, scale: 0.99 }}
      animate={{ y: 0, opacity: 1, scale: 1 }}
      exit={{ transition: { duration: 0.1 }, opacity: 0, scale: 0.99 }}
      pt={3}
      w={"90%"}
      h={"99%"}
      m={0}
      overflow={"hidden"}
      align="center"
      _selected={{ color: "pink" }}
      position={"relative"}
    >
      <TabList>
        <Tab _selected={{ color: "red" }}>
          <Text fontSize={20}>Friends</Text>
        </Tab>
        <Tab _selected={{ color: "red" }}>
          <Text fontSize={20}>Channels</Text>
        </Tab>
        <Tab _selected={{ color: "red" }}>
          <Text fontSize={20}>All Users</Text>
        </Tab>
      </TabList>
      <TabPanels h={"100%"} p={2}>
        <TabPanel overflow={"auto"} h={"100%"} w={"100%"} m={0} p={0}>
          <VStack pb={10} spacing={0} w={"100%"}>
            {newFriends.length ? (
              newFriends.map((friend: any, index: any) => (
                <HStack
                  as={"button"}
                  p={5}
                  alignItems={"center"}
                  _hover={{ bg: value }}
                  rounded={5}
                  h={"4.5em"}
                  w={"100%"}
                  key={index.toString()}
                  onClick={() => {
                    setSelectedChat({ chat: "F", id: friend.id });
                  }}
                >
                  <ChakraAvatar
                    name={friend.name.toString()}
                    src={friend.avatar.toString()}
                  ></ChakraAvatar>
                  <Text>
                    {friend.name.length > 10
                      ? friend.name.slice(0, 10) + "..."
                      : friend.name}
                  </Text>
                </HStack>
              ))
            ) : (
              <Flex h={"100%"} justifyContent={"center"} alignItems={"center"}>
                <Text>No friends yet</Text>
              </Flex>
            )}
          </VStack>
        </TabPanel>
        <TabPanel h={"100%"} w={"100%"} m={0} p={0} overflow={"auto"}>
          <VStack pb={10} spacing={0} w={"100%"}>
            {groups.length ? (
              groups.map((group: any, index: any) => (
                <HStack
                  onClick={() => {
                    setSelectedChat({ chat: "G", id: group.id });
                  }}
                  as={"button"}
                  p={5}
                  alignItems={"center"}
                  _hover={{ bg: value }}
                  rounded={5}
                  h={"4.5em"}
                  w={"100%"}
                  key={index.toString()}
                >
                  <ChakraAvatar
                    name={group.name.toString()}
                    src={group.avatar}
                  ></ChakraAvatar>
                  <Text>
                    {group.name.length > 10
                      ? group.name.slice(0, 10) + "..."
                      : group.name}
                  </Text>
                </HStack>
              ))
            ) : (
              <Flex h={"100%"} justifyContent={"center"} alignItems={"center"}>
                <Text>No channels yet</Text>
              </Flex>
            )}
          </VStack>
        </TabPanel>
        <TabPanel h={"100%"} w={"100%"} m={0} p={0} overflow={"auto"}>
          <VStack pb={10} spacing={0} w={"100%"}>
            {users.length ? (
              users.map((user: any, index: any) =>
                !isFriend(user.user_id) ? (
                  <HStack
                    // onClick={() => {
                    //     setSelectedChat({ chat: 'G', id: user.user_id });
                    // }}
                    // as={'button'}
                    p={5}
                    alignItems={"center"}
                    _hover={{ bg: value }}
                    rounded={5}
                    h={"4.5em"}
                    w={"100%"}
                    key={index.toString()}
                  >
                    <ChakraAvatar
                      name={user.user_name.toString()}
                      src={user.user_avatar}
                    ></ChakraAvatar>
                    <Text>
                      {user.user_name.length > 10
                        ? user.user_name.slice(0, 10) + "..."
                        : user.user_name}
                    </Text>
                    <Tooltip label={"send Friend request"} openDelay={500}>
                      <IconButton
                        onClick={() => {
                          sendFriendReq(user.user_id);
                          setFriends((old: any) => {
                            return [
                              ...old,
                              {
                                id: user.user_id,
                                name: user.user_name,
                                avatar: user.user_avatar,
                              },
                            ];
                          });
                        }}
                        fontSize={18}
                        rounded={30}
                        color={"green"}
                        variant={"ghost"}
                        aria-label={"new channel"}
                        icon={<AiOutlineUserAdd />}
                      />
                    </Tooltip>
                  </HStack>
                ) : undefined
              )
            ) : (
              <Flex h={"100%"} justifyContent={"center"} alignItems={"center"}>
                <Text>No Users yet</Text>
              </Flex>
            )}
          </VStack>
        </TabPanel>
        <FloatingActionButton />
      </TabPanels>
    </ChakraTabs>
  );
}

export default Tabs;
