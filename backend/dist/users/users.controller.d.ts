import { UsersService } from './users.service';
export declare class UsersController {
    private readonly UsersService;
    constructor(UsersService: UsersService);
    getUser(login: any): Promise<import(".prisma/client").User>;
}
