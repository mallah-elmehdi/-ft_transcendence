import { PrismaService } from 'src/prisma/prisma.service';
export declare class ChatService {
    private readonly prisma;
    constructor(prisma: PrismaService);
    pushMsg(payload: any): Promise<import(".prisma/client").Chats>;
}
