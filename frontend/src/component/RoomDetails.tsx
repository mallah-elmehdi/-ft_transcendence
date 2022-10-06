import React, { useContext, useEffect, useState } from 'react';
import MainRoomDetails from './MainRoomDetails';
import AddMemebers from './AddMemebers';
import RoomSettings from './RoomSettings';
import { ChatContext } from "../State/ChatProvider";

function RoomDetails() {
    const [newMembers, setNewMembers] = useState<any>(true)
    const toggleNewMembers = () => {
        setNewMembers(!newMembers)
    }
    const { selectedChat } = useContext<any>(ChatContext);
    const { data } = useContext<any>(ChatContext);
    let searchIndex = data.groups.findIndex((id: any) => selectedChat.id === id.id);

    const [settings, setSettings] = useState<any>(false)
    const toggleSettings = () => {
        setSettings(!settings)
    }

    return (
        <>
            {
                settings ?
                    <RoomSettings
                        toggleSettings={toggleSettings}
                     /> :
                    newMembers ?
                        <AddMemebers
                            toggleNewMembers={toggleNewMembers}
                            roomId={data.groups[searchIndex].id}
                         />
                        : <MainRoomDetails
                            toggleNewMembers={toggleNewMembers}
                            toggleSettings={toggleSettings}
                        />
            }
        </>
    );
}

export default RoomDetails;