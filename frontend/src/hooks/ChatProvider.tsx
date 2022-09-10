import React, { useState, createContext } from 'react';

// @ts-ignore
export const ChatContext = createContext();

type Props = {
    children: JSX.Element,
}

const ChatProvider = ({ children }: Props) => {
    const [isSearch, setSearch] = useState(false);
    const [selectedChat, setSelectedChat] = useState(null);
    const toggleSearch = () => {
        setSearch(!isSearch)
    }
    const [data, setData] = useState(
        {
            friends: [
                { id: '1',  name: 'UserName', avatar: 'https://cdn.intra.42.fr/users/ynoam.jpg', },
                { id: '2',  name: 'UserName', avatar: 'https://cdn.intra.42.fr/users/ynoam.jpg', },
                { id: '3',  name: 'UserName', avatar: 'https://cdn.intra.42.fr/users/ynoam.jpg', },
                { id: '4',  name: 'UserName', avatar: 'https://cdn.intra.42.fr/users/ynoam.jpg', },
                { id: '5',  name: 'UserName', avatar: 'https://cdn.intra.42.fr/users/ynoam.jpg', },
                { id: '6',  name: 'UserName', avatar: 'https://cdn.intra.42.fr/users/ynoam.jpg', },
                { id: '7',  name: 'UserName', avatar: 'https://cdn.intra.42.fr/users/ynoam.jpg', },
                { id: '8',  name: 'UserName', avatar: 'https://cdn.intra.42.fr/users/ynoam.jpg', },
                { id: '9',  name: 'UserName', avatar: 'https://cdn.intra.42.fr/users/ynoam.jpg', },
                { id: '10', name: 'UserName', avatar: 'https://cdn.intra.42.fr/users/ynoam.jpg', },
                { id: '11', name: 'UserName', avatar: 'https://cdn.intra.42.fr/users/ynoam.jpg', },
                { id: '12', name: 'UserName', avatar: 'https://cdn.intra.42.fr/users/ynoam.jpg', },
                { id: '13', name: 'UserName', avatar: 'https://cdn.intra.42.fr/users/ynoam.jpg', },
                { id: '14', name: 'UserName', avatar: 'https://cdn.intra.42.fr/users/ynoam.jpg', },
                { id: '15', name: 'UserName', avatar: 'https://cdn.intra.42.fr/users/ynoam.jpg', },
                { id: '16', name: 'UserName', avatar: 'https://cdn.intra.42.fr/users/ynoam.jpg', },
                { id: '17', name: 'UserName', avatar: 'https://cdn.intra.42.fr/users/ynoam.jpg', },
                { id: '18', name: 'UserName', avatar: 'https://cdn.intra.42.fr/users/ynoam.jpg', },
                { id: '19', name: 'UserName', avatar: 'https://cdn.intra.42.fr/users/ynoam.jpg', },
                { id: '20', name: 'UserName', avatar: 'https://cdn.intra.42.fr/users/ynoam.jpg', },
                { id: '21', name: 'UserName', avatar: 'https://cdn.intra.42.fr/users/ynoam.jpg', },
                { id: '22', name: 'UserName', avatar: 'https://cdn.intra.42.fr/users/ynoam.jpg', },
                { id: '23', name: 'UserName', avatar: 'https://cdn.intra.42.fr/users/ynoam.jpg', },
                { id: '24', name: 'UserName', avatar: 'https://cdn.intra.42.fr/users/ynoam.jpg', },
                { id: '25', name: 'UserName', avatar: 'https://cdn.intra.42.fr/users/ynoam.jpg', },
                { id: '26', name: 'UserName', avatar: 'https://cdn.intra.42.fr/users/ynoam.jpg', },
                { id: '27', name: 'UserName', avatar: 'https://cdn.intra.42.fr/users/ynoam.jpg', },
                { id: '28', name: 'UserName', avatar: 'https://cdn.intra.42.fr/users/ynoam.jpg', },
                { id: '29', name: 'UserName', avatar: 'https://cdn.intra.42.fr/users/ynoam.jpg', },
                { id: '30', name: 'UserName', avatar: 'https://cdn.intra.42.fr/users/ynoam.jpg', },
                { id: '31', name: 'UserName', avatar: 'https://cdn.intra.42.fr/users/ynoam.jpg', },
            ],
            groups: [
                { id: '1', name: 'GroupNAme' },
                { id: '2', name: 'GroupNAme' },
                { id: '3', name: 'GroupNAme' },
                { id: '4', name: 'GroupNAme' },
                { id: '5', name: 'GroupNAme' },
                { id: '5', name: 'GroupNAme' },
                { id: '6', name: 'GraaaoupNAme' },
            ],
        }

    )
    const [typingMessage, setTypingMessage] = useState('');
    const [messages, setMessages] = useState([
        { isSender: false, content: 'asddfasddfasfdasfasdfdasasddfasddfasfdasfasdfdasasddfasddfasfdasfasdfdasasddfasddfasfdasfasdfdasasddfasddfasfdasfasdfdasasddfasddfasfdasfasdfdasasddfasddfasfdasfasdfdasasddfasddfasfdasfasdfdasasddfasddfasfdasfasdfdasasddfasddfasfdasfasdfdasasddfasddfasfdasfasdfdasasddfasddfasfdasfasdfdasasddfasddfasfdasfasdfdasasddfasddfasfdasfasdfdasasddfasddfasfdasfasdfdasasddfasddfasfdasfasdfdasasddfasddfasfdasfasdfdasasddfasddfasfdasfasdfdasasddfasddfasfdasfasdfdasasddfasddfasfdasfasdfdasasddfasddfasfdasfasdfdasasddfasddfasfdasfasdfdas' },
        { isSender: true, content: 'asddfasddfasfdasfasdfdasasddfasddfasfdasfasdfdasasddfasddfasfdasfasdfdasasddfasddfasfdasfasdfdasasddfasddfasfdasfasdfdasasddfasddfasfdasfasdfdasasddfasddfasfdasfasdfdasasddfasddfasfdasfasdfdasasddfasddfasfdasfasdfdasasddfasddfasfdasfasdfdasasddfasddfasfdasfasdfdasasddfasddfasfdasfasdfdasasddfasddfasfdasfasdfdasasddfasddfasfdasfasdfdasasddfasddfasfdasfasdfdasasddfasddfasfdasfasdfdasasddfasddfasfdasfasdfdasasddfasddfasfdasfasdfdasasddfasddfasfdasfasdfdasasddfasddfasfdasfasdfdasasddfasddfasfdasfasdfdasasddfasddfasfdasfasdfdas' }
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
                toggleDetails: toggleDetails,
                chatDetails: chatDetails,
            }}
        >
            {children}
        </ChatContext.Provider>
    );

};

export default ChatProvider;