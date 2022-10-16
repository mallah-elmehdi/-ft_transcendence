import {
    Button,
    Text,
    Heading,
    List,
    ListItem,
    Modal,
    ModalBody,
    ModalCloseButton,
    ModalContent,
    ModalHeader,
    ModalOverlay,
    Stack,
    useDisclosure,
} from '@chakra-ui/react';
import React from 'react';
import { GiSeaTurtle } from 'react-icons/gi';
import { TbWalk } from 'react-icons/tb';
import { VscRocket } from 'react-icons/vsc';

// COMPONENTS
import { Card } from '../component/Card';
import { Line } from '../component/Line';
import { LiveMatch } from '../component/LiveMatch';

// HOOKS
import { usePageTitle } from '../hooks/usePageTitle';

// CONSTANTS
import { pagesContent } from '../constants';

// API
import { GlobalContext } from '../State/Provider';
import { Link, useNavigate } from 'react-router-dom';
import { getUserInfo } from '../State/Api';

const HomePage = () => {
    // page title
    usePageTitle(pagesContent.profile.title);
    // CONTEXT
    const { data, dispatch } = React.useContext<any>(GlobalContext);
    // state
    const { liveMatch } = data;
    // modal
    const { isOpen, onOpen, onClose } = useDisclosure();

    // redirect tosign In
    const navigate = useNavigate();
    // useEffect
    React.useEffect(() => {
        getUserInfo(dispatch).catch((error) => {
            navigate(pagesContent.login.url);
        });
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <Card w="100%" h="100%">
            <Stack justifyContent="space-around" h="100%" direction={{ lg: 'row', base: 'column' }} alignItems="center" spacing={10}>
                <Stack spacing={5} alignItems="center">
                    <Stack spacing={2} alignItems="center" w="100%">
                        <Heading fontSize="xl">Play</Heading>
                        <Line maxW="7rem" />
                    </Stack>
                    <Button
                        variant="solid"
                        bg="green"
                        color="blackAlpha.900"
                        borderRadius="2xl"
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
                        onClick={onOpen}
                    >
                        Join Queues
                    </Button>

                    <Modal isCentered closeOnOverlayClick={false} isOpen={isOpen} onClose={onClose}>
                        <ModalOverlay />
                        <ModalContent>
                            <ModalHeader>Please choose the level</ModalHeader>
                            <ModalCloseButton />
                            <ModalBody pb={6}>
                                <Stack spacing={5}>
                                    <Link to={pagesContent.play.url + '/easy'}>
                                        <Button
                                            borderRadius="2xl"
                                            w="100%"
                                            py={10}
                                            colorScheme={'green'}
                                            fontSize="2xl"
                                            variant="outline"
                                            leftIcon={<GiSeaTurtle />}
                                        >
                                            Easy
                                        </Button>
                                    </Link>
                                    <Link to={pagesContent.play.url + '/normal'}>
                                        <Button
                                            borderRadius="2xl"
                                            w="100%"
                                            py={10}
                                            colorScheme={'green'}
                                            fontSize="2xl"
                                            variant="outline"
                                            leftIcon={<TbWalk />}
                                        >
                                            Normal
                                        </Button>
                                    </Link>
                                    <Link to={pagesContent.play.url + '/hard'}>
                                        <Button
                                            borderRadius="2xl"
                                            w="100%"
                                            py={10}
                                            colorScheme={'green'}
                                            fontSize="2xl"
                                            variant="outline"
                                            leftIcon={<VscRocket />}
                                        >
                                            Hard
                                        </Button>
                                    </Link>
                                </Stack>
                            </ModalBody>
                        </ModalContent>
                    </Modal>
                </Stack>
                <Stack spacing={5} alignItems="center" overflowY="auto" overflowX="hidden">
                    <Stack spacing={2} alignItems="center" w="100%">
                        <Heading fontSize="xl">Live Matches</Heading>
                        <Line maxW="7rem" />
                    </Stack>
                    {liveMatch.length ? (
                        <Stack p={5}>
                            <List spacing={5}>
                                {liveMatch.map((item: any, index: number) => {
                                    return (
                                        <ListItem key={index}>
                                            <LiveMatch match={item} />
                                        </ListItem>
                                    );
                                })}
                            </List>
                        </Stack>
                    ) : (
                        <Text fontSize="sm">No live match yet</Text>
                    )}
                </Stack>
            </Stack>
        </Card>
    );
};

export default HomePage;
