import React, { useContext } from "react";
import { Text, Flex, Show, Hide } from "@chakra-ui/react";
import SideBar from "../component/SideBar";
import ChatProvider, { ChatContext } from "../State/ChatProvider";
import Messaging from "../component/Messaging";
import WideMessaging from "../component/WideMessaging";

export default function ChatPage() {
  return (
    <ChatProvider>
      <Flex
        w={"100%"}
        h={"98%"}
        mx={{ base: 0, md: 0, lg: 0 }}
        pb={10}
        direction={"row"}
        justifyContent={'center'}
      >
        <SideBar />
      </Flex>
    </ChatProvider>
  );
}
