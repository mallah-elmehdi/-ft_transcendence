import { PrismaService } from 'src/prisma/prisma.service';
import { userDataDto } from './DTO/username.dto';
export declare class UsersService {
    private readonly prisma;
    constructor(prisma: PrismaService);
    getUser(login: string): Promise<import(".prisma/client").User>;
    setUsername(login: string, username: string): Promise<import(".prisma/client").User>;
    updateUserData(login: string, userDataDto: userDataDto): Promise<import(".prisma/client").User>;
    GetMatchHistory(login: string): Promise<(import(".prisma/client").User & {
        match_history: import(".prisma/client").match_history[];
    })[]>;
}
