import React, {useContext, useEffect, useRef} from 'react';
import Message from "./Message";
import {ChatContext} from "../State/ChatProvider";
import {Box} from "@chakra-ui/react"

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
        <Box bottom={0} w={'100%'}>
            {
                messages.map((item: any, id: any) =>
                    <Message key={id.toString()} isSender={item.isSender} content={item.content} time={item.time}/>
                )
            }
            <AlwaysScrollToBottom/>
        </Box>
    );
}

export default MessagesList;