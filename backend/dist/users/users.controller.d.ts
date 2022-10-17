import { UsersService } from './users.service';
import { Request } from 'express';
import { usernameDto, userDataDto, RoomInfoDto, AddedUsersDto, MemberStatus } from './DTO/username.dto';
import { CloudinaryService } from './clodinary/clodinary.service';
export declare class UsersController {
    private readonly UsersService;
    private cloudinary;
    constructor(UsersService: UsersService, cloudinary: CloudinaryService);
    GetRooms(req: Request): Promise<import(".prisma/client").Members[]>;
    ChangeMemberStatus(status: MemberStatus, param: Number, req: Request): Promise<import(".prisma/client").Prisma.BatchPayload>;
    AddUsersToRoomsbyId(user: AddedUsersDto, param: Number, req: Request): Promise<import(".prisma/client").Members>;
    BlockUserById(param: Number, req: Request): Promise<void>;
    BlockUserFromGroupById(room: any, user_id: Number, req: Request): Promise<import(".prisma/client").Prisma.BatchPayload>;
    GetRoomsbyId(param: Number, req: Request): Promise<import(".prisma/client").Room_info>;
    DeleteRoomsbyId(param: Number, req: Request): Promise<import(".prisma/client").Room_info>;
    GetMembersbyId(param: Number, req: Request): Promise<import(".prisma/client").Members[]>;
    CreateRoom(RoomInfoDto: RoomInfoDto, file: any, req: Request): Promise<import(".prisma/client").Room_info>;
    AddFriend(param: Number): Promise<import(".prisma/client").Friend>;
    GetAllUsers(): Promise<import(".prisma/client").User[]>;
    getAllFriends(): Promise<import(".prisma/client").Friend[]>;
    getMe(req: Request): Promise<import(".prisma/client").User>;
    getMachHistory(): Promise<void>;
    getUser(login: number): Promise<import(".prisma/client").User>;
    uploadImageToCloudinary(file: any): Promise<import("cloudinary").UploadApiResponse | import("cloudinary").UploadApiErrorResponse>;
    setUsername(login: string, req: any, usernameDto: usernameDto): Promise<import(".prisma/client").User>;
    setData(login: any, req: any, file: any, userDataDto: userDataDto): Promise<import(".prisma/client").User>;
}
