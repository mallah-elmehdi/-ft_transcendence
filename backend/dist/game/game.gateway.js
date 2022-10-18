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
const websockets_1 = require("@nestjs/websockets");
const socket_io_1 = require("socket.io");
const unique_names_generator_1 = require("unique-names-generator");
let GameGateway = class GameGateway {
    constructor() {
        this.PLAYER_HEIGHT = 80;
        this.PLAYER_WIDTH = 10;
        this.BALL_RADIUS = 7;
        this.FRAME_PER_SEC = 50;
        this.STEP = 20;
    }
    isRoomFull(room_name) {
        return (this.io.adapter.rooms.get(room_name) &&
            this.io.adapter.rooms.get(room_name).size >= 2);
    }
    playerExist(room, login) {
        for (let i = 0; i < room.players.length; i++) {
            if (room.players[i].login === login) {
                return true;
            }
        }
        return false;
    }
    socketExist(room, socket_id) {
        for (let i = 0; i < room.players.length; i++) {
            if (room.players[i].socket_id === socket_id) {
                return true;
            }
        }
        return false;
    }
    watcherExist(room, socket_id) {
        for (let i = 0; i < room.watcher.length; i++) {
            if (room.watcher[i] === socket_id) {
                return true;
            }
        }
        return false;
    }
    newRoom(speedMode, canvas) {
        this.rooms.push({
            name: (0, unique_names_generator_1.uniqueNamesGenerator)({
                dictionaries: [unique_names_generator_1.adjectives, unique_names_generator_1.colors, unique_names_generator_1.animals],
            }),
            speedMode: speedMode,
            players: [],
            watcher: [],
            canvas: canvas,
            intervalID: 0,
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
        });
    }
    getMove(canvas, player_num) {
        if (player_num)
            return {
                x: canvas.w - this.PLAYER_WIDTH * (3 / 2),
                y: (canvas.h - this.PLAYER_HEIGHT) / 2,
                w: this.PLAYER_WIDTH,
                h: this.PLAYER_HEIGHT,
                top: 0,
                bottom: 0,
                left: 0,
                right: 0,
            };
        return {
            x: this.PLAYER_WIDTH / 2,
            y: (canvas.h - this.PLAYER_HEIGHT) / 2,
            w: this.PLAYER_WIDTH,
            h: this.PLAYER_HEIGHT,
            top: 0,
            bottom: 0,
            left: 0,
            right: 0,
        };
    }
    initBall(room_index) {
        const START_DIRECTION = Math.random() - 1;
        const PLAYER_STARTER = Math.random() > 0.5 ? 1 : -1;
        this.rooms[room_index].ball.x = this.rooms[room_index].canvas.w / 2;
        this.rooms[room_index].ball.y = this.rooms[room_index].canvas.h / 2;
        this.rooms[room_index].ball.r = this.BALL_RADIUS;
        this.rooms[room_index].ball.d.x =
            PLAYER_STARTER *
                this.rooms[room_index].speedMode *
                Math.cos(START_DIRECTION * (Math.PI / 4));
        this.rooms[room_index].ball.d.y =
            PLAYER_STARTER *
                this.rooms[room_index].speedMode *
                Math.sin(START_DIRECTION * (Math.PI / 4));
        this.rooms[room_index].ball.top = 0;
        this.rooms[room_index].ball.bottom = 0;
        this.rooms[room_index].ball.left = 0;
        this.rooms[room_index].ball.right = 0;
    }
    collision(room_index, player_index) {
        this.rooms[room_index].ball.top =
            this.rooms[room_index].ball.y - this.rooms[room_index].ball.r;
        this.rooms[room_index].ball.bottom =
            this.rooms[room_index].ball.y + this.rooms[room_index].ball.r;
        this.rooms[room_index].ball.left =
            this.rooms[room_index].ball.x - this.rooms[room_index].ball.r;
        this.rooms[room_index].ball.right =
            this.rooms[room_index].ball.x + this.rooms[room_index].ball.r;
        this.rooms[room_index].players[player_index].movement.top =
            this.rooms[room_index].players[player_index].movement.y;
        this.rooms[room_index].players[player_index].movement.bottom =
            this.rooms[room_index].players[player_index].movement.y +
                this.rooms[room_index].players[player_index].movement.h;
        this.rooms[room_index].players[player_index].movement.left =
            this.rooms[room_index].players[player_index].movement.x;
        this.rooms[room_index].players[player_index].movement.right =
            this.rooms[room_index].players[player_index].movement.x +
                this.rooms[room_index].players[player_index].movement.w;
        return (this.rooms[room_index].ball.bottom >
            this.rooms[room_index].players[player_index].movement.top &&
            this.rooms[room_index].ball.right >
                this.rooms[room_index].players[player_index].movement.left &&
            this.rooms[room_index].ball.left <
                this.rooms[room_index].players[player_index].movement.right &&
            this.rooms[room_index].ball.top <
                this.rooms[room_index].players[player_index].movement.bottom);
    }
    update(room_index) {
        if (this.rooms[room_index]) {
            this.rooms[room_index].ball.x += this.rooms[room_index].ball.d.x;
            this.rooms[room_index].ball.y += this.rooms[room_index].ball.d.y;
            if (this.rooms[room_index].players[0].score === 5 ||
                this.rooms[room_index].players[1].score === 5) {
                this.io
                    .to(this.rooms[room_index].name)
                    .emit('matchDone', this.rooms[room_index]);
                return;
            }
            if (this.rooms[room_index].ball.y + this.rooms[room_index].ball.r >
                this.rooms[room_index].canvas.h ||
                this.rooms[room_index].ball.y - this.rooms[room_index].ball.r < 0) {
                this.rooms[room_index].ball.d.y *= -1;
            }
            if (this.rooms[room_index].ball.x + this.rooms[room_index].ball.r >
                this.rooms[room_index].canvas.w) {
                this.rooms[room_index].players[0].score++;
                this.initBall(room_index);
            }
            else if (this.rooms[room_index].ball.x - this.rooms[room_index].ball.r <
                0) {
                this.rooms[room_index].players[1].score++;
                this.initBall(room_index);
            }
            const player_index = this.rooms[room_index].ball.x < this.rooms[room_index].canvas.w / 2
                ? 0
                : 1;
            if (this.collision(room_index, player_index)) {
                const angle = ((this.rooms[room_index].ball.y -
                    (this.rooms[room_index].players[player_index].movement.y +
                        this.rooms[room_index].players[player_index].movement.h / 2)) /
                    (this.rooms[room_index].players[player_index].movement.h / 2)) *
                    (Math.PI / 4);
                const direction = this.rooms[room_index].ball.x < this.rooms[room_index].canvas.w / 2
                    ? 1
                    : -1;
                this.rooms[room_index].ball.d.x =
                    direction * this.rooms[room_index].speedMode * Math.cos(angle);
                this.rooms[room_index].ball.d.y =
                    direction * this.rooms[room_index].speedMode * Math.sin(angle);
            }
        }
    }
    liveMatch() {
        var matchs = [];
        for (let i = 0; i < this.rooms.length; i++) {
            if (this.isRoomFull(this.rooms[i].name)) {
                matchs.push({
                    room_name: this.rooms[i].name,
                    p0: {
                        username: this.rooms[i].players[0].username,
                        avatar: this.rooms[i].players[0].avatar,
                    },
                    p1: {
                        username: this.rooms[i].players[1].username,
                        avatar: this.rooms[i].players[1].avatar,
                    },
                });
            }
        }
        this.io.emit('liveMatch', matchs);
    }
    addPlayer(client, payload, room_index, player_num) {
        this.rooms[room_index].players[player_num] = {
            socket_id: client.id,
            username: payload.username,
            avatar: payload.avatar,
            login: payload.login,
            score: 0,
            movement: this.getMove(this.rooms[room_index].canvas, player_num),
        };
        client.join(this.rooms[room_index].name);
    }
    getPlayerIndex(players, socket_id) {
        for (let i = 0; i < players.length; i++) {
            if (players[i].socket_id === socket_id) {
                return i;
            }
        }
        return -1;
    }
    emitToClient(room_index) {
        if (this.rooms[room_index] &&
            this.isRoomFull(this.rooms[room_index].name)) {
            this.update(room_index);
            if (this.rooms[room_index])
                this.io
                    .to(this.rooms[room_index].name)
                    .emit('onGame', this.rooms[room_index]);
        }
    }
    onGame(room_index) {
        const intervalID = setInterval(() => this.emitToClient(room_index), 1000 / this.FRAME_PER_SEC);
        this.rooms[room_index].intervalID = intervalID;
    }
    getRoomIndex(socket_id) {
        for (let i = 0; i < this.rooms.length; i++) {
            if (this.socketExist(this.rooms[i], socket_id) ||
                this.watcherExist(this.rooms[i], socket_id)) {
                return i;
            }
        }
        return -1;
    }
    getRoomIndexByNmae(name) {
        for (let i = 0; i < this.rooms.length; i++) {
            if (this.rooms[i].name === name) {
                return i;
            }
        }
        return -1;
    }
    newCanvas(room_index, canvas) {
        if (this.rooms[room_index].canvas &&
            this.rooms[room_index].canvas.w > canvas.w) {
            this.rooms[room_index].canvas = canvas;
        }
    }
    roomByMode(client, payload) {
        for (let i = 0; i < this.rooms.length; i++) {
            if (!this.isRoomFull(this.rooms[i].name) &&
                this.rooms[i].speedMode === payload.speedMode &&
                !this.playerExist(this.rooms[i], payload.login)) {
                this.newCanvas(i, payload.canvas);
                this.addPlayer(client, payload, i, 1);
                this.initBall(i);
                this.onGame(i);
                this.liveMatch();
                return true;
            }
        }
        return false;
    }
    afterInit(server) {
        this.rooms = [];
        this.canvas = null;
    }
    handleConnection(client) { }
    handleDisconnect(client) {
        var room_index = this.getRoomIndex(client.id);
        if (room_index !== -1) {
            var watcher_index = this.rooms[room_index].watcher.indexOf(client.id);
            if (watcher_index !== -1) {
                this.rooms[room_index].watcher.splice(room_index, 1);
                client.leave(this.rooms[room_index].name);
            }
            else {
                clearInterval(this.rooms[room_index].intervalID);
                this.io
                    .to(this.rooms[room_index].name)
                    .emit('opponentDisconnect', this.rooms[room_index]);
                this.rooms.splice(room_index, 1);
            }
            this.liveMatch();
        }
    }
    initGame(client, payload) {
        if (!this.roomByMode(client, payload)) {
            this.newRoom(payload.speedMode, payload.canvas);
            this.addPlayer(client, payload, this.rooms.length - 1, 0);
        }
    }
    moveKey(client, payload) {
        var room_index = this.getRoomIndex(client.id);
        if (room_index !== -1) {
            var player_index = this.getPlayerIndex(this.rooms[room_index].players, client.id);
            if (this.rooms[room_index].players[player_index].socket_id === client.id) {
                if (payload.key === 'ArrowUp') {
                    if (this.rooms[room_index].players[player_index].movement.y > 0)
                        this.rooms[room_index].players[player_index].movement.y -=
                            this.STEP;
                }
                else if (payload.key === 'ArrowDown') {
                    if (this.rooms[room_index].players[player_index].movement.y +
                        this.rooms[room_index].players[player_index].movement.h <
                        payload.canvas.h)
                        this.rooms[room_index].players[player_index].movement.y +=
                            this.STEP;
                }
            }
        }
    }
    watcher(client, payload) {
        var room_index = this.getRoomIndexByNmae(payload.room_name);
        if (this.rooms[room_index]) {
            client.join(payload.room_name);
            this.rooms[room_index].watcher.push(client.id);
        }
        else {
            client.emit('roomNotfound');
        }
    }
    getLiveMatch() {
        this.liveMatch();
    }
};
__decorate([
    (0, websockets_1.WebSocketServer)(),
    __metadata("design:type", socket_io_1.Namespace)
], GameGateway.prototype, "io", void 0);
__decorate([
    (0, websockets_1.SubscribeMessage)('init'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [socket_io_1.Socket, Object]),
    __metadata("design:returntype", void 0)
], GameGateway.prototype, "initGame", null);
__decorate([
    (0, websockets_1.SubscribeMessage)('moveKey'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [socket_io_1.Socket, Object]),
    __metadata("design:returntype", void 0)
], GameGateway.prototype, "moveKey", null);
__decorate([
    (0, websockets_1.SubscribeMessage)('watcher'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [socket_io_1.Socket, Object]),
    __metadata("design:returntype", void 0)
], GameGateway.prototype, "watcher", null);
__decorate([
    (0, websockets_1.SubscribeMessage)('getLiveMatch'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], GameGateway.prototype, "getLiveMatch", null);
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