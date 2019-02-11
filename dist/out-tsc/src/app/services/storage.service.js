var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Injectable } from '@angular/core';
import { RequestService } from "./request.service";
var StorageService = /** @class */ (function () {
    function StorageService(http) {
        this.http = http;
        this.channelTreeKey = 'app.channeltree.key:h3D2@943#d';
    }
    StorageService.prototype.setChannelTree = function (callback) {
        var _this = this;
        this.http.channelTree(1, function (res) {
            localStorage.setItem(_this.channelTreeKey, JSON.stringify(res));
            if (callback)
                callback(res);
        });
    };
    StorageService.prototype.getChannelTree = function () {
        var strTree = localStorage.getItem(this.channelTreeKey);
        return strTree ? JSON.parse(strTree) : null;
    };
    StorageService = __decorate([
        Injectable({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [RequestService])
    ], StorageService);
    return StorageService;
}());
export { StorageService };
//# sourceMappingURL=storage.service.js.map