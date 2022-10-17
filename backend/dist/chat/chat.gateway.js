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
exports.ChatGateway = void 0;
const common_1 = require("@nestjs/common");
const websockets_1 = require("@nestjs/websockets");
const socket_io_1 = require("socket.io");
let ChatGateway = class ChatGateway {
    constructor() {
        this.logger = new common_1.Logger('ChatGateway BRRRR');
    }
    afterInit(server) {
        this.logger.log('Init');
    }
    handleConnection(client, ...args) {
        this.logger.log(`Client connected: ${client.id}`);
    }
    handleDisconnect(client) {
        this.logger.log(`Client disconnected: ${client.id}`);
    }
    handleMessage(client, payload) {
        console.log("You am the palof", payload);
<<<<<<< HEAD
        const roomId = payload.roomId;
        client.join(roomId);
        this.server.to(roomId).emit(payload.message);
=======
        client.join(payload.userId + 'mougnou');
        this.server.to(payload.userId + 'mougnou').emit(payload.message);
>>>>>>> 14814da77e0e57fec3d7d0811f083d5af674b82c
    }
};
__decorate([
    (0, websockets_1.WebSocketServer)(),
    __metadata("design:type", socket_io_1.Server)
], ChatGateway.prototype, "server", void 0);
__decorate([
    (0, websockets_1.SubscribeMessage)('msgToServer'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [socket_io_1.Socket, Object]),
    __metadata("design:returntype", void 0)
], ChatGateway.prototype, "handleMessage", null);
ChatGateway = __decorate([
<<<<<<< HEAD
    (0, websockets_1.WebSocketGateway)(3003, { cors: {
=======
    (0, websockets_1.WebSocketGateway)(3002, { cors: {
>>>>>>> 14814da77e0e57fec3d7d0811f083d5af674b82c
            origin: '*',
            credentials: true
        }, namespace: 'dm'
    })
], ChatGateway);
exports.ChatGateway = ChatGateway;
//# sourceMappingURL=chat.gateway.js.map