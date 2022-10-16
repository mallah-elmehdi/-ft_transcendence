import { OnGatewayInit, OnGatewayConnection, OnGatewayDisconnect } from '@nestjs/websockets';
import { Socket, Namespace } from 'socket.io';
export declare class GameGateway implements OnGatewayInit, OnGatewayConnection, OnGatewayDisconnect {
    private logger;
    io: Namespace;
    room_name: string;
    rooms: any;
    PLAYER_HEIGHT: number;
    PLAYER_WIDTH: number;
    BALL_RADIUS: number;
    FRAME_PER_SEC: number;
    newRoom(): void;
    islastRoomFull(): boolean;
    addPlayer(id: string, login: string, username: string, avatar: string): void;
    getRoomById(id: string): string;
    removeRoomById(id: string): void;
    initPlayers(room: string, canvas: any): void;
    initBall(room: string, canvas: any, speedMode: number): void;
    collision(room: string, player: number): boolean;
    update(room: string, canvas: any, speedMode: number): void;
    gameLoop(room: string, canvas: any, speedMode: number): void;
    start(id: string, canvas: any, speedMode: number): void;
    afterInit(): void;
    handleConnection(client: Socket): void;
    handleDisconnect(client: Socket): void;
    data(client: Socket, payload: any): void;
}
