import { PrismaService } from 'src/prisma/prisma.service';
export declare class UsersService {
    private readonly prisma;
    constructor(prisma: PrismaService);
    getUser(login: string): Promise<import(".prisma/client").User>;
    setUsername(login: string, username: string): Promise<import(".prisma/client").User>;
}
