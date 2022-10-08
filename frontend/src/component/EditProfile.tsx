import {
    Avatar,
    Box,
    Button,
    IconButton,
    Input,
    InputGroup,
    InputLeftAddon,
    Modal,
    ModalBody,
    ModalCloseButton,
    ModalContent,
    ModalFooter,
    ModalHeader,
    ModalOverlay,
    Stack,
    useDisclosure,
} from '@chakra-ui/react';
import React from 'react';
import { FaCamera, FaDiscord, FaFacebook, FaInstagram, FaRegEdit } from 'react-icons/fa';
import UpdatePtofile from '../api/updatePtofile';
import { GlobalContext } from '../App';

// types
type Props = {
    avatar: string;
    login: string;
    facebook: string;
    discord: string;
    instagram: string;
    [other: string]: any;
};

const EditProfile = (props: Props) => {
    // modal
    const { isOpen, onOpen, onClose } = useDisclosure();

    // form
    const [avatar, setAvatar] = React.useState(props.avatar);
    const [login, setLogin] = React.useState(props.login);
    const [facebook, setFacebook] = React.useState(props.facebook);
    const [discord, setDiscord] = React.useState(props.discord);
    const [instagram, setInstagram] = React.useState(props.instagram);

    // update profile
    const changeAvatar = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files) {
            const objectUrl = URL.createObjectURL(e.target.files[0]);
            
            setAvatar(objectUrl);
        }
    };
    const changeLogin = (e: React.ChangeEvent<HTMLInputElement>) => setLogin(e.target.value);
    const changeFacebook = (e: React.ChangeEvent<HTMLInputElement>) => setFacebook(e.target.value);
    const changeDiscord = (e: React.ChangeEvent<HTMLInputElement>) => setDiscord(e.target.value);
    const changeInstagram = (e: React.ChangeEvent<HTMLInputElement>) => setInstagram(e.target.value);

    // first render
    React.useEffect(() => {
        setAvatar(props.avatar);
        setLogin(props.login);
        setFacebook(props.facebook);
        setDiscord(props.discord);
        setInstagram(props.instagram);
    }, [props]);

    // submitProfile
    const setLoader = React.useContext(GlobalContext)?.setLoader;
    const setInfo = React.useContext(GlobalContext)?.userInfo[1];

    const submitProfile = () => {
        const formData = new FormData();
            formData.append('selectedFile', avatar);
        UpdatePtofile(props.login, { avatar: formData, 
            user_login: 
            login, facebook, discord, instagram }, setLoader, setInfo);
    };

    return (
        <>
            <Box position="absolute" top="1rem" right="1rem">
                <IconButton
                    onClick={onOpen}
                    size="sm"
                    aria-label="edit"
                    fontSize="sm"
                    variant="ghost"
                    borderRadius="xl"
                    icon={<FaRegEdit />}
                    zIndex={3}
                />

                <Modal isOpen={isOpen} onClose={onClose} isCentered>
                    <ModalOverlay />
                    <ModalContent borderRadius="2xl">
                        <ModalHeader>Edit Profile</ModalHeader>
                        <ModalCloseButton borderRadius="xl" />
                        <ModalBody>
                            <Stack alignItems="center" spacing={5}>
                                <Box position="relative">
                                    <Avatar name={login} src={avatar} size="xl" />
                                    <Box
                                        opacity={0}
                                        _hover={{ opacity: 1 }}
                                        top="50%"
                                        right="50%"
                                        transform="translate(50%, -50%)"
                                        borderRadius="full"
                                        position="absolute"
                                        zIndex={2}
                                        w="100%"
                                        h="100%"
                                        cursor="pointer"
                                        bg="rgba(0,0,0,.5)"
                                        // border="2px solid white"
                                        transition="all 0.3s ease"
                                    >
                                        <IconButton
                                            size="sm"
                                            aria-label="Camera"
                                            fontSize="xl"
                                            borderRadius="full"
                                            position="absolute"
                                            top="50%"
                                            right="50%"
                                            transform="translate(50%, -50%)"
                                            icon={<FaCamera />}
                                            zIndex={3}
                                        />
                                        <Input
                                            type="file"
                                            borderRadius="full"
                                            top="50%"
                                            position="absolute"
                                            right="50%"
                                            transform="translate(50%, -50%)"
                                            cursor="pointer"
                                            w="100%"
                                            h="100%"
                                            zIndex={4}
                                            border={0}
                                            opacity={0}
                                            onChange={changeAvatar}
                                            sx={{
                                                '::-webkit-file-upload-button': {
                                                    visibility: 'hidden',
                                                },
                                            }}
                                        />
                                    </Box>
                                </Box>
                                <Input borderRadius="xl" placeholder="username" value={login} type="text" onChange={changeLogin} />
                                <InputGroup>
                                    <InputLeftAddon borderRadius="xl" children={<FaDiscord />} />
                                    <Input borderRadius="xl" placeholder="discord username" value={discord} onChange={changeDiscord} />
                                </InputGroup>
                                <InputGroup>
                                    <InputLeftAddon borderRadius="xl" children={<FaFacebook />} />
                                    <Input borderRadius="xl" placeholder="facebook username" value={facebook} onChange={changeFacebook} />
                                </InputGroup>
                                <InputGroup>
                                    <InputLeftAddon borderRadius="xl" children={<FaInstagram />} />
                                    <Input
                                        borderRadius="xl"
                                        placeholder="instagram username"
                                        value={instagram}
                                        onChange={changeInstagram}
                                    />
                                </InputGroup>
                            </Stack>
                        </ModalBody>

                        <ModalFooter>
                            <Button
                                onClick={onClose}
                                variant="solid"
                                bg="red"
                                color="blackAlpha.900"
                                borderRadius="2xl"
                                fontSize="xl"
                                size="xl"
                                py={2}
                                px={5}
                                fontWeight="light"
                                _focus={{
                                    bg: 'red',
                                }}
                                _hover={{
                                    bg: 'red',
                                }}
                            >
                                Close
                            </Button>
                            <Button
                                ml={5}
                                variant="solid"
                                bg="green"
                                borderRadius="2xl"
                                color="blackAlpha.900"
                                fontSize="xl"
                                size="xl"
                                py={2}
                                px={5}
                                fontWeight="light"
                                _focus={{
                                    bg: 'green',
                                }}
                                _hover={{
                                    bg: 'green',
                                }}
                                onClick={submitProfile}
                            >
                                Save
                            </Button>
                        </ModalFooter>
                    </ModalContent>
                </Modal>
            </Box>
        </>
    );
};

export default EditProfile;
