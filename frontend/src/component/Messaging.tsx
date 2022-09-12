import React, {useContext} from "react";
import {ChatContext} from "../hooks/ChatProvider";
import ProfileDetails from "./ProfileDetails";
import MessagingBox from "./MessagingBox";

const Messaging = () => {
    const {chatDetails} = useContext<any>(ChatContext)
    return (
        <>
            {!chatDetails ? <MessagingBox/> : <ProfileDetails/>}
        </>
    );
};

export default Messaging;