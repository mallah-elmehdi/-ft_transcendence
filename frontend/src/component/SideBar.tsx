import React, {useState} from "react";
import {Flex, useColorModeValue} from "@chakra-ui/react";
import SearchBar from "./SearchBar";
import {AnimatePresence} from "framer-motion";
import {useEffect} from "react";
import Tabs from "./Tabs"

type Props = {
    data: {
        friends: { id: String, username: String, avatar: String }[],
        groups: { id: String, groupname: String, }[],
    },
}

const SideBar = ({data}: Props) => {
    const [isSearch, setIsSearch] = useState<boolean>(false);

    useEffect(() => {
        const keyDownHandler = (event: any) => {
            if (event.key === 'Escape') {
                event.preventDefault();
                setIsSearch(true);
            }
        };
        document.addEventListener('keydown', keyDownHandler);
        return () => {
            document.removeEventListener('keydown', keyDownHandler);
        };
    },);

    return (
        <>
            <Flex
                w={'25%'}
                _light={{boxShadow: 'md'}}
                _dark={{boxShadow: 'dark-lg'}}
                rounded='30px'
                direction={"column"}
                alignItems={"center"}
                pt={50}
            >
                <SearchBar search={isSearch} setSearch={setIsSearch}/>
                <AnimatePresence>
                    {!isSearch ?
                        <Tabs data={data}/>
                        : undefined
                    }
                </AnimatePresence>
            </Flex>
        </>
    )
}

export default SideBar;