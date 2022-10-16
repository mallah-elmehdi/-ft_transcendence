import { useMediaQuery, VStack, Grid, GridItem, HStack, Avatar, useTheme, Text, Box, Flex, Spinner } from '@chakra-ui/react';
import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { io } from 'socket.io-client';
import { pagesContent, SOCKET } from '../constants';
import { newNotification } from '../State/Action';
import { getUserInfo } from '../State/Api';
// import GameContextProvider from '../State/GameProvider';
import { GlobalContext } from '../State/Provider';

export default function GamePage() {
    // general
    const theme = useTheme();
    const [isSmallScreen] = useMediaQuery(`(min-width: ${theme.breakpoints.md})`);
    // hooks
    const params = useParams();
    const navigate = useNavigate();
    // states
    const [speedMode, setSpeedMode] = React.useState(0);
    const [play, setPlay] = React.useState(false);
    const [user, setUser] = React.useState({
        username: '',
        avatar: '',
        login: '',
        score: 0,
    });
    const [opponent, setOpponent] = React.useState({
        username: '?',
        avatar: '?',
        login: '?',
        score: 0,
    });
    // canvas
    const canvasRef = React.useRef<HTMLCanvasElement>(null);
    const containerRef = React.useRef<HTMLDivElement>(null);
    // context
    const { data, dispatch } = React.useContext<any>(GlobalContext);
    const { userInfo } = data;

    // useEffect
    React.useEffect(() => {
        // socket
        const socket = io(`${SOCKET}/game`);
        // canvas
        const canvasTag = canvasRef?.current;
        const canvasContext = canvasRef?.current?.getContext('2d');

        // ge the speeed
        const getTheSpeedMode = () => {
            const mode = params.speed_mode?.toLowerCase();
            if (mode === 'easy') setSpeedMode(10);
            else if (mode === 'normal') setSpeedMode(15);
            else if (mode === 'hard') setSpeedMode(20);
            else navigate(pagesContent.home.url);
        };

        getTheSpeedMode();
        // check for data
        if (!userInfo)
            getUserInfo(dispatch).catch((error) => {
                navigate(pagesContent.login.url);
            });
        else {
            setUser({
                login: userInfo?.user_login,
                username: userInfo?.user_name,
                avatar: userInfo?.user_avatar,
                score: 0,
            });
            // get the canvas coordinate
            const getCanvasSize = () => {
                let w = 0;
                let h = 0;
                if (canvasTag) {
                    w = canvasTag.width;
                    h = canvasTag.height;
                }
                return {
                    w,
                    h,
                };
            };
            // ------------------------------------------ drawing
            // apply color
            const applyColor = (color: string) => {
                if (canvasContext) canvasContext.fillStyle = color;
            };
            // feild
            const drawFeild = (x: number, y: number, w: number, h: number) => {
                applyColor('#000');
                canvasContext?.fillRect(x, y, w, h);
            };
            // player
            const drawPlayer = (x: number, y: number, w: number, h: number) => {
                applyColor('#fff');
                canvasContext?.fillRect(x, y, w, h);
            };
            // ball
            const drawBall = (x: number, y: number, r: number) => {
                applyColor('#fff');
                canvasContext?.beginPath();
                canvasContext?.arc(x, y, r, 0, Math.PI * 2, false);
                canvasContext?.closePath();
                canvasContext?.fill();
            };
            // ------------------------------------------ socket
            const initGame = () => {
                socket.emit('data', {
                    login: userInfo?.user_login,
                    username: userInfo?.user_name,
                    avatar: userInfo?.user_avatar,
                    canvas: getCanvasSize(),
                    speedMode: speedMode,
                });
            };
            const startGame = () => {
                setPlay(true);
            };
            const opponentDisconnect = () => {
                setPlay(false);
                dispatch(newNotification({ type: 'Error', message: 'Profile updated successfuly' }));
                // navigate(pagesContent.home.url);
            };
            // ------------------------------------------ game
            // render the frame
            const render = (ball: any, user: any, opponent: any) => {
                drawFeild(0, 0, getCanvasSize().w, getCanvasSize().h);
                drawBall(ball.x, ball.y, ball.r);
                drawPlayer(user.x, user.y, user.w, user.h);
                drawPlayer(opponent.x, opponent.y, opponent.w, opponent.h);
            };
            const update = (data: any) => {
                render(data.ball, data.players[0].movement, data.players[1].movement);
                setOpponent({
                    username: data.players[1].username,
                    avatar: data.players[1].avatar,
                    login: data.players[1].login,
                    score: data.players[1].score,
                });
                setUser({
                    username: data.players[0].username,
                    avatar: data.players[0].avatar,
                    login: data.players[0].login,
                    score: data.players[0].score,
                });
            };
            // ------------------------------------------ game loop
            // emit game
            initGame();
            // on game
            socket.on('opponentDisconnect', opponentDisconnect);
            socket.on('start', startGame);
            socket.on('onGameClient', update);

            return () => {
                socket.disconnect();
                socket.off('opponentDisconnect', opponentDisconnect);
                socket.off('start', startGame);
                socket.off('onGameClient', update);
            };
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [userInfo]);

    // React.useEffect(() => {
    // const getSocket = () => {
    //     socket.on('playFromServer', (data) => {
    //         console.log(data);
    //         // setOpponent(data.opponent);
    //         setOpponentMove(data[opponent.login].move);
    //         setOpponentScore(data[opponent.login].score);
    //         setUserMove(data[user.login].move);
    //         setUserScore(data[opponent.login].score);
    //     });
    // };
    // const setSocket = () => {
    //     console.log(userMove);
    //     socket.emit('playToServer', {
    //         [user.login]: {
    //             move: userMove,
    //             score: userScore,
    //         },
    //         [opponent.login]: {
    //             move: opponentMove,
    //             score: opponentScore,
    //         },
    //     });
    //     getSocket();
    // };
    // get the canvas context
    // const canvasTag = canvasRef?.current;
    // const canvasContext = canvasRef?.current?.getContext('2d');
    // // global vars
    // const PLAYER_HEIGHT = 80;
    // const PLAYER_WIDTH = 10;
    // const BALL_RADIUS = 7;
    // const FRAME_PER_SEC = 50;
    // const SPEED = 10;
    // const STEP = 20;
    // // update the canvas size <-- getter
    // const getCanvasSize = () => {
    //     let w = 0;
    //     let h = 0;
    //     if (canvasTag) {
    //         w = canvasTag.width;
    //         h = canvasTag.height;
    //     }
    //     return {
    //         w,
    //         h,
    //     };
    // };
    // // update the canvas size <-- setter
    // const updateCanvasSize = (w: number, h: number) => {
    //     if (canvasTag) {
    //         canvasTag.width = w;
    //         canvasTag.height = h;
    //     }
    // };
    // // uset data
    // const user = {
    //     x: 0,
    //     y: 0,
    //     w: 0,
    //     h: 0,
    //     top: 0,
    //     bottom: 0,
    //     left: 0,
    //     right: 0,
    // };
    // // opponent data
    // const opponent = {
    //     x: 0,
    //     y: 0,
    //     w: 0,
    //     h: 0,
    //     top: 0,
    //     bottom: 0,
    //     left: 0,
    //     right: 0,
    // };
    // // ball data
    // const ball = {
    //     x: 0,
    //     y: 0,
    //     r: 0,
    //     d: {
    //         x: 0,
    //         y: 0,
    //     },
    //     top: 0,
    //     bottom: 0,
    //     left: 0,
    //     right: 0,
    // };
    // // move
    // const move = (event: KeyboardEvent) => {
    //     if (event.key === 'ArrowUp' || event.key === 'ArrowDown') {
    //         setUserMove('ArrowUp');
    //         setOpponentMove(opponent.move);
    //         setSocket();
    //         if (event.key === 'ArrowUp') {
    //             if (user.y > 0) user.y -= STEP;
    //         } else if (event.key === 'ArrowDown') {
    //             if (user.y + user.h < getCanvasSize().h) user.y += STEP;
    //         }
    //     }
    // };
    // const initPlayers = () => {
    //     // opponent data
    //     opponent.x = getCanvasSize().w - PLAYER_WIDTH * (3 / 2);
    //     opponent.y = (getCanvasSize().h - PLAYER_HEIGHT) / 2;
    //     opponent.w = PLAYER_WIDTH;
    //     opponent.h = PLAYER_HEIGHT;
    //     opponent.top = 0;
    //     opponent.bottom = 0;
    //     opponent.left = 0;
    //     opponent.right = 0;
    //     // uset data
    //     user.x = PLAYER_WIDTH / 2;
    //     user.y = (getCanvasSize().h - PLAYER_HEIGHT) / 2;
    //     user.w = PLAYER_WIDTH;
    //     user.h = PLAYER_HEIGHT;
    //     user.top = 0;
    //     user.bottom = 0;
    //     user.left = 0;
    //     user.right = 0;
    // };
    // // init game
    // const initBall = () => {
    //     const START_DIRECTION = Math.random() - 1;
    //     const PLAYER_STARTER = Math.random() > 0.5 ? 1 : -1;
    //     // ball data
    //     ball.x = getCanvasSize().w / 2;
    //     ball.y = getCanvasSize().h / 2;
    //     ball.r = BALL_RADIUS;
    //     ball.d.x = PLAYER_STARTER * SPEED * Math.cos(START_DIRECTION * (Math.PI / 4));
    //     ball.d.y = PLAYER_STARTER * SPEED * Math.sin(START_DIRECTION * (Math.PI / 4));
    //     ball.top = 0;
    //     ball.bottom = 0;
    //     ball.left = 0;
    //     ball.right = 0;
    // };
    // // apply color
    // const applyColor = (color: string) => {
    //     if (canvasContext) canvasContext.fillStyle = color;
    // };
    // // player
    // const drawPlayer = (x: number, y: number, w: number, h: number) => {
    //     applyColor('#fff');
    //     canvasContext?.fillRect(x, y, w, h);
    // };
    // // player
    // const drawFeild = (x: number, y: number, w: number, h: number) => {
    //     applyColor('#000');
    //     canvasContext?.fillRect(x, y, w, h);
    // };
    // // ball
    // const drawBall = (x: number, y: number, r: number) => {
    //     applyColor('#fff');
    //     canvasContext?.beginPath();
    //     canvasContext?.arc(x, y, r, 0, Math.PI * 2, false);
    //     canvasContext?.closePath();
    //     canvasContext?.fill();
    // };
    // // render
    // const render = () => {
    //     drawFeild(0, 0, getCanvasSize().w, getCanvasSize().h);
    //     drawBall(ball.x, ball.y, ball.r);
    //     drawPlayer(user.x, user.y, user.w, user.h);
    //     drawPlayer(opponent.x, opponent.y, opponent.w, opponent.h);
    // };
    // //chech the ball hit
    // const collision = (player: any) => {
    //     ball.top = ball.y - ball.r;
    //     ball.bottom = ball.y + ball.r;
    //     ball.left = ball.x - ball.r;
    //     ball.right = ball.x + ball.r;
    //     player.top = player.y;
    //     player.bottom = player.y + player.h;
    //     player.left = player.x;
    //     player.right = player.x + player.w;
    //     return ball.bottom > player.top && ball.right > player.left && ball.left < player.right && ball.top < player.bottom;
    // };
    // //updatingthe frame
    // const update = () => {
    //     ball.x += ball.d.x;
    //     ball.y += ball.d.y;
    //     // bouce on bottom and top
    //     if (ball.y + ball.r > getCanvasSize().h || ball.y - ball.r < 0) {
    //         ball.d.y *= -1;
    //     }
    //     // bouce on right and left
    //     if (ball.x + ball.r > getCanvasSize().w) {
    //         setUserScore((data: number) => data + 1);
    //         initBall();
    //         setSocket();
    //     } else if (ball.x - ball.r < 0) {
    //         setOpponentScore((data: number) => data + 1);
    //         initBall();
    //         setSocket();
    //     }
    //     // bouce the player
    //     const player = ball.x < getCanvasSize().w / 2 ? user : opponent;
    //     if (collision(player)) {
    //         const angle = ((ball.y - (player.y + player.h / 2)) / (player.h / 2)) * (Math.PI / 4);
    //         const direction = ball.x < getCanvasSize().w / 2 ? 1 : -1;
    //         ball.d.x = direction * SPEED * Math.cos(angle);
    //         ball.d.y = direction * SPEED * Math.sin(angle);
    //     }
    // };
    // // callrendring
    // const game = () => {
    //     update();
    //     render();
    // };
    // initPlayers();
    // initBall();
    // setInterval(game, 1000 / FRAME_PER_SEC);
    // document.addEventListener('keydown', move);
    // return () => document.removeEventListener('keydown', move);
    // }, []);

    return (
        <>
            <VStack alignContent="center" justifyContent="center" ref={containerRef}>
                <Grid h="100%" templateColumns="repeat(8, 1fr)" gap={10}>
                    <GridItem colSpan={4}>
                        <HStack justifyContent="flex-end" spacing={10}>
                            <HStack justifyContent="flex-end" spacing={3}>
                                {isSmallScreen && <Text fontSize="xl">{user.username}</Text>}
                                <Avatar name={user.username} src={user.avatar} size="md" />
                            </HStack>
                            <Text fontSize="4xl">{user.score}</Text>
                        </HStack>
                    </GridItem>
                    <GridItem colSpan={4}>
                        <HStack justifyContent="flex-end" spacing={10}>
                            <Text fontSize="4xl">{opponent.score}</Text>
                            <HStack justifyContent="flex-end" spacing={3}>
                                <Avatar name={opponent.username} src={opponent.avatar} size="md" />
                                {isSmallScreen && <Text fontSize="xl">{opponent.username}</Text>}
                            </HStack>
                        </HStack>
                    </GridItem>
                </Grid>
                <Box w="fit-content" h="fit-content">
                    {!play && (
                        <Flex w="100%" alignItems="center" h="10rem" justifyContent="center">
                            <Spinner></Spinner>
                        </Flex>
                    )}
                    <canvas width="800" height="400" ref={canvasRef}></canvas>
                </Box>
            </VStack>
        </>
    );
}
