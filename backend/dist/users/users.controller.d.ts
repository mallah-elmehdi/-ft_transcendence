import { UsersService } from './users.service';
import { Request } from 'express';
export declare class UsersController {
    private readonly UsersService;
    constructor(UsersService: UsersService);
    getUser(req: Request): Promise<import(".prisma/client").User>;
}
