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
    async CheckUpdatedStatus(user_id) {
        console.log("are you here");
        const updated = await this.prisma.user.updateMany({
            where: {
                user_id: Number(user_id),
                updated: false,
            },
            data: {
                updated: true,
            }
        });
        console.log(updated);
        return updated;
    }
    async friendReq(user, friend_id) {
        try {
            const update = await this.prisma.friend.create({ data: { friendId: Number(friend_id), user: { connect: { user_id: Number(user) }
                    } } });
            const roomName = user.toString() + '_' + friend_id.toString();
            const room_init = await this.prisma.room_info.create({
                data: {
                    room_name: roomName,
                    room_type: "DM",
                }
            });
            const membership = await await this.prisma.members.create({
                data: {
                    roomId: Number(room_init.room_id),
                    userId: Number(user),
                    prev: "DM"
                },
            });
            const joine = await await this.prisma.members.create({
                data: {
                    roomId: Number(room_init.room_id),
                    userId: Number(friend_id),
                    prev: "DM"
                },
            });
            return update;
        }
        catch (err) {
            throw new common_1.HttpException("Error", common_1.HttpStatus.UNPROCESSABLE_ENTITY);
        }
    }
    async BlockUserFromGroupById(group_id, user_id) {
        const blocked = await this.prisma.members.deleteMany({
            where: {
                roomId: Number(group_id),
                userId: Number(user_id)
            }
        });
        if (blocked.count == 0) {
            throw new common_1.HttpException("NOT FOUND", common_1.HttpStatus.NOT_FOUND);
        }
        return blocked;
    }
    async getDmRoom(me, friend_id) {
        const private_room = await this.prisma.room_info.findFirst({
            where: {
                OR: [
                    {
                        room_name: {
                            contains: me.toString() + '_' + friend_id.toString()
                        },
                    },
                    {
                        room_name: {
                            contains: friend_id.toString() + '_' + me.toString()
                        }
                    }
                ]
            }
        });
        return private_room;
    }
    async getAllChats(room_id) {
        const all_msg = await this.prisma.chats.findMany({
            where: {
                to_id: Number(room_id)
            }
        });
        return all_msg;
    }
    async BlockUserById(me, DeletedUser) {
        const private_room = await this.prisma.room_info.findFirst({
            where: {
                OR: [
                    {
                        room_name: {
                            contains: me.toString() + '_' + DeletedUser.toString()
                        },
                    },
                    {
                        room_name: {
                            contains: DeletedUser.toString() + '_' + me.toString()
                        }
                    }
                ]
            }
        });
        const delete_membership = await this.prisma.members.deleteMany({
            where: {
                roomId: private_room.room_id
            }
        });
        const delete_room = await this.prisma.room_info.delete({
            where: {
                room_id: private_room.room_id
            }
        });
        const deleted = await this.prisma.friend.deleteMany({
            where: {
                userId: Number(me),
                friendId: Number(DeletedUser)
            }
        });
        if (deleted.count == 0)
            throw "NOT FOUND";
        return deleted;
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
        return update;
    }
    async UpdateRooom(room_id, RoomInfoDto) {
        const saltRounds = 10;
        var hashed_password = null;
        if (RoomInfoDto.room_password) {
            hashed_password = bcrypt.hashSync(RoomInfoDto.room_password, saltRounds);
        }
        const room_init = await this.prisma.room_info.update({
            where: {
                room_id: Number(room_id)
            },
            data: {
                room_name: RoomInfoDto.room_name,
                room_type: RoomInfoDto.room_type,
                password: hashed_password,
                room_avatar: RoomInfoDto.room_avatar,
            }
        });
        return room_init;
    }
    async CreateRooom(RoomInfoDto) {
        const saltRounds = 10;
        var hashed_password = null;
        if (RoomInfoDto.room_password) {
            hashed_password = bcrypt.hashSync(RoomInfoDto.room_password, saltRounds);
        }
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
        console.log("Id: ", id);
        const room = await this.prisma.room_info.findUnique({
            where: {
                room_id: Number(id),
            },
        });
        if (!room)
            throw "NOT FOUND";
        return room;
    }
    async getAllRooms() {
        const all_rooms = await this.prisma.room_info.findMany({
            where: {
                OR: [
                    {
                        room_type: {
                            contains: "public",
                        },
                    },
                    {
                        room_type: {
                            contains: "protected",
                        },
                    },
                ]
            }
        });
        return all_rooms;
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