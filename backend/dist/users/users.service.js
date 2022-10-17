"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UsersService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../prisma/prisma.service");
const bcrypt = require('bcrypt');
let UsersService = class UsersService {
    constructor(prisma) {
        this.prisma = prisma;
    }
    async friendReq(user, params) {
        const update = await this.prisma.friend.create({ data: { friendId: Number(params), user: { connect: { user_id: Number(user) }
                } } });
        return update;
    }
    async BlockUserFromGroupById(group_id, user_id) {
        const blocked = await this.prisma.members.deleteMany({
            where: {
                roomId: Number(group_id),
                userId: Number(user_id)
            }
        });
        if (blocked.count == 0)
            throw "NOT FOUND";
        console.log("Heeeeeee from group ", blocked);
        return blocked;
    }
    async BlockUserById(me, DeletedUser) {
        const deleted = await this.prisma.friend.deleteMany({
            where: {
                userId: Number(me),
                friendId: Number(DeletedUser)
            }
        });
    }
    async AddToRoom(user, rool, roomId) {
        const update = await this.prisma.members.create({
            data: { prev: (rool),
                room: { connect: { room_id: Number(roomId) } },
                user: { connect: { user_id: Number(user) } }
            }
        });
        return update;
    }
    async ChangeMemberStatus(user, rool, roomId) {
        const update = await this.prisma.members.updateMany({
            where: {
                roomId: Number(roomId),
                userId: Number(user)
            },
            data: { prev: (rool)
            }
        });
        console.log("Waaaaa3 ", update);
        return update;
    }
    async ChangeGroupStatus(id, status) {
    }
    async CreateRooom(RoomInfoDto) {
        const saltRounds = 10;
        var hashed_password = null;
        console.log("room password ", RoomInfoDto.room_password);
        if (RoomInfoDto.room_password) {
            hashed_password = bcrypt.hashSync(RoomInfoDto.room_password, saltRounds);
        }
        console.log("Hashed paassiwordi =>", hashed_password);
        const room_init = await this.prisma.room_info.create({
            data: {
                room_name: RoomInfoDto.room_name,
                room_type: RoomInfoDto.room_type,
                password: hashed_password,
                room_avatar: RoomInfoDto.room_avatar,
            }
        });
        return room_init;
    }
    check_password(room_password, hash) {
        return bcrypt.compareSync(room_password, hash);
    }
    async getRooms(id) {
        const rooms = await this.prisma.members.findMany({
            where: {
                userId: Number(id),
            },
        });
        console.log('rooms = >', rooms);
        return rooms;
    }
    async getRoombyId(id) {
        const room = await this.prisma.room_info.findUnique({
            where: {
                room_id: Number(id),
            },
        });
        if (!room)
            throw "NOT FOUND";
        return room;
    }
    async DeleteRoombyId(id) {
        const removed = await this.prisma.members.deleteMany({
            where: {
                roomId: Number(id)
            }
        });
        const deleted = await this.prisma.room_info.delete({
            where: {
                room_id: Number(id),
            }
        });
        return deleted;
    }
    async getMembersbyId(id) {
        const members = await this.prisma.members.findMany({
            where: {
                roomId: Number(id),
            },
        });
        return members;
    }
    async getMembersbyIdRoom(id, user) {
        const members = await this.prisma.members.findMany({
            where: {
                userId: Number(user),
                roomId: Number(id),
            },
        });
        return members;
    }
    async getAllUsers(me) {
        const users = await this.prisma.user.findMany({
            where: {
                NOT: {
                    user_id: Number(me)
                }
            }
        });
        return users;
    }
    async getAllFriends(login) {
        const frineds = await this.prisma.friend.findMany({
            where: {
                userId: login,
            },
        });
        const other_frineds = await this.prisma.friend.findMany({
            where: {
                friendId: login,
            },
        });
        const user_id = frineds.map((friend) => friend.friendId);
        const other_user_id = other_frineds.map((friend) => friend.userId);
        const frineds_id = [...user_id, ...other_user_id];
        return frineds_id;
    }
    async getUser(login) {
        const found = await this.prisma.user.findUnique({
            where: {
                user_id: Number(login),
            },
        });
        if (!found) {
            throw "NOT FOUND";
        }
        return found;
    }
    async getUserbyLogin(login) {
        const found = await this.prisma.user.findUnique({
            where: {
                user_login: login,
            },
        });
        if (!found) {
            throw "NOT FOUND";
        }
        return found;
    }
    async setUsername(login, username) {
        return await this.prisma.user.update({
            where: {
                user_login: login,
            },
            data: {
                user_name: username,
            },
        });
    }
    async updateUserData(login, userDataDto) {
        return await this.prisma.user.update({
            where: {
                user_id: Number(login),
            },
            data: {
                user_avatar: userDataDto.user_avatar,
                user_name: userDataDto.user_name,
                facebook: userDataDto.facebook,
                discord: userDataDto.discord,
                instagram: userDataDto.instagram,
            },
        });
    }
    async setUserState(login, state) {
        console.log(`${login} userState: ${state}`);
        try {
            const userOnline = await this.prisma.user.update({
                where: {
                    user_id: Number(login)
                },
                data: {
                    online: state
                }
            });
        }
        catch (err) {
            console.log('error in setUserState ', err);
        }
    }
};
UsersService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], UsersService);
exports.UsersService = UsersService;
//# sourceMappingURL=users.service.js.map