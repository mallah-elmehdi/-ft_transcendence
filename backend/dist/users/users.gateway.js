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
exports.UsersGateway = void 0;
const websockets_1 = require("@nestjs/websockets");
const socket_io_1 = require("socket.io");
const prisma_service_1 = require("../prisma/prisma.service");
let UsersGateway = class UsersGateway {
    constructor(PrismaService) {
        this.PrismaService = PrismaService;
    }
    async handleMessage(client, payload) {
        const userLogin = JSON.parse(payload).userLogin;
        const userOnline = await this.PrismaService.user.update({
            where: {
                user_login: userLogin
            },
            data: {
                online: true
            }
        });
        console.log('Client connected ' + client.id);
        client.on('disconnect', async () => {
            console.log('Client disconnected ' + client.id);
            const userOffline = await this.PrismaService.user.update({
                where: {
                    user_login: userLogin
                },
                data: {
                    online: false
                }
            });
        });
    }
};
__decorate([
    (0, websockets_1.SubscribeMessage)('connection'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [socket_io_1.Socket, Object]),
    __metadata("design:returntype", Promise)
], UsersGateway.prototype, "handleMessage", null);
UsersGateway = __decorate([
    (0, websockets_1.WebSocketGateway)({ namespace: 'userstate', cors: {
            origin: process.env.FRONTEND_URL,
        } }),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], UsersGateway);
exports.UsersGateway = UsersGateway;
//# sourceMappingURL=users.gateway.js.map