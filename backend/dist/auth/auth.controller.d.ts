import { JwtService } from '@nestjs/jwt';
import { AuthService } from './auth.service';
import { Request } from 'express';
import { TwoFactDto } from './DTOs/2fa.dto';
export declare class AuthController {
    private readonly AuthService;
    private JwtService;
    constructor(AuthService: AuthService, JwtService: JwtService);
    FortyTwoAuth(req: any): Promise<any>;
    FortyTwoAuthRedirect(req: any, res: any, code: any): Promise<any>;
    test(req: Request): string;
    TwoFactor(req: Request): Promise<string>;
    TwoFAcheck(body: TwoFactDto): Promise<{
        message: any;
    }>;
    logout(res: any): {
        message: string;
    };
}
