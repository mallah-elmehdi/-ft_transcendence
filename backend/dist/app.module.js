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
const prisma_module_1 = require("./prisma/prisma.module");
const serve_static_1 = require("@nestjs/serve-static");
const path_1 = require("path");
let AppModule = class AppModule {
};
AppModule = __decorate([
    (0, common_1.Module)({
        imports: [auth_module_1.AuthModule, axios_1.HttpModule, config_1.ConfigModule.forRoot(), prisma_module_1.PrismaModule,
            serve_static_1.ServeStaticModule.forRoot({ rootPath: (0, path_1.join)(__dirname, '..', 'public'), })],
        controllers: [users_controller_1.UsersController, chat_controller_1.chatController],
        providers: [users_service_1.UsersService],
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map