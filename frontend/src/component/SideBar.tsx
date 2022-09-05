import {Flex} from "@chakra-ui/react";
import SearchBar from "./SearchBar";
import {AnimatePresence} from "framer-motion";
import {useEffect, useContext} from "react";
import Tabs from "./Tabs"
import {SearchContext} from "../hooks/SearchBarContext";

type Props = {
    data: {
        friends: { id: String, username: String, avatar: String }[],
        groups: { id: String, groupname: String, }[],
    },
}

const SideBar = ({data}: Props) => {
    const {isSearch, toggleSearch} = useContext<any>(SearchContext);

    useEffect(() => {
        const keyDownHandler = (event: any) => {
            if (event.key === 'Escape') {
                event.preventDefault();
                toggleSearch();
                // setIsSearch(true);
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
                w={['100%','100%','25%','25%','25%']}
                _light={{boxShadow: 'md'}}
                _dark={{boxShadow: 'dark-lg'}}
                rounded='30px'
                direction={"column"}
                alignItems={"center"}
                p={5}
            >
                <SearchBar />
                <AnimatePresence>
                    {!isSearch ? <Tabs data={data}/> : undefined}
                </AnimatePresence>
            </Flex>
        </>
    )
}

export default SideBar;