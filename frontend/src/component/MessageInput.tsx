import React, { useContext, useEffect, useState } from "react";
import { HStack, Input, useColorModeValue } from "@chakra-ui/react";
import { IoSend } from "react-icons/io5";
import { ChatContext } from "../State/ChatProvider";

const MessageInput = () => {
  const [ typingMessage, setTypingMessage ] = useState<any>('');
  const msgInputBg = useColorModeValue("white", "rgb(33,33,33)");
  const { setMessages } = useContext<any>(ChatContext);
  const {  socket } = useContext<any>(ChatContext);
  const {selectedChat} = useContext<any>(ChatContext)

  function sendMessageHandler() {
    if (typingMessage.trim()) {
        // socket.emit("msgToServer", {sender: selectedChat.id, content: typingMessage });

        setMessages((messages: any) => {
          return [...messages, { isSender: true, content: typingMessage }];
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
      return () => {
        socket.off('msgToServer')
        // socket.close();
      };
    };

    document.addEventListener("keydown", keyDownHandler);

    return () => {
      document.removeEventListener("keydown", keyDownHandler);
    };
  }, []);

  return (
    <>
      <HStack
        w={"100%"}
        m={5}
        h={"3em"}
        spacing={4}
      >
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
