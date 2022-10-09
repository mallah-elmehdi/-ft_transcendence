import React from 'react';

// @ts-ignore
export const GlobalContext = React.createContext();

type Props = {
    children: JSX.Element;
};

const GlobalContextProvider = ({ children }: Props) => {
    // get the data
    const [userInfo, setUserInfo] = React.useState(null);
    const [loader, setLoader] = React.useState(false);
    const [notif, setNotif] = React.useState({
        exist: false,
        type: '',
        message: '',
    });

    return (
        <GlobalContext.Provider
            value={{
                userInfo,
                setUserInfo,
                loader,
                setLoader,
                notif,
                setNotif,
            }}
        >
            {children}
        </GlobalContext.Provider>
    );
};

export default GlobalContextProvider;
