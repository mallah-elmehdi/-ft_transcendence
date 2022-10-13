import React, { useContext, useEffect, useState } from 'react';
import MainRoomDetails from './MainRoomDetails';
import AddMemebers from './AddMemebers';
import RoomSettings from './RoomSettings';
import { ChatContext } from "../State/ChatProvider";

function RoomDetails() {
    const [isAdmin, setIsAdmin] = useState<any>(true);
    const [isOwner, setIsOwner] = useState<any>(true);

    const [newMembers, setNewMembers] = useState<any>(false)
    const { selectedChat } = useContext<any>(ChatContext);
    const { data,friends, groups } = useContext<any>(ChatContext);
    let searchIndex = groups.findIndex((id: any) => selectedChat.id === id.id);
    const [settings, setSettings] = useState<any>(false)

    const toggleNewMembers = () => {
        setNewMembers(!newMembers)
    }

    const toggleSettings = () => {
        setSettings(!settings)
    }

    return (
        <>
            {settings ? (
                <RoomSettings toggleSettings={toggleSettings} roomId={groups[searchIndex].id} />
            ) : newMembers ? (
                <AddMemebers toggleNewMembers={toggleNewMembers} roomId={groups[searchIndex].id} />
            ) : (
                <MainRoomDetails toggleNewMembers={toggleNewMembers} toggleSettings={toggleSettings} isAdmin={isAdmin} isOwner={isOwner} />
            )}
        </>
    );
}

export default RoomDetails;