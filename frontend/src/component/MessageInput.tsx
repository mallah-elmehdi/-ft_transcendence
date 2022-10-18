import React, { useContext, useEffect, useState } from "react";
import { HStack, Input, useColorModeValue } from "@chakra-ui/react";
import { IoSend } from "react-icons/io5";
import { ChatContext } from "../State/ChatProvider";
import { SOCKET } from "../constants";
import { io } from "socket.io-client";

const MessageInput = () => {
  const [typingMessage, setTypingMessage] = useState<any>("");
  const msgInputBg = useColorModeValue("white", "rgb(33,33,33)");
  const { socket } = useContext<any>(ChatContext);
  const { selectedChat } = useContext<any>(ChatContext);
  const { dispatch, state } = useContext<any>(ChatContext);
  const { newFriends, newGroups, roomDm } = state;
  const signedUser = 1;

  function sendMessageHandler() {
    if (typingMessage.trim()) {
      console.log("sendMessage: ", {
        room_id: roomDm,
        message: typingMessage.trim(),
        userId: signedUser,
      });
      
      socket.emit("message", {
        room_id: roomDm,
        message: typingMessage.trim(),
        userId: signedUser,
      });
    }
    setTypingMessage("");
  }

  useEffect(() => {
    const keyDownHandler = (event: any) => {
      if (event.key === "Enter") {
        event.preventDefault();
        sendMessageHandler();
      }
    };

    document.addEventListener("keydown", keyDownHandler);

    return () => {
      document.removeEventListener("keydown", keyDownHandler);
    };
  }, []);

  return (
    <>
      <HStack w={"100%"} m={5} h={"3em"} spacing={4}>
        <Input
          bg={msgInputBg}
          value={typingMessage}
          onChange={(m) => setTypingMessage(m.target.value)}
          focusBorderColor="none"
          border={"none"}
          placeholder="Message"
          w={"100%"}
        />
        <IoSend
          color={"rgb(132,119,218)"}
          onClick={sendMessageHandler}
          size={30}
        />
      </HStack>
    </>
  );
};

export default MessageInput;
