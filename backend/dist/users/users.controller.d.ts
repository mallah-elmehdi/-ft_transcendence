import { UsersService } from './users.service';
import { Request } from 'express';
import { usernameDto, userDataDto } from './DTO/username.dto';
import { CloudinaryService } from './clodinary/clodinary.service';
export declare class UsersController {
    private readonly UsersService;
    private cloudinary;
    constructor(UsersService: UsersService, cloudinary: CloudinaryService);
    getMe(req: Request): Promise<import(".prisma/client").User>;
    getMachHistory(): Promise<(import(".prisma/client").User & {
        match_history: import(".prisma/client").match_history[];
    })[]>;
    uploadImageToCloudinary(file: any): Promise<import("cloudinary").UploadApiResponse | import("cloudinary").UploadApiErrorResponse>;
    setUsername(login: string, req: any, usernameDto: usernameDto): Promise<import(".prisma/client").User>;
    setData(login: string, req: any, file: any, userDataDto: userDataDto): Promise<import(".prisma/client").User>;
}
