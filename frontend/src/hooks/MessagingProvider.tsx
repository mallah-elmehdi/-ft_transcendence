import React, { useState, createContext } from 'react';

// @ts-ignore
export const MessagesContext = createContext();

type Props = {
    children: JSX.Element,
}

const MessagingProvider = ({ children }: Props) => {
    const [typingMessage, setTypingMessage] = useState('');
    const [messages, setMessages] = useState([
        // {isSender: true, content: 'blabla'},
        // {isSender: true, content: 'blabla'},
        // {isSender: true, content: 'blabla'},
        // {isSender: true, content: 'blabla'},
        // {isSender: false, content: 'blabla'},
        // {isSender: false, content: 'blabla'},
        // {isSender: false, content: 'blabla'},
        // {isSender: false, content: 'blabla'},
    ]);
    // setTypingMessage('lkjjlkkjjlkjlkjlkj')

    return (
        <MessagesContext.Provider
            value={{
                typingMessage: typingMessage,
                setTypingMessage: setTypingMessage,
                messages: messages,
                setMessages: setMessages,
            }}
        >
            {children}
        </MessagesContext.Provider>
    );

};

export default MessagingProvider;