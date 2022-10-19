"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const axios_1 = require("@nestjs/axios");
const users_controller_1 = require("./users/users.controller");
const users_service_1 = require("./users/users.service");
const config_1 = require("@nestjs/config");
const auth_module_1 = require("./auth/auth.module");
const chat_controller_1 = require("./chat/chat.controller");
const game_controller_1 = require("./game/game.controller");
const prisma_module_1 = require("./prisma/prisma.module");
const chat_module_1 = require("./chat/chat.module");
const game_module_1 = require("./game/game.module");
const cloudinar_module_1 = require("./users/clodinary/cloudinar.module");
const users_gateway_1 = require("./users/users.gateway");
let AppModule = class AppModule {
};
AppModule = __decorate([
    (0, common_1.Module)({
        imports: [
            cloudinar_module_1.CloudinaryModule,
            auth_module_1.AuthModule,
            axios_1.HttpModule,
            config_1.ConfigModule.forRoot(),
            prisma_module_1.PrismaModule,
            chat_module_1.ChatModule,
            game_module_1.GameModule,
        ],
        controllers: [users_controller_1.UsersController, chat_controller_1.chatController, game_controller_1.GameController],
        providers: [users_service_1.UsersService, users_gateway_1.UsersGateway],
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map