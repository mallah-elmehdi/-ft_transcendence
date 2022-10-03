import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    useDisclosure,
    Button,
    IconButton,
    Box,
} from '@chakra-ui/react'
import { BsClockHistory } from "react-icons/bs"


export default function MuteMember() {
    const { isOpen, onOpen, onClose } = useDisclosure()
    return (
        <Box>
            <IconButton
                onClick={onOpen}
                ml={14}
                fontSize={18}
                rounded={30}
                color={'customPurple'}
                variant={'ghost'}
                aria-label={'new channel'} icon={<BsClockHistory />}
            />

            <Modal isOpen={isOpen} onClose={onClose}>
                <ModalOverlay />
                <ModalContent>
                    <ModalHeader>Modal Title</ModalHeader>
                    <ModalCloseButton />
                    <ModalBody>
                    </ModalBody>

                    <ModalFooter>
                        <Button colorScheme='blue' mr={3} onClick={onClose}>
                            Close
                        </Button>
                        <Button variant='ghost'>Secondary Action</Button>
                    </ModalFooter>
                </ModalContent>
            </Modal>
        </Box>
    )
}
