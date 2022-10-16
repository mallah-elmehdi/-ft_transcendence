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
exports.GameGateway = void 0;
const common_1 = require("@nestjs/common");
const websockets_1 = require("@nestjs/websockets");
const socket_io_1 = require("socket.io");
let GameGateway = class GameGateway {
    constructor() {
        this.logger = new common_1.Logger('GameGateway BRRRR');
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
    handleMovement(client) {
        const user = {
            x: 0,
            y: 0,
            w: 0,
            h: 0,
            top: 0,
            bottom: 0,
            left: 0,
            right: 0,
        };
        const opponent = {
            x: 0,
            y: 0,
            w: 0,
            h: 0,
            top: 0,
            bottom: 0,
            left: 0,
            right: 0,
        };
        const ball = {
            x: 0,
            y: 0,
            r: 0,
            d: {
                x: 0,
                y: 0,
            },
            top: 0,
            bottom: 0,
            left: 0,
            right: 0,
        };
    }
    startGame(socket, payload) {
        socket.join('aRoom');
        console.log('socket--->', socket);
    }
};
__decorate([
    (0, websockets_1.WebSocketServer)(),
    __metadata("design:type", socket_io_1.Server)
], GameGateway.prototype, "server", void 0);
__decorate([
    (0, websockets_1.SubscribeMessage)('startGame'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [socket_io_1.Socket, Object]),
    __metadata("design:returntype", void 0)
], GameGateway.prototype, "startGame", null);
GameGateway = __decorate([
    (0, websockets_1.WebSocketGateway)(3003, {
        cors: {
            origin: '*',
            credentials: true,
        },
        namespace: 'game',
    })
], GameGateway);
exports.GameGateway = GameGateway;
//# sourceMappingURL=game.gateway.js.map