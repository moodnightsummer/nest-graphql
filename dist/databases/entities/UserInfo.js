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
exports.UserInfo = void 0;
const typeorm_1 = require("typeorm");
const User_1 = require("./User");
let UserInfo = class UserInfo {
};
exports.UserInfo = UserInfo;
__decorate([
    (0, typeorm_1.Column)("varchar", { name: "email", comment: "유저 이메일", length: 100 }),
    __metadata("design:type", String)
], UserInfo.prototype, "email", void 0);
__decorate([
    (0, typeorm_1.Column)("varchar", { name: "password", comment: "비밀번호", length: 100 }),
    __metadata("design:type", String)
], UserInfo.prototype, "password", void 0);
__decorate([
    (0, typeorm_1.Column)("int", { name: "user_id", comment: "mapping key" }),
    __metadata("design:type", Number)
], UserInfo.prototype, "userId", void 0);
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)({ type: "int", name: "id" }),
    __metadata("design:type", Number)
], UserInfo.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => User_1.User, (user) => user.userInfos, {
        onDelete: "NO ACTION",
        onUpdate: "NO ACTION",
    }),
    (0, typeorm_1.JoinColumn)([{ name: "user_id", referencedColumnName: "id" }]),
    __metadata("design:type", User_1.User)
], UserInfo.prototype, "user", void 0);
exports.UserInfo = UserInfo = __decorate([
    (0, typeorm_1.Index)("user_info_FK", ["userId"], {}),
    (0, typeorm_1.Entity)("user_info", { schema: "learn" })
], UserInfo);
//# sourceMappingURL=UserInfo.js.map