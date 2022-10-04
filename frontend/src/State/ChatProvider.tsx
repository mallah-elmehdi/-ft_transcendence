import React, { useState, createContext } from 'react';

// @ts-ignore
export const ChatContext = createContext();

type Props = {
    children: JSX.Element,
}

const ChatProvider = ({ children }: Props) => {
    const [newChannel, setNewChannel] = useState(false);
    const toggleNewChannel = () => {
        setNewChannel(!newChannel)
    }
    const [isSearch, setSearch] = useState(false);
    const [selectedChat, setSelectedChat] = useState(null);
    const toggleOffSelectedChat = () => {
        setSelectedChat(null);
    }
    const toggleSearch = () => {
        setSearch(!isSearch)
    }
    const [data, setData] = useState(
        {
            friends: [
                { id: '1', name: 'User1', avatar: 'https://cdn.intra.42.fr/users/ynoam.jpg', },
                { id: '2', name: 'User2', avatar: 'https://cdn.intra.42.fr/users/ynoam.jpg', },
                { id: '3', name: 'User3', avatar: 'https://cdn.intra.42.fr/users/ynoam.jpg', },
                { id: '4', name: 'User5', avatar: 'https://cdn.intra.42.fr/users/ynoam.jpg', },
                { id: '5', name: 'User6', avatar: 'https://cdn.intra.42.fr/users/ynoam.jpg', },
                { id: '6', name: 'User7', avatar: 'https://cdn.intra.42.fr/users/ynoam.jpg', },
                { id: '7', name: 'User8', avatar: 'https://cdn.intra.42.fr/users/ynoam.jpg', },
                { id: '8', name: 'User9', avatar: 'https://cdn.intra.42.fr/users/ynoam.jpg', },
                { id: '9', name: 'User10', avatar: 'https://cdn.intra.42.fr/users/ynoam.jpg', },
                { id: '10', name: 'User1', avatar: 'https://cdn.intra.42.fr/users/ynoam.jpg', },
                { id: '11', name: 'User1', avatar: 'https://cdn.intra.42.fr/users/ynoam.jpg', },
                { id: '12', name: 'User1', avatar: 'https://cdn.intra.42.fr/users/ynoam.jpg', },
                { id: '13', name: 'User1', avatar: 'https://cdn.intra.42.fr/users/ynoam.jpg', },
                { id: '14', name: 'User1', avatar: 'https://cdn.intra.42.fr/users/ynoam.jpg', },
                { id: '15', name: 'User1', avatar: 'https://cdn.intra.42.fr/users/ynoam.jpg', },
                { id: '16', name: 'User1', avatar: 'https://cdn.intra.42.fr/users/ynoam.jpg', },
                { id: '17', name: 'User1', avatar: 'https://cdn.intra.42.fr/users/ynoam.jpg', },
                { id: '18', name: 'User1', avatar: 'https://cdn.intra.42.fr/users/ynoam.jpg', },
                { id: '19', name: 'User1', avatar: 'https://cdn.intra.42.fr/users/ynoam.jpg', },
                { id: '20', name: 'User1', avatar: 'https://cdn.intra.42.fr/users/ynoam.jpg', },
                { id: '21', name: 'User1', avatar: 'https://cdn.intra.42.fr/users/ynoam.jpg', },
                { id: '22', name: 'User1', avatar: 'https://cdn.intra.42.fr/users/ynoam.jpg', },
                { id: '23', name: 'User1', avatar: 'https://cdn.intra.42.fr/users/ynoam.jpg', },
                { id: '24', name: 'User1', avatar: 'https://cdn.intra.42.fr/users/ynoam.jpg', },
                { id: '25', name: 'User1', avatar: 'https://cdn.intra.42.fr/users/ynoam.jpg', },
                { id: '26', name: 'User1', avatar: 'https://cdn.intra.42.fr/users/ynoam.jpg', },
                { id: '27', name: 'User1', avatar: 'https://cdn.intra.42.fr/users/ynoam.jpg', },
                { id: '28', name: 'User1', avatar: 'https://cdn.intra.42.fr/users/ynoam.jpg', },
                { id: '29', name: 'User1', avatar: 'https://cdn.intra.42.fr/users/ynoam.jpg', },
                { id: '30', name: 'User1', avatar: 'https://cdn.intra.42.fr/users/ynoam.jpg', },
                { id: '31', name: 'User1', avatar: 'https://cdn.intra.42.fr/users/ynoam.jpg', },
            ],
            groups: [
                { id: '1', name: 'hhhGroup', avatar: 'https://source.unsplash.com/user/c_v_r/1900x800' },
                { id: '2', name: 'retardeds', avatar: 'https://source.unsplash.com/user/c_v_r/1900x800' },
                { id: '3', name: '1337', avatar: 'https://source.unsplash.com/user/c_v_r/1900x800' },
                { id: '4', name: 'test', avatar: 'https://source.unsplash.com/user/c_v_r/1900x800' },
                { id: '5', name: 'jotenhaten', avatar: 'https://source.unsplash.com/user/c_v_r/1900x800' },
                { id: '5', name: 'blabla', avatar: 'https://source.unsplash.com/user/c_v_r/1900x800' },
                { id: '5', name: 'group-n1', avatar: 'https://source.unsplash.com/user/c_v_r/1900x800' },
                { id: '5', name: 'pongers', avatar: 'https://source.unsplash.com/user/c_v_r/1900x800' },
                { id: '5', name: 'hh1hh', avatar: 'https://source.unsplash.com/user/c_v_r/1900x800' },
                { id: '5', name: 'Group5', avatar: 'https://source.unsplash.com/user/c_v_r/1900x800' },
                { id: '5', name: 'Group5', avatar: 'https://source.unsplash.com/user/c_v_r/1900x800' },
                { id: '5', name: 'Group5', avatar: 'https://source.unsplash.com/user/c_v_r/1900x800' },
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
    const [typingMessage, setTypingMessage] = useState('');
    const [messages, setMessages] = useState([
        { isSender: false, content: 'lkjlkjlkjjlkkjlkkjlkkjlkjlkjlkjlkjjlkkjlkj', time: '12:00' },
        { isSender: true, content: 'lkjlkjlkjjlkkjlkkjlkkjlkjlkjlkjlkjjlkkjlkj', time: '12:00' },
        { isSender: true, content: 'lkjlkjlkjjlkkjlkkjlkkjlkjlkjlkjlkjjlkkjlkj', time: '12:00' },
        { isSender: true, content: 'lkjlkjlkjjlkkjlkkjlkkjlkjlkjlkjlkjjlkkjlkj', time: '12:00' },
        { isSender: true, content: 'lkjlkjlkjjlkkjlkkjlkkjlkjlkjlkjlkjjlkkjlkj', time: '12:00' },
        { isSender: true, content: 'lkjlkjlkjjlkkjlkkjlkkjlkjlkjlkjlkjjlkkjlkj', time: '12:00' },
        { isSender: true, content: 'lkjlkjlkjjlkkjlkkjlkkjlkjlkjlkjlkjjlkkjlkj', time: '12:00' },
        { isSender: true, content: 'lkjlkjlkjjlkkjlkkjlkkjlkjlkjlkjlkjjlkkjlkj', time: '12:00' },
        { isSender: true, content: 'lkjlkjlkjjlkkjlkkjlkkjlkjlkjlkjlkjjlkkjlkj', time: '12:00' },
        { isSender: true, content: 'lkjlkjlkjjlkkjlkkjlkkjlkjlkjlkjlkjjlkkjlkj', time: '12:00' },
        { isSender: false, content: 'lkjlkjlkjjlkkjlkkjlkkjlkjlkjlkjlkjjlkkjlkj', time: '12:00' },
        { isSender: false, content: 'lkjlkjlkjjlkkjlkkjlkkjlkjlkjlkjlkjjlkkjlkj', time: '12:00' },
        { isSender: true, content: 'lkjlkjlkjjlkkjlkkjlkkjlkjlkjlkjlkjjlkkjlkj', time: '12:00' },
        { isSender: false, content: 'lkjlkjlkjjlkkjlkkjlkkjlkjlkjlkjlkjjlkkjlkj', time: '12:00' },
        { isSender: true, content: 'lkjlkjlkjjlkkjlkkjlkkjlkjlkjlkjlkjjlkkjlkj', time: '12:00' },
        { isSender: false, content: 'lkjlkjlkjjlkkjlkkjlkkjlkjlkjlkjlkjjlkkjlkj', time: '12:00' },
        { isSender: true, content: 'lkjlkjlkjjlkkjlkkjlkkjlkjlkjlkjlkjjlkkjlkj', time: '12:00' },
        { isSender: false, content: 'lkjlkjlkjjlkkjlkkjlkkjlkjlkjlkjlkjjlkkjlkj', time: '12:00' },
        { isSender: true, content: 'lkjlkjlkjjlkkjlkkjlkkjlkjlkjlkjlkjjlkkjlkj', time: '12:00' },
        { isSender: false, content: 'lkjlkjlkjjlkkjlkkjlkkjlkjlkjlkjlkjjlkkjlkj', time: '12:00' },
        { isSender: true, content: 'lkjlkjlkjjlkkjlkkjlkkjlkjlkjlkjlkjjlkkjlkj', time: '12:00' },
        { isSender: false, content: 'lkjlkjlkjjlkkjlkkjlkkjlkjlkjlkjlkjjlkkjlkj', time: '12:00' },
        { isSender: true, content: 'lkjlkjlkjjlkkjlkkjlkkjlkjlkjlkjlkjjlkkjlkj', time: '12:00' },
        { isSender: false, content: 'lkjlkjlkjjlkkjlkkjlkkjlkjlkjlkjlkjjlkkjlkj', time: '12:00' },
        { isSender: true, content: 'lkjlkjlkjjlkkjlkkjlkkjlkjlkjlkjlkjjlkkjlkj', time: '12:00' },
        { isSender: false, content: 'lkjlkjlkjjlkkjlkkjlkkjlkjlkjlkjlkjjlkkjlkj', time: '12:00' },
        { isSender: true, content: 'lkjlkjlkjjlkkjlkkjlkkjlkjlkjlkjlkjjlkkjlkj', time: '12:00' },
        { isSender: false, content: 'lkjlkjlkjjlkkjlkkjlkkjlkjlkjlkjlkjjlkkjlkj', time: '12:00' },
        { isSender: true, content: 'lkjlkjlkjjlkkjlkkjlkkjlkjlkjlkjlkjjlkkjlkj', time: '12:00' },
        { isSender: false, content: 'lkjlkjlkjjlkkjlkkjlkkjlkjlkjlkjlkjjlkkjlkj', time: '12:00' },
    ]);

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
                typingMessage: typingMessage,
                setTypingMessage: setTypingMessage,
                messages: messages,
                setMessages: setMessages,
                setChatDetails: setChatDetails,
                chatDetails: chatDetails,
                toggleDetails: toggleDetails,
                toggleOffSelectedChat: toggleOffSelectedChat,
                toggleNewChannel: toggleNewChannel,
                newChannel: newChannel,
            }}
        >
            {children}
        </ChatContext.Provider>
    );

};

export default ChatProvider;