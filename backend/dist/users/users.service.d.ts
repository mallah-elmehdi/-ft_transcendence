import { PrismaService } from 'src/prisma/prisma.service';
import { userDataDto } from './DTO/username.dto';
export declare class UsersService {
    private readonly prisma;
    constructor(prisma: PrismaService);
    getAllFriends(login: number): Promise<import(".prisma/client").Friend[]>;
    getUser(login: number): Promise<import(".prisma/client").User>;
    setUsername(login: string, username: string): Promise<import(".prisma/client").User>;
    updateUserData(login: string, userDataDto: userDataDto): Promise<import(".prisma/client").User>;
    setUserState(login: any, state: boolean): Promise<void>;
}
