import {
    Button,
    Flex,
    Modal,
    ModalBody,
    ModalContent,
    ModalFooter,
    ModalHeader,
    ModalOverlay,
    Text, useBoolean, useDisclosure ,
    Avatar
} from "@chakra-ui/react";
import {BiImageAdd} from "react-icons/bi";
import axios from "axios";
import {useState} from "react";

export  default function MyAvatar(props) {
    var fileInput;
    const { isOpen, onOpen, onClose } = useDisclosure()
    const [hoverAvatar, setHoverAvatar] = useBoolean()
    const [hoverUsername, setHoverUsername] = useBoolean()
    const [profileImage , setProfileImage] = useState(null)
    function fileSelectedHandler(event){
        console.log(event.target.files[0].name)
        setProfileImage(event.target.files[0])
    }
    function avatarUploadHandler() {
        const fd = new FormData();
        fd.append('avaratImage', profileImage, profileImage.name)
        // axios.post(backEnd+ '/users/' + data.profile.id, fd, {
        axios.post('http://www.oac.uci.edu/indiv/franklin/cgi-bin/values', fd, {
            onUploadProgress: progressEvent => {
                console.log('upload Progress: ' + Math.round(progressEvent.load / progressEvent.total * 100) + "%")
            }
        })
            .then(res => {
                console.log('RESULT');
                console.log(res);
            })
            .catch(err => {
                console.log('--------------------ERROR--------------------')
                console.log(err)

                console.log('---------------------------------------------')
            })
    }
    // console.log(props)
    return (
        <>
            {/*<Avatar*/}
            {/*    size={'xl'}*/}
            {/*    name={props.name}*/}
            {/*    src={props.src}*/}
            {/*    position={'relative'}*/}
            {/*    onClick={onOpen}*/}
            {/*    // bg={'red'}*/}
            {/*>*/}
            {/*    <Flex*/}
            {/*        position={'absolute'}*/}
            {/*        w={'100%'}*/}
            {/*        h={'100%'}*/}
            {/*        rounded={'50%'}*/}
            {/*        _hover={{bg: '#aaaaaaaa'}}*/}
            {/*        justifyContent={"center"}*/}
            {/*        alignItems={"center"}*/}
            {/*        onMouseEnter={setHoverAvatar.toggle}*/}
            {/*        onMouseLeave={setHoverAvatar.toggle}*/}
            {/*    >*/}
            {/*        {hoverAvatar && <Text as={'Button'} fontSize={13}>Change Avatar</Text>}*/}
            {/*    </Flex>*/}
            {/*    /!*<AvatarBadge boxSize={'0.7em'} bg={'green'} />*!/*/}
            {/*</Avatar>*/}
            {/*<Modal*/}
            {/*    isCentered*/}
            {/*    onClose={onClose}*/}
            {/*    isOpen={isOpen}*/}
            {/*    motionPreset='slideInBottom'*/}
            {/*>*/}
            {/*    <ModalOverlay/>*/}
            {/*    <ModalContent>*/}
            {/*        <ModalHeader>Select Image</ModalHeader>*/}
            {/*        <ModalBody*/}
            {/*            justifyContent={"center"}*/}
            {/*            alignItems={"center"}*/}
            {/*            align={"center"}*/}
            {/*        >*/}
            {/*            /!*<Avatar*!/*/}
            {/*            /!*    size={'xl'}*!/*/}
            {/*            /!*    bg={'red'}*!/*/}
            {/*            /!*    name={'Youssef Noam'}*!/*/}
            {/*            /!*    src={data.profile.avatar}*!/*/}
            {/*            /!*    position={'relative'}*!/*/}
            {/*            /!*>*!/*/}
            {/*            /!*    <Flex*!/*/}
            {/*            /!*        // as={'Button'}*!/*/}
            {/*            /!*        justifyContent={"center"}*!/*/}
            {/*            /!*        alignItems={"center"}*!/*/}
            {/*            /!*        position={'absolute'}*!/*/}
            {/*            /!*        w={'100%'}*!/*/}
            {/*            /!*        h={'100%'}*!/*/}
            {/*            /!*        rounded={'50%'}*!/*/}
            {/*            /!*        bg={'#aaaaaaaa'}*!/*/}
            {/*            /!*        onClick={() => fileInput.click()}*!/*/}

            {/*            /!*    >*!/*/}
            {/*            /!*        <BiImageAdd size={30}/>*!/*/}
            {/*            /!*        <input*!/*/}
            {/*            /!*            style={{display: 'none'}}*!/*/}
            {/*            /!*            ref={file => fileInput = file}*!/*/}
            {/*            /!*            type={'file'}*!/*/}
            {/*            /!*            onChange={fileSelectedHandler}*!/*/}
            {/*            /!*        />*!/*/}
            {/*            /!*    </Flex>*!/*/}
            {/*            /!*</Avatar>*!/*/}
            {/*        </ModalBody>*/}
            {/*        <ModalFooter>*/}
            {/*            <Button*/}
            {/*                onClick={avatarUploadHandler}*/}
            {/*                rounded='20px' bg={"green"}>*/}
            {/*                <Text fontSize={20} onClick={onClose}>Upload</Text>*/}
            {/*            </Button>*/}
            {/*            <Button rounded='20px' bg={"red"}>*/}
            {/*                <Text fontSize={20} onClick={onClose}>Discard</Text>*/}
            {/*            </Button>*/}
            {/*        </ModalFooter>*/}
            {/*    </ModalContent>*/}
            {/*</Modal>*/}
        </>
    )
}