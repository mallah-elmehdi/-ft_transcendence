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
exports.AuthService = void 0;
const common_1 = require("@nestjs/common");
const jwt_1 = require("@nestjs/jwt");
const prisma_service_1 = require("../prisma/prisma.service");
const speakeasy = require('speakeasy');
let AuthService = class AuthService {
    constructor(jwtService, prisma) {
        this.jwtService = jwtService;
        this.prisma = prisma;
    }
    FortyTwoLogin(req) {
        if (!req.user) {
            return 'No user from  FortyTwo';
        }
        return {
            message: 'User information from  FortyTwo',
            user: req.user,
        };
    }
    async createAccount(id, avatar) {
        try {
            const found = await this.prisma.user.findUnique({
                where: {
                    user_login: id,
                },
            });
            if (!found) {
                const User = await this.prisma.user.create({
                    data: {
                        user_login: id,
                        user_name: id,
                        user_avatar: avatar,
                    },
                });
                console.log('User Created ', id);
                return;
            }
            console.log('User Exists ', id);
        }
        catch (err) {
            console.log('error ', err);
        }
    }
    async generate2fa(id) {
        const getUser = await this.prisma.user.findUnique({
            where: {
                user_login: id,
            },
        });
        var { two_authentication } = getUser;
        if (two_authentication === null) {
            var secret = speakeasy.generateSecret({
                name: 'ponGame',
                length: 10
            });
            const update = await this.prisma.user.update({
                where: {
                    user_login: id,
                },
                data: {
                    two_authentication: secret.otpauth_url,
                },
            });
            two_authentication = secret.otpauth_url;
            console.log('update :', update);
        }
        return (two_authentication);
    }
    async verify2fa(userToken, base32secret) {
        var verified = speakeasy.totp.verify({ secret: base32secret,
            encoding: 'base32',
            token: userToken });
        console.log(verified);
        return verified;
    }
    async findUserId(login) {
        return await this.prisma.user.findUnique({ where: { user_login: login } });
    }
    signToken(userLogin) {
        const payload = {
            userLogin: userLogin,
            TwoFactorAuth: false
        };
        const accessToken = this.jwtService.sign(payload, {
            secret: process.env.JWT_SECRET,
            expiresIn: '1w',
        });
        return {
            access_token: accessToken,
        };
    }
};
AuthService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [jwt_1.JwtService, prisma_service_1.PrismaService])
], AuthService);
exports.AuthService = AuthService;
//# sourceMappingURL=auth.service.js.map