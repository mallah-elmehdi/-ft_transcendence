import { OnGatewayInit, OnGatewayConnection, OnGatewayDisconnect } from '@nestjs/websockets';
import { Socket, Namespace } from 'socket.io';
import { ChatService } from './chat.service';
export declare class ChatGateway implements OnGatewayInit, OnGatewayConnection, OnGatewayDisconnect {
    private ChatService;
    constructor(ChatService: ChatService);
    private logger;
    io: Namespace;
    prisma: any;
    afterInit(server: any): void;
    handleConnection(client: Socket, ...args: any[]): void;
    handleDisconnect(client: any): void;
    ping(client: Socket, payload: any): void;
    message(client: Socket, payload: any): Promise<void>;
}
