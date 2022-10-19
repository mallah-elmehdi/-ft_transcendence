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
const chat_service_1 = require("./chat.service");
let ChatGateway = class ChatGateway {
    constructor(ChatService) {
        this.ChatService = ChatService;
        this.logger = new common_1.Logger('ChatGateway BRRRR');
    }
    afterInit(server) {
        this.logger.log('Init');
        this.muted = [];
    }
    handleConnection(client, ...args) {
        this.logger.log(`Client connected: ${client.id}`);
    }
    handleDisconnect(client) {
        this.logger.log(`Client disconnected: ${client.id}`);
    }
    isMuted(client, user_id) {
        console.log(this.muted, user_id);
        for (let i = 0; i < this.muted.length; i++) {
            const item = this.muted[i];
            if (item.user_id === user_id) {
                if (Date.now() - item.time < parseInt(item.period) * 1000 * 60) {
                    client.emit('imMuted', {
                        time: ((parseInt(item.period) * 1000 * 60 - (Date.now() - item.time)) /
                            (1000 * 60)).toFixed(2),
                    });
                    return true;
                }
            }
        }
        return false;
    }
    ping(client, payload) {
        console.log('ping(): ', payload);
        client.join(payload.room_id);
    }
    async message(client, payload) {
        if (!this.isMuted(client, payload.userId)) {
            this.io.to(payload.room_id).emit('recieveMessage', payload);
            console.log('payload ', payload);
            const check = await this.ChatService.pushMsg(payload);
            console.log('check :', check);
        }
    }
    async mute(client, payload) {
        console.log('mute:  ', payload);
        this.muted.push(payload);
    }
    async block(client, payload) {
        console.log('mute:  ', payload);
        this.io.emit("blocked");
    }
};
__decorate([
    (0, websockets_1.WebSocketServer)(),
    __metadata("design:type", socket_io_1.Namespace)
], ChatGateway.prototype, "io", void 0);
__decorate([
    (0, websockets_1.SubscribeMessage)('ping'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [socket_io_1.Socket, Object]),
    __metadata("design:returntype", void 0)
], ChatGateway.prototype, "ping", null);
__decorate([
    (0, websockets_1.SubscribeMessage)('message'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [socket_io_1.Socket, Object]),
    __metadata("design:returntype", Promise)
], ChatGateway.prototype, "message", null);
__decorate([
    (0, websockets_1.SubscribeMessage)('muteUser'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [socket_io_1.Socket, Object]),
    __metadata("design:returntype", Promise)
], ChatGateway.prototype, "mute", null);
__decorate([
    (0, websockets_1.SubscribeMessage)('blockUser'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [socket_io_1.Socket, Object]),
    __metadata("design:returntype", Promise)
], ChatGateway.prototype, "block", null);
ChatGateway = __decorate([
    (0, websockets_1.WebSocketGateway)(3003, {
        cors: {
            origin: '*',
            credentials: true,
        },
        namespace: 'dm',
    }),
    __metadata("design:paramtypes", [chat_service_1.ChatService])
], ChatGateway);
exports.ChatGateway = ChatGateway;
//# sourceMappingURL=chat.gateway.js.map