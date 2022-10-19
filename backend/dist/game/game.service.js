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
exports.GameService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../prisma/prisma.service");
let GameService = class GameService {
    constructor(prisma) {
        this.prisma = prisma;
    }
    async pushScore(payload) {
        const { userId, opponent_id, user_score, opponent_score } = payload;
        const result = await this.prisma.match_history.create({
            data: {
                userId,
                opponent_id,
                user_score,
                opponent_score,
            },
        });
        return result;
    }
    async updateUserStatisticsData(payload) {
        const { userId, games_lost, games_won, games_drawn } = payload;
        return await this.prisma.user.update({
            where: {
                user_id: Number(userId),
            },
            data: {
                games_lost: { increment: games_lost },
                games_won: { increment: games_won },
                games_drawn: { increment: games_drawn },
                games_played: { increment: 1 },
            },
        });
    }
};
GameService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], GameService);
exports.GameService = GameService;
//# sourceMappingURL=game.service.js.map