import React, { useState, createContext } from 'react';

// @ts-ignore
export const MessagesContext = createContext();

type Props = {
    children: JSX.Element,
}

const MessagingContext = ({ children }: Props) => {
    // const [message, set]
    return (
        <MessagesContext.Provider
            value={{
            }}
        >
            {children}
        </MessagesContext.Provider>
    );

};

export default MessagingContext;