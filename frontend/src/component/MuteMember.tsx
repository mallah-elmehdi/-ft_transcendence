import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    Button,
} from '@chakra-ui/react'
import {
    NumberInput,
    NumberInputField,
    NumberInputStepper,
    NumberIncrementStepper,
    NumberDecrementStepper,
} from '@chakra-ui/react'

import { Text, HStack } from "@chakra-ui/react"
import React, { useState } from "react"

type Props = {
    isOpen: boolean,
    onClose: () => void,
    name: string,
    memberId: string,
    roomId: string,
}

export default function MuteMember({ isOpen, onClose, memberId, name, roomId }: Props) {
    const [minute, setMinute] = useState<any>(5);
    const muteMemberHandler = () => {
        console.log(`Mute {name: ${name}, id: ${memberId}} for ${minute} from roomId: ${roomId}`)
    }
    return (
        <Modal isOpen={isOpen} onClose={onClose} isCentered>
            <ModalOverlay />
            <ModalContent w={'20em'}>
                <ModalHeader>Mute User</ModalHeader>
                <ModalCloseButton />
                <ModalBody>
                    <Text mb={4} > Mute {name} from the room?  </Text>
                    <HStack justifyContent={'center'} > <NumberInput
                        defaultValue={5}
                        min={5}
                        max={5000}
                        maxW='100px'
                        value={minute}
                        onChange={setMinute}
                        allowMouseWheel>
                        <NumberInputField />
                        <NumberInputStepper>
                            <NumberIncrementStepper />
                            <NumberDecrementStepper />
                        </NumberInputStepper>
                    </NumberInput>
                        <Text>M</Text>
                    </HStack>
                </ModalBody>
                <ModalFooter>
                    <Button
                        variant={'ghost'}
                        color="red"
                        mr={3}
                        onClick={() => {
                            muteMemberHandler()
                            setMinute(5)
                            onClose()
                        }}
                    >
                        MUTE
                    </Button>
                    <Button
                        variant={'ghost'}
                        colorScheme="purple"
                        mr={3}
                        onClick={() => {
                            setMinute(5)
                            onClose()
                        }}
                    >
                        CANCEL
                    </Button>
                </ModalFooter>
            </ModalContent>
        </Modal>
    )
}
