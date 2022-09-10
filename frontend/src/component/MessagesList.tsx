import React, {useContext, useEffect, useRef} from 'react';
import Message from "./Message";
import {ChatContext} from "../hooks/ChatProvider";

const AlwaysScrollToBottom = () => {
    const elementRef = useRef();
    // @ts-ignore
    useEffect(() => elementRef.current.scrollIntoView());
    // @ts-ignore
    return <div ref={elementRef}/>;
};

function MessagesList() {
    const {messages} = useContext<any>(ChatContext)
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