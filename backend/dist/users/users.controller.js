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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UsersController = void 0;
const common_1 = require("@nestjs/common");
const users_service_1 = require("./users.service");
const platform_express_1 = require("@nestjs/platform-express");
const username_dto_1 = require("./DTO/username.dto");
const clodinary_service_1 = require("./clodinary/clodinary.service");
let UsersController = class UsersController {
    constructor(UsersService, cloudinary) {
        this.UsersService = UsersService;
        this.cloudinary = cloudinary;
    }
    async GetRooms(req) {
        return this.UsersService.getRooms(1).catch((err) => {
            throw new common_1.BadRequestException(err);
        });
    }
    async AddUsersToRoomsbyId(param, req) {
        return this.UsersService.AddToRoom(param, 'member', 1).catch((err) => {
            throw new common_1.BadRequestException(err);
        });
    }
    async GetRoomsbyId(param, req) {
        return this.UsersService.getRoombyId(param).catch((err) => {
            throw new common_1.BadRequestException(err);
        });
    }
    async GetMembersbyId(param, req) {
        return this.UsersService.getMembersbyId(param).catch((err) => {
            throw new common_1.BadRequestException(err);
        });
    }
    async CreateRoom(RoomInfoDto, file, req) {
        console.log("DTO", RoomInfoDto);
        const ba = await this.UsersService.CreateRooom(RoomInfoDto);
        if (ba) {
            const val = await this.UsersService.AddToRoom(1, 'owner', ba.room_id);
            console.log('here you shit', val);
        }
        return ba;
    }
    async AddFriend(param) {
        const user_info = await this.UsersService.getUserbyLogin('aymaatou');
        const user = 1;
        return await this.UsersService.friendReq(user, param);
    }
    async GetAllUsers() {
        return await this.UsersService.getAllUsers();
    }
    async getAllFriends() {
        return await this.UsersService.getAllFriends(1)
            .catch((err) => {
            throw new common_1.BadRequestException(err);
        });
    }
    async getMe(req) {
        return await this.UsersService.getUserbyLogin(req.user['userLogin']);
    }
    async getMachHistory() {
    }
    async getUser(login) {
        return await this.UsersService.getUser(login);
    }
    async uploadImageToCloudinary(file) {
        return await this.cloudinary.uploadImage(file).catch((err) => {
            throw new common_1.BadRequestException(err);
        });
    }
    async setUsername(login, req, usernameDto) {
        return await this.UsersService.setUsername(login, req.body.username);
    }
    async setData(login, req, file, userDataDto) {
        if (file) {
            const cloud = await this.cloudinary.uploadImage(file);
            if (cloud) {
                userDataDto.user_avatar = cloud['url'];
            }
        }
        return await this.UsersService.updateUserData(login, userDataDto);
    }
};
__decorate([
    (0, common_1.Get)('group/all'),
    (0, common_1.HttpCode)(200),
    __param(0, (0, common_1.Req)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], UsersController.prototype, "GetRooms", null);
__decorate([
    (0, common_1.Post)('group/add/:id'),
    (0, common_1.HttpCode)(201),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Req)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Object]),
    __metadata("design:returntype", Promise)
], UsersController.prototype, "AddUsersToRoomsbyId", null);
__decorate([
    (0, common_1.Get)('group/:id'),
    (0, common_1.HttpCode)(200),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Req)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Object]),
    __metadata("design:returntype", Promise)
], UsersController.prototype, "GetRoomsbyId", null);
__decorate([
    (0, common_1.Get)('members/:id'),
    (0, common_1.HttpCode)(200),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Req)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Object]),
    __metadata("design:returntype", Promise)
], UsersController.prototype, "GetMembersbyId", null);
__decorate([
    (0, common_1.Post)('group'),
    (0, common_1.HttpCode)(201),
    (0, common_1.UseInterceptors)((0, platform_express_1.FileInterceptor)('avatar')),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.UploadedFile)()),
    __param(2, (0, common_1.Req)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [username_dto_1.RoomInfoDto, Object, Object]),
    __metadata("design:returntype", Promise)
], UsersController.prototype, "CreateRoom", null);
__decorate([
    (0, common_1.Post)('add/:id'),
    (0, common_1.HttpCode)(201),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], UsersController.prototype, "AddFriend", null);
__decorate([
    (0, common_1.Get)('list/all'),
    (0, common_1.HttpCode)(200),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], UsersController.prototype, "GetAllUsers", null);
__decorate([
    (0, common_1.Get)('friends'),
    (0, common_1.HttpCode)(200),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], UsersController.prototype, "getAllFriends", null);
__decorate([
    (0, common_1.Get)('me'),
    (0, common_1.HttpCode)(200),
    __param(0, (0, common_1.Req)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], UsersController.prototype, "getMe", null);
__decorate([
    (0, common_1.Get)("match"),
    (0, common_1.HttpCode)(200),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], UsersController.prototype, "getMachHistory", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], UsersController.prototype, "getUser", null);
__decorate([
    (0, common_1.Post)(':login/avatar'),
    (0, common_1.HttpCode)(201),
    (0, common_1.UseInterceptors)((0, platform_express_1.FileInterceptor)('avatar')),
    __param(0, (0, common_1.UploadedFile)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], UsersController.prototype, "uploadImageToCloudinary", null);
__decorate([
    (0, common_1.Post)('username/:login'),
    (0, common_1.HttpCode)(201),
    __param(0, (0, common_1.Param)('login')),
    __param(1, (0, common_1.Req)()),
    __param(2, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object, username_dto_1.usernameDto]),
    __metadata("design:returntype", Promise)
], UsersController.prototype, "setUsername", null);
__decorate([
    (0, common_1.Post)('update/:login'),
    (0, common_1.HttpCode)(201),
    (0, common_1.UseInterceptors)((0, platform_express_1.FileInterceptor)('avatar')),
    __param(0, (0, common_1.Param)('login')),
    __param(1, (0, common_1.Req)()),
    __param(2, (0, common_1.UploadedFile)()),
    __param(3, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object, Object, username_dto_1.userDataDto]),
    __metadata("design:returntype", Promise)
], UsersController.prototype, "setData", null);
UsersController = __decorate([
    (0, common_1.Controller)('user'),
    __metadata("design:paramtypes", [users_service_1.UsersService, clodinary_service_1.CloudinaryService])
], UsersController);
exports.UsersController = UsersController;
//# sourceMappingURL=users.controller.js.map