import React, {FC} from "react";
import {
    HStack,
    Input,
    InputGroup,
    InputLeftElement,
} from "@chakra-ui/react";
import {ArrowBackIcon, Search2Icon} from "@chakra-ui/icons";

interface searchBarProps {
    setSearch: (value: boolean) => void;
    search: boolean;
}

const SearchBar: FC<searchBarProps> = ({search, setSearch}: searchBarProps) => {
    return (
        <>
            <HStack
                w={'90%'}
                m={0} p={0} h={'2em'}>
                {search && <ArrowBackIcon m={0} p={0} h={30} fontSize={25} onClick={() => setSearch(false)}/>}
                <InputGroup
                    h={'2.5em'}
                    boxSizing={'border-box'}
                    alignContent={'center'}
                >
                    <InputLeftElement h={'100%'} pointerEvents='none'
                                      children={<Search2Icon color={!search ? 'gray.500' : 'red'}/>}/>
                    <Input
                        alignItems={'center'}
                        variant={'unstyled'}
                        _hover={{border: search ? '1px solid #EF9795' : '1px solid #BEBEBE'}}
                        border={search ? '1px solid #EF9795' : '1px solid #707070'}
                        onClick={() => setSearch(true)}
                        onChange={
                            (event) => console.log(event.target.value)
                        }
                        w={'100%'}
                        m={0}
                        rounded={30}
                        size='md'
                        type={'search'}
                        placeholder={'Search'}
                    />
                </InputGroup>
            </HStack>
        </>
    )
}

export default SearchBar;
