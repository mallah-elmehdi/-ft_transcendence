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
exports.HomeController = void 0;
const common_1 = require("@nestjs/common");
const home_service_1 = require("./home.service");
let HomeController = class HomeController {
    constructor(HomeService) {
        this.HomeService = HomeService;
        this.UID = 'ce727ba64e926d218a26a068bf84f2bfc42092d81728eab579bde69a2645995c';
        this.SECRET = '83712e0959622d35ad0f28c6ea8ef51fdf03d12283bc18baf99f8fbe80649288';
    }
    Home(param, query) {
        return this.HomeService.Home();
    }
};
__decorate([
    (0, common_1.Get)(),
    (0, common_1.Redirect)(`https://api.intra.42.fr/oauth/authorize?client_id=a28f018c5e3443ffb7d0b9131b6b26d085cc6974824bc2e017da6f8b5868ae42&redirect_uri=http%3A%2F%2Flocalhost%3A3000%2Fauth&response_type=code`, 302),
    __param(0, (0, common_1.Param)()),
    __param(1, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", void 0)
], HomeController.prototype, "Home", null);
HomeController = __decorate([
    (0, common_1.Controller)('not working'),
    __metadata("design:paramtypes", [home_service_1.HomeService])
], HomeController);
exports.HomeController = HomeController;
//# sourceMappingURL=home.controller.js.map