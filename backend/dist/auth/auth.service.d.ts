import { JwtService } from '@nestjs/jwt';
import { PrismaService } from 'src/prisma/prisma.service';
export declare class AuthService {
    private jwtService;
    private prisma;
    constructor(jwtService: JwtService, prisma: PrismaService);
    FortyTwoLogin(req: any): "No user from  FortyTwo" | {
        message: string;
        user: any;
    };
    createAccount(id: string, avatar: string): Promise<void>;
    generate2fa(): Promise<any>;
    verify2fa(userToken: string, base32secret: string): Promise<any>;
    findUserId(login: string): Promise<import(".prisma/client").User>;
    signToken(userLogin: string): {
        access_token: string;
    };
    logout(userLogin: string): Promise<void>;
}
