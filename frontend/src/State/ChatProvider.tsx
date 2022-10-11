import React, { useState, createContext, useEffect } from 'react';
import { API } from "../constants";
import socketIOClient, {io} from "socket.io-client";
import axios from 'axios';
import Friends from '../hooks/useFriends';

// @ts-ignore
export const ChatContext = createContext();

type Props = {
    children: JSX.Element,
}

const ChatProvider = ({ children }: Props) => {
    // const socket = io(API + "dm" );
    
    const [newChannel, setNewChannel] = useState(false);
    const toggleNewChannel = () => {
        setNewChannel(!newChannel)
    }

    const [isSearch, setSearch] = useState(false);
    const toggleSearch = () => {
        setSearch(!isSearch)
    }

    const [selectedChat, setSelectedChat] = useState(null);
    const toggleOffSelectedChat = () => {
        setSelectedChat(null);
    }
    const [friends, setFriends] = useState<any>([
        { id: '1', name: 'User1', avatar: 'https://cdn.intra.42.fr/users/ynoam.jpg', },
        { id: '26', name: 'User1', avatar: 'https://cdn.intra.42.fr/users/ynoam.jpg', },
        { id: '27', name: 'User1', avatar: 'https://cdn.intra.42.fr/users/ynoam.jpg', },
        { id: '28', name: 'User1', avatar: 'https://cdn.intra.42.fr/users/ynoam.jpg', },
        { id: '29', name: 'User1', avatar: 'https://cdn.intra.42.fr/users/ynoam.jpg', },
        { id: '30', name: 'User1', avatar: 'https://cdn.intra.42.fr/users/ynoam.jpg', },
        { id: '31', name: 'User1', avatar: 'https://cdn.intra.42.fr/users/ynoam.jpg', },
    ]);
    // const f = Friends()
    
    useEffect(()=>{
        Friends(setFriends);
    }, [])
    // console.log(typeof f);
    // console.log(f[0]?.id);
    
    const [data, setData] = useState(
        {
            friends: friends,
            groups: [
                { id: '1', name: 'hhhGroup', avatar: 'https://source.unsplash.com/user/c_v_r/1900x800' },
                { id: '2', name: 'retardeds', avatar: 'https://source.unsplash.com/user/c_v_r/1900x800' },
                { id: '3', name: '1337', avatar: 'https://source.unsplash.com/user/c_v_r/1900x800' },
                { id: '5', name: 'Group6', avatar: 'https://source.unsplash.com/user/c_v_r/1900x800' },
                { id: '6', name: 'Group7', avatar: 'https://source.unsplash.com/user/c_v_r/1900x800' },
            ],
            members: [
                {
                    id: '1',
                    membs: [
                        { id: '12', name: 'User1', avatar: 'https://cdn.intra.42.fr/users/ynoam.jpg', },
                        { id: '109', name: 'User1', avatar: 'https://cdn.intra.42.fr/users/ynoam.jpg', },
                        { id: '106', name: 'User1', avatar: 'https://cdn.intra.42.fr/users/ynoam.jpg', },
                        { id: '23', name: 'User1', avatar: 'https://cdn.intra.42.fr/users/ynoam.jpg', },
                        { id: '104', name: 'User1', avatar: 'https://cdn.intra.42.fr/users/ynoam.jpg', },
                        { id: '106', name: 'User1', avatar: 'https://cdn.intra.42.fr/users/ynoam.jpg', },
                    ]
                },
            ]
        }
    )
    const [messages, setMessages] = useState([]);

    const [chatDetails, setChatDetails] = useState(false)
    const toggleDetails = () => {
        setChatDetails(!chatDetails)
    }
    
    return (
        <ChatContext.Provider
            value={{
                isSearch: isSearch,
                toggleSearch: toggleSearch,
                selectedChat: selectedChat,
                setSelectedChat: setSelectedChat,
                data: data,
                setData: setData,
                messages: messages,
                setMessages: setMessages,
                setChatDetails: setChatDetails,
                chatDetails: chatDetails,
                toggleDetails: toggleDetails,
                toggleOffSelectedChat: toggleOffSelectedChat,
                toggleNewChannel: toggleNewChannel,
                newChannel: newChannel,
                // socket: socket,
                friends: friends,
            }}
        >
            {children}
        </ChatContext.Provider>
    );

};

export default ChatProvider;