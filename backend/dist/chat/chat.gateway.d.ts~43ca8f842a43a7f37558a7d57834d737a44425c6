import { OnGatewayInit, OnGatewayConnection, OnGatewayDisconnect } from '@nestjs/websockets';
import { Socket, Namespace } from 'socket.io';
import { ChatService } from './chat.service';
export declare class ChatGateway implements OnGatewayInit, OnGatewayConnection, OnGatewayDisconnect {
    private ChatService;
    constructor(ChatService: ChatService);
    private logger;
    io: Namespace;
    prisma: any;
    muted: any[];
    afterInit(server: any): void;
    handleConnection(client: Socket, ...args: any[]): void;
    handleDisconnect(client: any): void;
    isMuted(client: Socket, user_id: any): boolean;
    ping(client: Socket, payload: any): void;
    message(client: Socket, payload: any): Promise<void>;
    mute(client: Socket, payload: any): Promise<void>;
    block(client: Socket, payload: any): Promise<void>;
}
