import { Strategy } from 'passport-jwt';
import { PrismaService } from 'src/prisma/prisma.service';
declare const accessJwtStrategy_base: new (...args: any[]) => Strategy;
export declare class accessJwtStrategy extends accessJwtStrategy_base {
    private prisma;
    constructor(prisma: PrismaService);
    validate(payload: any): Promise<any>;
}
export {};
