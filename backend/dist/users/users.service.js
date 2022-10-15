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
const http_error_by_code_util_1 = require("@nestjs/common/utils/http-error-by-code.util");
const prisma_service_1 = require("../prisma/prisma.service");
let UsersService = class UsersService {
    constructor(prisma) {
        this.prisma = prisma;
    }
    async friendReq(user, params) {
        const update = await this.prisma.friend.create({ data: { friendId: Number(params), user: { connect: { user_id: Number(user) }
                } } });
        return update;
    }
    async BlockUserById(me, DeletedUser) {
        const deleted = await this.prisma.friend.deleteMany({
            where: {
                userId: Number(me),
                friendId: Number(DeletedUser)
            }
        });
        console.log(deleted);
        return deleted;
    }
    async AddToRoom(user, rool, roomId) {
        const update = await this.prisma.members.create({
            data: { prev: (rool),
                room: { connect: { room_id: Number(roomId) } },
                user: { connect: { user_id: Number(user) } }
            }
        });
        console.log("Waaaaa3 ", update);
        return update;
    }
    async CreateRooom(RoomInfoDto) {
        const room_init = await this.prisma.room_info.create({
            data: {
                room_name: RoomInfoDto.room_name,
                room_type: RoomInfoDto.room_type,
                password: RoomInfoDto.room_password,
                room_avatar: RoomInfoDto.room_avatar,
            }
        });
        return room_init;
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
            throw http_error_by_code_util_1.HttpErrorByCode;
        console.log('uniq rooms = here :>', room);
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
        console.log("Friends", frineds);
        return frineds;
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
        console.log('found here: ', found);
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
                user_login: login,
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
                    user_login: login
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