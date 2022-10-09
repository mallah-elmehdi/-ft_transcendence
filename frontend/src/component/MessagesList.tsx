import React, { useContext, useEffect, useRef } from "react";
import Message from "./Message";
import { ChatContext } from "../State/ChatProvider";
import { Box } from "@chakra-ui/react";
import io from "socket.io-client";
import { API } from "../constants";

const AlwaysScrollToBottom = () => {
  const elementRef = useRef();
  // @ts-ignore
  useEffect(() => elementRef.current.scrollIntoView());
  // @ts-ignore
  return <div ref={elementRef} />;
};

function MessagesList() {
//   const socket = io(API + "dm");
  const { messages, setMessages, socket } = useContext<any>(ChatContext);
  useEffect(() => {
    // socket.on("msgToClient", (data: any) => {
    //   console.log(data);
    // });
    // return () => {
    //   socket.off("msgToServer");
    // };
  }, []);

  return (
    <Box bottom={0} w={"100%"}>
      {messages.map((item: any, id: any) => (
        <Message
          key={id.toString()}
          isSender={item.isSender}
          content={item.content}
          time={item.time}
        />
      ))}
      <AlwaysScrollToBottom />
    </Box>
  );
}

export default MessagesList;
