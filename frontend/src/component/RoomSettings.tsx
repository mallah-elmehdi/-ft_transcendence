import { useColorModeValue, Box, FormControl, FormLabel, HStack, Input, VStack, Text, Spacer } from '@chakra-ui/react';
import React, { useEffect, useState } from 'react';
import { MdDelete } from 'react-icons/md';
import { ArrowBackIcon, ArrowForwardIcon } from '@chakra-ui/icons';
import ChangeAvatar from "./ChangeAvatar"

type Props = {
    toggleSettings: () => void;
};

const RoomSettings = ({ toggleSettings }: Props) => {
    const [image, setImage] = useState(null);
    const value = useColorModeValue('blackAlpha.200', 'whiteAlpha.200');
    const [roomName, setRoomName] = useState<any>('')

    useEffect(() => {
        const keyDownHandler = (event: any) => {
            if (event.key === 'Escape') {
                event.preventDefault();
                toggleSettings();
            }
        };
        document.addEventListener('keydown', keyDownHandler);
        return () => {
            document.removeEventListener('keydown', keyDownHandler);
        };
    });
    return (
        <VStack w={'100%'} h={'100%'}>
            <HStack overflow={'visible'} px={5} w={'100%'} m={0} mb={6} spacing={8}>
                <Box as={'button'}>
                    <ArrowBackIcon m={0} p={0} h={30} fontSize={25} onClick={toggleSettings} />
                </Box>
                <Text fontSize={20}>Edit</Text>
            </HStack>
            <VStack w="100%" h={'100%'} px={5}>
                <ChangeAvatar callBack={setImage} />
                <FormControl>
                    <FormLabel>Room name</FormLabel>
                    <Input
                        type="text"
                        value={roomName}
                        onChange={(e) => {
                            setRoomName(e.target.value);
                            console.log(e.target.value);
                        }}
                    />
                </FormControl>
                <Spacer/>
                <HStack _hover={{ bg: value }} w={'100%'} py={5} alignItems={'center'}>
                    <MdDelete size={26} color={'#FF5C5C'} />
                    <Text px={5} fontWeight={'bold'} color={'#FF5C5C'}>
                        Delete Room
                    </Text>
                </HStack>
            </VStack>
        </VStack>
    );
};

export default RoomSettings;
