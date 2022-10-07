import { UsersService } from './users.service';
import { Request } from 'express';
import { usernameDto } from './DTO/username.dto';
import { CloudinaryService } from './clodinary/clodinary.service';
export declare class UsersController {
    private readonly UsersService;
    private cloudinary;
    constructor(UsersService: UsersService, cloudinary: CloudinaryService);
    getMe(req: Request): Promise<import(".prisma/client").User>;
    getUser(login: string): Promise<import(".prisma/client").User>;
    uploadImageToCloudinary(file: any): Promise<import("cloudinary").UploadApiResponse | import("cloudinary").UploadApiErrorResponse>;
    setUsername(login: string, req: any, usernameDto: usernameDto): Promise<import(".prisma/client").User>;
}
