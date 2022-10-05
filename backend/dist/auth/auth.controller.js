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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthController = void 0;
const common_1 = require("@nestjs/common");
const jwt_1 = require("@nestjs/jwt");
const passport_1 = require("@nestjs/passport");
const auth_service_1 = require("./auth.service");
const _2fa_dto_1 = require("./DTOs/2fa.dto");
let AuthController = class AuthController {
    constructor(AuthService, JwtService) {
        this.AuthService = AuthService;
        this.JwtService = JwtService;
    }
    async FortyTwoAuth(req) {
        return 'INSIDE 42';
    }
    async FortyTwoAuthRedirect(req, res, code) {
        this.AuthService.createAccount(req.user.username, req.user.avatar);
        const accessToken = this.AuthService.signToken(req.user.username);
        res.cookie('jwt', accessToken, { httpOnly: true });
        return res.redirect('http://10.11.9.7:3000');
    }
    test(req) {
        const user = req.user;
        console.log(user['userLogin']);
        return 'TEST inSIDE HAHA ';
    }
    async TwoFactor(req) {
        const user = req.user;
        var result = await this.AuthService.generate2fa(user['userLogin']);
        return result;
    }
    async TwoFAcheck(body) {
        var res = await this.AuthService.verify2fa(body.userToken, body.base32secret);
        return { message: res };
    }
    logout(res) {
        res.clearCookie('jwt');
        return { message: 'Logged out' };
    }
};
__decorate([
    (0, common_1.Get)(),
    (0, common_1.UseGuards)((0, passport_1.AuthGuard)('42')),
    __param(0, (0, common_1.Req)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], AuthController.prototype, "FortyTwoAuth", null);
__decorate([
    (0, common_1.Get)('redirect'),
    (0, common_1.UseGuards)((0, passport_1.AuthGuard)('42')),
    __param(0, (0, common_1.Req)()),
    __param(1, (0, common_1.Res)({ passthrough: true })),
    __param(2, (0, common_1.Query)('code')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, Object]),
    __metadata("design:returntype", Promise)
], AuthController.prototype, "FortyTwoAuthRedirect", null);
__decorate([
    (0, common_1.Get)('test'),
    (0, common_1.UseGuards)((0, passport_1.AuthGuard)('jwt')),
    __param(0, (0, common_1.Req)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], AuthController.prototype, "test", null);
__decorate([
    (0, common_1.Get)('2fa'),
    (0, common_1.UseGuards)((0, passport_1.AuthGuard)('jwt')),
    __param(0, (0, common_1.Req)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], AuthController.prototype, "TwoFactor", null);
__decorate([
    (0, common_1.Post)('2fa'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [_2fa_dto_1.TwoFactDto]),
    __metadata("design:returntype", Promise)
], AuthController.prototype, "TwoFAcheck", null);
__decorate([
    (0, common_1.Post)('signout'),
    (0, common_1.UseGuards)((0, passport_1.AuthGuard)('jwt')),
    __param(0, (0, common_1.Res)({ passthrough: true })),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], AuthController.prototype, "logout", null);
AuthController = __decorate([
    (0, common_1.Controller)('42'),
    __metadata("design:paramtypes", [auth_service_1.AuthService, jwt_1.JwtService])
], AuthController);
exports.AuthController = AuthController;
//# sourceMappingURL=auth.controller.js.map