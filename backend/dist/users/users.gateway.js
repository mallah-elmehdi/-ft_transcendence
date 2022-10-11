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
const common_1 = require("@nestjs/common");
const websockets_2 = require("@nestjs/websockets");
const prisma_service_1 = require("../prisma/prisma.service");
const users_service_1 = require("./users.service");
let UsersGateway = class UsersGateway {
    constructor(PrismaService, UsersService) {
        this.PrismaService = PrismaService;
        this.UsersService = UsersService;
        this.logger = new common_1.Logger('UsersGateway');
    }
    afterInit(server) {
        this.logger.log('Init');
    }
    handleConnection(client) {
        this.logger.log(`${client.handshake.query.login} connected: ${client.id} `);
        this.UsersService.setUserState(client.handshake.query.login, true);
    }
    handleDisconnect(client) {
        this.logger.log(`User disconnected: ${client.id}`);
        this.UsersService.setUserState(client.handshake.query.login, false);
    }
};
__decorate([
    (0, websockets_2.WebSocketServer)(),
    __metadata("design:type", socket_io_1.Server)
], UsersGateway.prototype, "server", void 0);
UsersGateway = __decorate([
    (0, websockets_1.WebSocketGateway)({ namespace: 'userstate', cors: {
            origin: process.env.FRONTEND_URL,
        } }),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService, users_service_1.UsersService])
], UsersGateway);
exports.UsersGateway = UsersGateway;
//# sourceMappingURL=users.gateway.js.map