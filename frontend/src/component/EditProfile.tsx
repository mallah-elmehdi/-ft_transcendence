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
import React, { useEffect, useState } from 'react';
import { FaDiscord, FaFacebook, FaInstagram, FaRegEdit, FaCamera } from 'react-icons/fa';

// const {
//     formState: { errors },
//     handleSubmit,
//     getValues,
//     control,
// } = useForm({
//     defaultValues: {
//         full_name: '',
//         email: '',
//         password: '',
//         confirm_password: '',
//         acceptTerms: false,
//     },
// });

// types
type Props = {
    avatar: string;
    login: string;
    [other: string]: any;
};

const EditProfile = ({ avatar, login }: Props) => {
    // modal
    const { isOpen, onOpen, onClose } = useDisclosure();
    // upload image
    const [image, setImage] = useState(avatar);
    const onImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        if (event.target.files) {
            const objectUrl = URL.createObjectURL(event.target.files[0]);
            setImage(objectUrl);
        }
    };

    // first render
    useEffect(() => {
        setImage(avatar);
    }, [avatar]);

    return (
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
                                <Avatar name={login} src={image} size="xl" />
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
                                        onChange={onImageChange}
                                        sx={{
                                            '::-webkit-file-upload-button': {
                                                visibility: 'hidden',
                                            },
                                        }}
                                    />
                                </Box>
                            </Box>
                            <Input borderRadius="xl" placeholder="username" value={login} type='text' />
                            <InputGroup>
                                <InputLeftAddon borderRadius="xl" children={<FaDiscord />} />
                                <Input borderRadius="xl" placeholder="discord username" />
                            </InputGroup>
                            <InputGroup>
                                <InputLeftAddon borderRadius="xl" children={<FaFacebook />} />
                                <Input borderRadius="xl" placeholder="facebook username" />
                            </InputGroup>
                            <InputGroup>
                                <InputLeftAddon borderRadius="xl" children={<FaInstagram />} />
                                <Input borderRadius="xl" placeholder="instagram username" />
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
                        >
                            Save
                        </Button>
                    </ModalFooter>
                </ModalContent>
            </Modal>
        </Box>
    );
};

export default EditProfile;
