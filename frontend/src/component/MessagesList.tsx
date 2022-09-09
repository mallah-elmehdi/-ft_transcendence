import React, {useContext, useEffect, useRef} from 'react';
import {MessagesContext} from "../hooks/MessagingProvider";
import Message from "./Message";

const AlwaysScrollToBottom = () => {
    const elementRef = useRef();
    // @ts-ignore
    useEffect(() => elementRef.current.scrollIntoView());
    // @ts-ignore
    return <div ref={elementRef}/>;
};

function MessagesList() {
    const {messages} = useContext<any>(MessagesContext)
    return (
        <>
            {
                messages.map((item: any, id: any) =>
                    <Message key={id.toString()} isSender={item.isSender} content={item.content}/>
                )
            }
            <AlwaysScrollToBottom/>
        </>
    );
}

export default MessagesList;