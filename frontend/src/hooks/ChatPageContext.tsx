import React, { useState, createContext } from 'react';

// @ts-ignore
export const SearchContext = createContext();

type Props = {
    children: JSX.Element,
}

const ChatPageContext = ({ children }: Props) => {
    const [isSearch, setSearch] = useState(false);
    const [selectedChat, setSelectedChat] = useState(null);
    const toggleSearch = () => {
        setSearch(!isSearch)
    }
    const [data, setData] = useState(
        {
            friends: [
                { id: '1', username: 'UserName', avatar: 'https://cdn.intra.42.fr/users/ynoam.jpg', },
                { id: '2', username: 'UserName', avatar: 'https://cdn.intra.42.fr/users/ynoam.jpg', },
                { id: '3', username: 'UserName', avatar: 'https://cdn.intra.42.fr/users/ynoam.jpg', },
                { id: '4', username: 'UserName', avatar: 'https://cdn.intra.42.fr/users/ynoam.jpg', },
                { id: '5', username: 'UserName', avatar: 'https://cdn.intra.42.fr/users/ynoam.jpg', },
                { id: '6', username: 'UserName', avatar: 'https://cdn.intra.42.fr/users/ynoam.jpg', },
                { id: '7', username: 'UserName', avatar: 'https://cdn.intra.42.fr/users/ynoam.jpg', },
                { id: '8', username: 'UserName', avatar: 'https://cdn.intra.42.fr/users/ynoam.jpg', },
                { id: '9', username: 'UserName', avatar: 'https://cdn.intra.42.fr/users/ynoam.jpg', },
                { id: '10', username: 'UserName', avatar: 'https://cdn.intra.42.fr/users/ynoam.jpg', },
                { id: '11', username: 'UserName', avatar: 'https://cdn.intra.42.fr/users/ynoam.jpg', },
                { id: '12', username: 'UserName', avatar: 'https://cdn.intra.42.fr/users/ynoam.jpg', },
                { id: '13', username: 'UserName', avatar: 'https://cdn.intra.42.fr/users/ynoam.jpg', },
                { id: '14', username: 'UserName', avatar: 'https://cdn.intra.42.fr/users/ynoam.jpg', },
                { id: '15', username: 'UserName', avatar: 'https://cdn.intra.42.fr/users/ynoam.jpg', },
                { id: '16', username: 'UserName', avatar: 'https://cdn.intra.42.fr/users/ynoam.jpg', },
                { id: '17', username: 'UserName', avatar: 'https://cdn.intra.42.fr/users/ynoam.jpg', },
                { id: '18', username: 'UserName', avatar: 'https://cdn.intra.42.fr/users/ynoam.jpg', },
                { id: '19', username: 'UserName', avatar: 'https://cdn.intra.42.fr/users/ynoam.jpg', },
                { id: '20', username: 'UserName', avatar: 'https://cdn.intra.42.fr/users/ynoam.jpg', },
                { id: '21', username: 'UserName', avatar: 'https://cdn.intra.42.fr/users/ynoam.jpg', },
                { id: '22', username: 'UserName', avatar: 'https://cdn.intra.42.fr/users/ynoam.jpg', },
                { id: '23', username: 'UserName', avatar: 'https://cdn.intra.42.fr/users/ynoam.jpg', },
                { id: '24', username: 'UserName', avatar: 'https://cdn.intra.42.fr/users/ynoam.jpg', },
                { id: '25', username: 'UserName', avatar: 'https://cdn.intra.42.fr/users/ynoam.jpg', },
                { id: '26', username: 'UserName', avatar: 'https://cdn.intra.42.fr/users/ynoam.jpg', },
                { id: '27', username: 'UserName', avatar: 'https://cdn.intra.42.fr/users/ynoam.jpg', },
                { id: '28', username: 'UserName', avatar: 'https://cdn.intra.42.fr/users/ynoam.jpg', },
                { id: '29', username: 'UserName', avatar: 'https://cdn.intra.42.fr/users/ynoam.jpg', },
                { id: '30', username: 'UserName', avatar: 'https://cdn.intra.42.fr/users/ynoam.jpg', },
                { id: '31', username: 'UserName', avatar: 'https://cdn.intra.42.fr/users/ynoam.jpg', },
            ],
            groups: [
                { id: '1', groupname: 'GroupNAme' },
                { id: '2', groupname: 'GroupNAme' },
                { id: '3', groupname: 'GroupNAme' },
                { id: '4', groupname: 'GroupNAme' },
                { id: '5', groupname: 'GroupNAme' },
                { id: '5', groupname: 'GroupNAme' },
                { id: '6', groupname: 'GraaaoupNAme' },
            ],
        }

    )
    return (
        <SearchContext.Provider
            value={{
                isSearch: isSearch,
                toggleSearch: toggleSearch,
                selectedChat: selectedChat,
                setSelectedChat: setSelectedChat,
                data: data,
                setData: setData,
            }}
        >
            {children}
        </SearchContext.Provider>
    );

};

export default ChatPageContext;