import React, {useState, createContext} from 'react';

// @ts-ignore
export const SearchContext = createContext();

type Props = {
    children: JSX.Element,
}

const SearchBarContextProvider = ({children}: Props) => {
    const [isSearch, setSearch] = useState(false);
    const toggleSearch = () => {
        setSearch(!isSearch)
    }
    return (
        <SearchContext.Provider value={{isSearch: isSearch, toggleSearch: toggleSearch}}>
            {children}
        </SearchContext.Provider>
    );

};

export default SearchBarContextProvider;