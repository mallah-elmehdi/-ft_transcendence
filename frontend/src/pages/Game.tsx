import React, { useEffect, useRef, useState } from 'react';
//
import { Box, HStack, Stack, Text, useMediaQuery, useTheme } from '@chakra-ui/react';
import { motion } from 'framer-motion';
import { useAnimationFrame } from 'framer-motion';

// COMPONENTS
import { Card } from '../components/Card';
import { GameAvatar } from '../components/GameAvatar';
// import GameBG from '../assets/images/game-1.jpg';
import GameBG from '../assets/images/game-2.jpeg';

// HOOKS
// import { useBallMovement } from '../hooks/useBallMovement';
import { usePageTitle } from '../hooks/usePageTitle';

// CONSTANTS
import { pagesContent } from '../constants';

const PlayerOne = () => {
    return <Box boxShadow="0 0 .5rem .1rem #fff" position="absolute" left="1rem" top="50%" borderRadius="full" transform="translateY(-50%)" backgroundColor="white" w="2vh" h="10vh" />;
};

const PlayerTwo = () => {
    return <Box boxShadow="0 0 .5rem .1rem #fff " position="absolute" right="1rem" top="50%" borderRadius="full" transform="translateY(-50%)" backgroundColor="white" w="2vh" h="10vh" />;
};

export const Game = () => {
    // page title
    usePageTitle(pagesContent.play.title);

    // score
    const [scorePlayerOne, setScorePlayerOne] = useState(0);
    const [scorePlayerTwo, setScorePlayerTwo] = useState(0);

    // movement
    const containerRef = useRef<HTMLDivElement>(null);
    const ballRef = useRef<HTMLDivElement>(null);
    const randomInit = Math.random();
    const [ballx, setBallX] = useState(50);
    const [bally, setBallY] = useState(50);
    const [speed, setSpeed] = useState(10);
    const [direction, setDirection] = useState({ x: Math.cos(randomInit * 2 * Math.PI), y: Math.sin(randomInit * 2 * Math.PI) });
    const [start, setStart] = useState(false);

    useEffect(() => {
        if (containerRef.current) {
            setBallX(containerRef.current.clientWidth / 2);
            setBallY(containerRef.current.clientHeight / 2);
            setTimeout(() => setStart(true), 1000);
        }
    }, []);

    const resetGame = () => {
        if (containerRef.current) {
            setBallX(containerRef.current.clientWidth / 2);
            setBallY(containerRef.current.clientHeight / 2);
        }
        // setStart(false);
        setTimeout(() => setStart(false), 0);
    };

    useAnimationFrame((t) => {
        if (start && containerRef.current && ballRef.current) {
            if (ballx + ballRef.current.clientWidth >= containerRef.current.clientWidth) {
                resetGame();
                setScorePlayerOne((val) => val + 1);
            }
            if (ballx <= 0) {
                resetGame();
                setScorePlayerTwo((val) => val + 1);
            }
            if (bally + ballRef.current.clientHeight >= containerRef.current.clientHeight) {
                setDirection({ y: -1, x: direction.x });
            }
            if (bally <= 0) {
                setDirection({ y: 1, x: direction.x });
            }
            setBallX(ballx + direction.x * speed);
            setBallY(bally + direction.y * speed);
        }
    });
    // screen sizes
    const theme = useTheme();
    const [isSmallScreen] = useMediaQuery(`(max-width: ${theme.breakpoints.lg})`);

    // garbage value [FOR TEST]<----------------------------------------
    const opponenOne = {
        name: 'el mehdi mallah',
        username: 'emallah',
        photo: 'https://cdn.intra.42.fr/users/emallah.jpg',
        score: 10,
    };
    const opponenTwo = {
        name: 'youssef noam',
        username: 'ynoam',
        photo: 'https://cdn.intra.42.fr/users/ynoam.jpg',
        score: 8,
    };
    // garbage value [FOR TEST]<----------------------------------------

    return (
        <Stack
            spacing={5}
            sx={{
                backgroundImage: `url(${GameBG})`,
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat',
                backgroundPosition: 'center',
            }}
            justifyContent="center"
            alignItems="center"
            py="10vh"
        >
            <HStack mb={10} w={isSmallScreen ? '80%' : '35%'} h="20%" justifyContent="space-between">
                <GameAvatar name={opponenOne.name} username={opponenOne.username} photo={opponenOne.photo} />
                <HStack spacing={10}>
                    <Text color="white" fontSize={isSmallScreen ? 'xl' : '4xl'} lineHeight={1}>
                        {scorePlayerOne}
                    </Text>
                    <Text color="white" fontSize={isSmallScreen ? 'xl' : '4xl'} lineHeight={1}>
                        -
                    </Text>
                    <Text color="white" fontSize={isSmallScreen ? 'xl' : '4xl'} lineHeight={1}>
                        {scorePlayerTwo}
                    </Text>
                </HStack>
                <GameAvatar name={opponenTwo.name} username={opponenTwo.username} photo={opponenTwo.photo} />
            </HStack>
            <Box boxShadow="0 0 4rem 2rem #fff, inset 0 0 5rem 0 #fff" borderRadius="3xl" ref={containerRef} position="relative" w="90vw" h="80vh">
                <PlayerOne />
                <motion.div
                    ref={ballRef}
                    style={{
                        width: '2.5vh',
                        height: '2.5vh',
                        borderRadius: '9999px',
                        backgroundColor: 'white',
                        opacity: start ? 1 : 0,
                        boxShadow: '0 0 .5rem .1rem #fff',
                    }}
                    animate={{ x: ballx, y: bally }}
                />
                <PlayerTwo />
            </Box>
        </Stack>
    );
};
