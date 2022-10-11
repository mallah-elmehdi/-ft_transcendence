import React, { useContext, useEffect, useRef } from "react";
import Message from "./Message";
import { ChatContext } from "../State/ChatProvider";
import { Box } from "@chakra-ui/react";

const AlwaysScrollToBottom = () => {
  const elementRef = useRef();
  // @ts-ignore
  useEffect(() => elementRef.current.scrollIntoView());
  // @ts-ignore
  return <div ref={elementRef} />;
};

function MessagesList() {
  const {selectedChat} = useContext<any>(ChatContext)
  const { messages, setMessages, socket } = useContext<any>(ChatContext);
  useEffect(() => {
    console.log("effect")
    socket.on("msgToClient", (obj: any) => {
      // console.log("Made it here")
      console.log(typeof obj)
      // console.log(obj.content);
      // if (selectedChat.chat === 'F' && selectedChat.id === obj.sender)
        setMessages((msgs :any)=>{
          return [
            ...msgs,
            {isSender: true, content: obj.content}
          ]
        })
    });

    return () => {
      // console.log('Leave ')
      socket.off("msgToClient");
    };
  }, [socket]);

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
