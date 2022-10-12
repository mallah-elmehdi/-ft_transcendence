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
let UsersService = class UsersService {
    constructor(prisma) {
        this.prisma = prisma;
    }
    async friendReq(user, params) {
    }
    async getAllUsers() {
        const users = await this.prisma.user.findMany();
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
        console.log('login', login);
        try {
            const found = await this.prisma.user.findUnique({
                where: {
                    user_id: Number(login),
                },
            });
            console.log('found here: ', found);
            if (!found) {
                return null;
            }
            return found;
        }
        catch (err) {
            console.log('error in getUser', err);
            return null;
        }
    }
    async getUserbyLogin(login) {
        console.log('login', login);
        try {
            const found = await this.prisma.user.findUnique({
                where: {
                    user_login: login,
                },
            });
            console.log('found here: ', found);
            if (!found) {
                return null;
            }
            return found;
        }
        catch (err) {
            console.log('error in getUser', err);
            return null;
        }
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