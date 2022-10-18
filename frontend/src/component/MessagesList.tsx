import React, { useContext, useEffect, useRef } from "react";
import Message from "./Message";
import { ChatContext } from "../State/ChatProvider";
import { Box } from "@chakra-ui/react";
import axios from "axios";
import { MESSAGES } from "../constants";

const AlwaysScrollToBottom = () => {
  const elementRef = useRef();
  // @ts-ignore
  useEffect(() => elementRef.current.scrollIntoView());
  // @ts-ignore
  return <div ref={elementRef} />;
};

function MessagesList() {
  const { selectedChat } = useContext<any>(ChatContext);
  const { dispatch, state } = useContext<any>(ChatContext);
  const { newFriends, newGroups, roomDm, messages } = state;
  const signedUSer = 1;

  useEffect(() => {
    axios
      .get(MESSAGES + roomDm)
      .then((res: any) => {
        dispatch({
          type: "SET_MESSAGES",
          data: res.data,
        });
      })
      .catch((err) => {
        console.log(err);
      });
  }, [roomDm]);

  return (
    <Box bottom={0} w={"100%"}>
      {messages.map((item: any, id: any) => (
        <Message
          key={id.toString()}
          isSender={item.userId == signedUSer}
          content={item.message}
          time={"12:00"}
        />
      ))}
      <AlwaysScrollToBottom />
    </Box>
  );
}

export default MessagesList;
