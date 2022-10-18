import { PrismaService } from 'src/prisma/prisma.service';
import { userDataDto, RoomInfoDto } from './DTO/username.dto';
export declare class UsersService {
    private readonly prisma;
    constructor(prisma: PrismaService);
    friendReq(user: Number, params: Number): Promise<import(".prisma/client").Friend>;
    BlockUserFromGroupById(group_id: any, user_id: any): Promise<import(".prisma/client").Prisma.BatchPayload>;
    BlockUserById(me: number, DeletedUser: any): Promise<void>;
    AddToRoom(user: any, rool: any, roomId: any): Promise<import(".prisma/client").Members>;
    ChangeMemberStatus(user: any, rool: any, roomId: any): Promise<import(".prisma/client").Prisma.BatchPayload>;
    ChangeGroupStatus(id: any, status: any): Promise<void>;
    UpdateRooom(room_id: any, RoomInfoDto: RoomInfoDto): Promise<import(".prisma/client").Room_info>;
    CreateRooom(RoomInfoDto: RoomInfoDto): Promise<import(".prisma/client").Room_info>;
    check_password(room_password: any, hash: any): boolean;
    getRooms(id: Number): Promise<import(".prisma/client").Members[]>;
    getRoombyId(id: Number): Promise<import(".prisma/client").Room_info>;
    getAllRooms(): Promise<import(".prisma/client").Room_info[]>;
    DeleteRoombyId(id: Number): Promise<import(".prisma/client").Room_info>;
    getMembersbyId(id: Number): Promise<import(".prisma/client").Members[]>;
    getMembersbyIdRoom(id: Number, user: Number): Promise<import(".prisma/client").Members[]>;
    getAllUsers(me: any): Promise<import(".prisma/client").User[]>;
    getAllFriends(login: number): Promise<number[]>;
    getUser(login: number): Promise<import(".prisma/client").User>;
    getUserbyLogin(login: string): Promise<import(".prisma/client").User>;
    setUsername(login: string, username: string): Promise<import(".prisma/client").User>;
    updateUserData(login: Number, userDataDto: userDataDto): Promise<import(".prisma/client").User>;
    setUserState(login: any, state: boolean): Promise<void>;
}
