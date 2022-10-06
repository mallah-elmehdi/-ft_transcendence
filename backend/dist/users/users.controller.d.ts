import { UsersService } from './users.service';
import { Request } from 'express';
import { Observable } from 'rxjs';
import { usernameDto } from './DTO/username.dto';
export declare class UsersController {
    private readonly UsersService;
    constructor(UsersService: UsersService);
    getMe(req: Request): Promise<import(".prisma/client").User>;
    getUser(login: string): Promise<import(".prisma/client").User>;
    UploadedFile(login: string, file: any): Observable<Object>;
    setUsername(login: string, req: any, usernameDto: usernameDto): Promise<import(".prisma/client").User>;
}
