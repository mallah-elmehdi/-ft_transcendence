import { Socket, Server } from 'socket.io';
import { OnGatewayInit, OnGatewayConnection, OnGatewayDisconnect } from '@nestjs/websockets';
import { PrismaService } from 'src/prisma/prisma.service';
import { UsersService } from './users.service';
export declare class UsersGateway implements OnGatewayInit, OnGatewayConnection, OnGatewayDisconnect {
    private readonly PrismaService;
    readonly UsersService: UsersService;
    constructor(PrismaService: PrismaService, UsersService: UsersService);
    private logger;
    server: Server;
    afterInit(server: any): void;
    handleConnection(client: Socket): void;
    handleDisconnect(client: Socket): void;
}
