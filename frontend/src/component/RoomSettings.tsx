import { useColorModeValue, Box, FormControl, FormLabel, HStack, Input, VStack, Text, Spacer } from '@chakra-ui/react';
import React, { useEffect, useState } from 'react';
import { MdDelete } from 'react-icons/md';
import { ArrowBackIcon, ArrowForwardIcon } from '@chakra-ui/icons';
import ChangeAvatar from './ChangeAvatar';
import DeleteRoom from './DeleteRoom';
import { Radio, RadioGroup } from '@chakra-ui/react';

type Props = {
    toggleSettings: () => void;
    roomId: string;
};

const RoomSettings = ({ toggleSettings, roomId }: Props) => {
    const [roomData, setRoomData] = useState<any>({
        name: '',
        type: 'private',
        password: '',
    });
    const [image, setImage] = useState(null);
    const [roomName, setRoomName] = useState<any>('');
    const [roomType, setRoomType] = useState<any>(roomData.type);
    const value = useColorModeValue('blackAlpha.200', 'whiteAlpha.200');

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

    const roomNameHandler = (e: any) => {
        console.log(e.target.value);
        setRoomName(e.target.value);
    };
    return (
        <VStack w={'100%'} h={'100%'}>
            <HStack overflow={'visible'} px={5} w={'100%'} m={0} mb={6} spacing={8}>
                <Box as={'button'}>
                    <ArrowBackIcon m={0} p={0} h={30} fontSize={25} onClick={toggleSettings} />
                </Box>
                <Text fontSize={20}>Edit</Text>
            </HStack>
            <VStack w="100%" h={'100%'}>
                <ChangeAvatar callBack={setImage} />
                <FormControl p={5}>
                    <FormLabel>Room name</FormLabel>
                    <Input type="text" value={roomName} onChange={(e) => roomNameHandler(e)} />
                </FormControl>
                <VStack w="100%" h={'100%'} px={5} alignItems={'left'}>
                    <Text>Room Type</Text>
                    <RadioGroup defaultValue={roomType}>
                        <HStack spacing="24px">
                            {roomData.type === 'private' ? (
                                <Radio value="private" isDisabled>
                                    Private
                                </Radio>
                            ) : (
                                <Radio value="private"> Private </Radio>
                            )}
                            {roomData.type === 'public' ? (
                                <Radio value="public" isDisabled>
                                    Public
                                </Radio>
                            ) : (
                                <Radio value="public">Public</Radio>
                            )}
                            {roomData.type === 'protected' ? (
                                <Radio value="protected" isDisabled>
                                    protected
                                </Radio>
                            ) : (
                                <Radio value="protected">Public</Radio>
                            )}
                        </HStack>
                    </RadioGroup>
                    <FormControl>
                        <FormLabel>Password</FormLabel>
                        <Input type="text" value={roomData.password} onChange={(e) => console.log(e.target.value)} />
                    </FormControl>
                </VStack>
                <Spacer />
                <DeleteRoom />
            </VStack>
        </VStack>
    );
};

export default RoomSettings;
