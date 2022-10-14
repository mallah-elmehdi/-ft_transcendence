import { OnGatewayInit, OnGatewayConnection, OnGatewayDisconnect } from '@nestjs/websockets';
import { Socket, Server } from 'socket.io';
export declare class GameGateway implements OnGatewayInit, OnGatewayConnection, OnGatewayDisconnect {
    private logger;
    server: Server;
    afterInit(server: any): void;
    handleConnection(client: Socket, ...args: any[]): void;
    handleDisconnect(client: any): void;
    handleMovement(client: any): void;
    startGame(socket: Socket, payload: any): void;
}
