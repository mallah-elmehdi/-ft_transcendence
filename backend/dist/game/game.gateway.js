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
const unique_names_generator_1 = require("unique-names-generator");
let GameGateway = class GameGateway {
    constructor() {
        this.logger = new common_1.Logger('GameGateway');
        this.PLAYER_HEIGHT = 80;
        this.PLAYER_WIDTH = 10;
        this.BALL_RADIUS = 7;
        this.FRAME_PER_SEC = 50;
    }
    newRoom() {
        this.room_name = (0, unique_names_generator_1.uniqueNamesGenerator)({
            dictionaries: [unique_names_generator_1.adjectives, unique_names_generator_1.colors, unique_names_generator_1.animals],
        });
        this.rooms[this.room_name] = {
            players_size: 0,
            ball: {
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
            },
            players: [],
        };
    }
    islastRoomFull() {
        return (this.rooms[this.room_name] && this.rooms[this.room_name].players_size == 2);
    }
    addPlayer(id, login, username, avatar) {
        if (this.rooms[this.room_name]) {
            this.rooms[this.room_name].players.push({
                login: login,
                username: username,
                avatar: avatar,
                room_name: this.room_name,
                socket_id: id,
                score: 0,
                movement: {
                    x: 0,
                    y: 0,
                    w: 0,
                    h: 0,
                    top: 0,
                    bottom: 0,
                    left: 0,
                    right: 0,
                },
            });
            this.rooms[this.room_name].players_size++;
        }
    }
    getRoomById(id) {
        var ret_room;
        for (const room in this.rooms) {
            this.rooms[room].players.forEach((player) => {
                if (player.socket_id === id) {
                    ret_room = room;
                }
            });
        }
        return ret_room;
    }
    removeRoomById(id) {
        var room = this.getRoomById(id);
        if (this.rooms[room]) {
            if (this.rooms[room].players[0].socket_id !== id)
                this.io
                    .to(this.rooms[room].players[0].socket_id)
                    .emit('opponentDisconnect');
            else
                this.io
                    .to(this.rooms[room].players[1].socket_id)
                    .emit('opponentDisconnect');
            delete this.rooms[room];
        }
    }
    initPlayers(room, canvas) {
        if (this.rooms[room]) {
            this.rooms[room].players[0].movement.x = this.PLAYER_WIDTH / 2;
            this.rooms[room].players[0].movement.y =
                (canvas.h - this.PLAYER_HEIGHT) / 2;
            this.rooms[room].players[0].movement.w = this.PLAYER_WIDTH;
            this.rooms[room].players[0].movement.h = this.PLAYER_HEIGHT;
            this.rooms[room].players[0].movement.top = 0;
            this.rooms[room].players[0].movement.bottom = 0;
            this.rooms[room].players[0].movement.left = 0;
            this.rooms[room].players[0].movement.right = 0;
            this.rooms[room].players[1].movement.x =
                canvas.w - this.PLAYER_WIDTH * (3 / 2);
            this.rooms[room].players[1].movement.y =
                (canvas.h - this.PLAYER_HEIGHT) / 2;
            this.rooms[room].players[1].movement.w = this.PLAYER_WIDTH;
            this.rooms[room].players[1].movement.h = this.PLAYER_HEIGHT;
            this.rooms[room].players[1].movement.top = 0;
            this.rooms[room].players[1].movement.bottom = 0;
            this.rooms[room].players[1].movement.left = 0;
            this.rooms[room].players[1].movement.right = 0;
        }
    }
    initBall(room, canvas, speedMode) {
        const START_DIRECTION = Math.random() - 1;
        const PLAYER_STARTER = Math.random() > 0.5 ? 1 : -1;
        if (this.rooms[room]) {
            this.rooms[room].ball.x = canvas.w / 2;
            this.rooms[room].ball.y = canvas.h / 2;
            this.rooms[room].ball.r = this.BALL_RADIUS;
            this.rooms[room].ball.d.x =
                PLAYER_STARTER * speedMode * Math.cos(START_DIRECTION * (Math.PI / 4));
            this.rooms[room].ball.d.y =
                PLAYER_STARTER * speedMode * Math.sin(START_DIRECTION * (Math.PI / 4));
            this.rooms[room].ball.top = 0;
            this.rooms[room].ball.bottom = 0;
            this.rooms[room].ball.left = 0;
            this.rooms[room].ball.right = 0;
        }
    }
    collision(room, player) {
        if (this.rooms[room]) {
            this.rooms[room].ball.top =
                this.rooms[room].ball.y - this.rooms[room].ball.r;
            this.rooms[room].ball.bottom =
                this.rooms[room].ball.y + this.rooms[room].ball.r;
            this.rooms[room].ball.left =
                this.rooms[room].ball.x - this.rooms[room].ball.r;
            this.rooms[room].ball.right =
                this.rooms[room].ball.x + this.rooms[room].ball.r;
            this.rooms[room].players[player].top = this.rooms[room].players[player].y;
            this.rooms[room].players[player].bottom =
                this.rooms[room].players[player].y + this.rooms[room].players[player].h;
            this.rooms[room].players[player].left =
                this.rooms[room].players[player].x;
            this.rooms[room].players[player].right =
                this.rooms[room].players[player].x + this.rooms[room].players[player].w;
            return (this.rooms[room].ball.bottom > this.rooms[room].players[player].top &&
                this.rooms[room].ball.right > this.rooms[room].players[player].left &&
                this.rooms[room].ball.left < this.rooms[room].players[player].right &&
                this.rooms[room].ball.top < this.rooms[room].players[player].bottom);
        }
        return false;
    }
    update(room, canvas, speedMode) {
        if (this.rooms[room]) {
            this.rooms[room].ball.x += this.rooms[room].ball.d.x;
            this.rooms[room].ball.y += this.rooms[room].ball.d.y;
            if (this.rooms[room].ball.y + this.rooms[room].ball.r > canvas.h ||
                this.rooms[room].ball.y - this.rooms[room].ball.r < 0) {
                this.rooms[room].ball.d.y *= -1;
            }
            if (this.rooms[room].ball.x + this.rooms[room].ball.r > canvas.w) {
                this.rooms[room].players[0].score++;
                this.initBall(room, canvas, speedMode);
            }
            else if (this.rooms[room].ball.x - this.rooms[room].ball.r < 0) {
                this.rooms[room].players[1].score++;
                this.initBall(room, canvas, speedMode);
            }
            const player = this.rooms[room].ball.x < canvas.w / 2 ? 0 : 1;
            if (this.collision(room, player)) {
                const angle = ((this.rooms[room].ball.y -
                    (this.rooms[room].players[player].y +
                        this.rooms[room].players[player].h / 2)) /
                    (this.rooms[room].players[player].h / 2)) *
                    (Math.PI / 4);
                const direction = this.rooms[room].ball.x < canvas.w / 2 ? 1 : -1;
                this.rooms[room].ball.d.x = direction * speedMode * Math.cos(angle);
                this.rooms[room].ball.d.y = direction * speedMode * Math.sin(angle);
            }
        }
    }
    gameLoop(room, canvas, speedMode) {
        if (this.rooms[room]) {
            this.update(room, canvas, speedMode);
            this.io
                .to(this.rooms[room].players[0].socket_id)
                .to(this.rooms[room].players[1].socket_id)
                .emit('onGameClient', this.rooms[room]);
        }
    }
    start(id, canvas, speedMode) {
        if (this.islastRoomFull()) {
            var room = this.getRoomById(id);
            if (this.rooms[room]) {
                this.initPlayers(room, canvas);
                this.initBall(room, canvas, speedMode);
                setInterval(() => {
                    this.gameLoop(room, canvas, speedMode);
                }, 1000 / this.FRAME_PER_SEC);
            }
        }
    }
    afterInit() {
        this.rooms = {};
        this.newRoom();
    }
    handleConnection(client) { }
    handleDisconnect(client) {
        this.removeRoomById(client.id);
    }
    data(client, payload) {
        if (!this.islastRoomFull()) {
            this.addPlayer(client.id, payload.login, payload.username, payload.avatar);
        }
        else {
            this.newRoom();
            this.addPlayer(client.id, payload.login, payload.username, payload.avatar);
        }
        this.start(client.id, payload.canvas, payload.speedMode);
    }
};
__decorate([
    (0, websockets_1.WebSocketServer)(),
    __metadata("design:type", socket_io_1.Namespace)
], GameGateway.prototype, "io", void 0);
__decorate([
    (0, websockets_1.SubscribeMessage)('data'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [socket_io_1.Socket, Object]),
    __metadata("design:returntype", void 0)
], GameGateway.prototype, "data", null);
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