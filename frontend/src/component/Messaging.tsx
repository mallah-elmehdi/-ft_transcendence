import React, { useContext } from "react";
import { ChatContext } from "../State/ChatProvider";
import ProfileDetails from "./ProfileDetails";
import MessagingBox from "./MessagingBox";
import RoomDetails from "./RoomDetails";
import { useTheme, useMediaQuery } from "@chakra-ui/react";

const Messaging = () => {
  const { chatDetails, selectedChat } = useContext<any>(ChatContext);
  const theme = useTheme();
  const [isSmallScreen] = useMediaQuery(`(min-width: ${theme.breakpoints.md})`);
  return (
    <>
      {!isSmallScreen &&
        (!chatDetails ? (
          <MessagingBox />
        ) : selectedChat.chat === "F" ? (
          <ProfileDetails />
        ) : (
          <RoomDetails />
        ))}
    </>
  );
};

export default Messaging;
