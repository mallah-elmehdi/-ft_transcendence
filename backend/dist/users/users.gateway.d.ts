import { Socket } from 'socket.io';
import { PrismaService } from 'src/prisma/prisma.service';
export declare class UsersGateway {
    private readonly PrismaService;
    constructor(PrismaService: PrismaService);
    handleMessage(client: Socket, payload: any): Promise<void>;
}
