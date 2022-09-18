import React, {useContext} from "react";
import {ChatContext} from "../State/ChatProvider";
import ProfileDetails from "./ProfileDetails";
import MessagingBox from "./MessagingBox";
import ChannelDetails from "./ChannelDetails";

const Messaging = () => {
    const {chatDetails, selectedChat} = useContext<any>(ChatContext)
    return (
        <>
            {!chatDetails ?
                <MessagingBox/> :
                selectedChat.chat === 'F' ?
                    <ProfileDetails/> :
                    <ChannelDetails/>
            }
        </>
    );
};

export default Messaging;