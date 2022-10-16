import React, { useContext, useEffect, useState } from "react";
import MainRoomDetails from "./MainRoomDetails";
import AddMemebers from "./AddMemebers";
import RoomSettings from "./RoomSettings";
import { ChatContext } from "../State/ChatProvider";

function RoomDetails() {
  const { dispatch, state } = useContext<any>(ChatContext);
  const { newMembers, newGroups } = state;
  const [isAdmin, setIsAdmin] = useState<any>(true);
  const [isOwner, setIsOwner] = useState<any>(true);

  const [newMembersDash, setNewMembers] = useState<any>(false);
  const { selectedChat } = useContext<any>(ChatContext);
//   const { data, friends, groups, setMembers } = useContext<any>(ChatContext);
  let searchIndex = newGroups.findIndex((id: any) => selectedChat.id === id.id);
  const [settings, setSettings] = useState<any>(false);

  const toggleNewMembers = () => {
    setNewMembers(!newMembersDash);
  };

  const toggleSettings = () => {
    setSettings(!settings);
  };
  return (
    <>
      {settings ? (
        <RoomSettings
          toggleSettings={toggleSettings}
          roomId={newGroups[searchIndex].id}
        />
      ) : newMembersDash ? (
        <AddMemebers
          toggleNewMembers={toggleNewMembers}
          roomId={newGroups[searchIndex].id}
        />
      ) : (
        <MainRoomDetails
          toggleNewMembers={toggleNewMembers}
          toggleSettings={toggleSettings}
          isAdmin={isAdmin}
          isOwner={isOwner}
        />
      )}
    </>
  );
}

export default RoomDetails;
