import { PrismaService } from 'src/prisma/prisma.service';
export declare class GameService {
    private readonly prisma;
    constructor(prisma: PrismaService);
    pushScore(payload: any): Promise<import(".prisma/client").match_history>;
    updateUserStatisticsData(payload: any): Promise<import(".prisma/client").User>;
}
