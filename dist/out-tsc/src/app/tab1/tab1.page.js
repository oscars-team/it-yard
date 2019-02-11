var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component } from '@angular/core';
import { RequestService } from '../services/request.service';
import { StorageService } from '../services/storage.service';
var Tab1Page = /** @class */ (function () {
    function Tab1Page(http, storage) {
        this.http = http;
        this.storage = storage;
        this.items = [1, 2, 3, 4, 5];
        this.slideOpts = {
            effect: 'flip'
        };
    }
    /*
    *   填充小镇动态的内容
    */
    Tab1Page.prototype.fillYardEvents = function () {
        this.http.contents({
            cid: 25
        }, function (res) {
        });
    };
    Tab1Page.prototype.ngOnInit = function () {
        console.log(this.storage.getChannelTree());
    };
    Tab1Page = __decorate([
        Component({
            selector: 'app-tab1',
            templateUrl: 'tab1.page.html',
            styleUrls: ['tab1.page.scss']
        }),
        __metadata("design:paramtypes", [RequestService,
            StorageService])
    ], Tab1Page);
    return Tab1Page;
}());
export { Tab1Page };
//# sourceMappingURL=tab1.page.js.map