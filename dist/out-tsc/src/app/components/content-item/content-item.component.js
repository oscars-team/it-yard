var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component, Input } from '@angular/core';
import { NavController } from '@ionic/angular';
import * as moment from 'moment/moment';
var ContentItemComponent = /** @class */ (function () {
    function ContentItemComponent(navControl) {
        this.navControl = navControl;
        this.display = 'horizental';
        this.title = '内容标题';
        this.time = new Date();
        this.image = '';
    }
    /*
    *   显示模式:
        如果该项没有图片, 垂直显示
        否则按照设置的display值显示
        默认为水平显示
    */
    ContentItemComponent.prototype.displayType = function () {
        if (this.image.length == 0)
            return 'vertical';
        return this.display;
    };
    ContentItemComponent.prototype.getPublicFromNow = function () {
        moment.locale('zh-cn');
        return moment(this.time).fromNow();
    };
    ContentItemComponent.prototype.onClick = function () {
        console.log(this);
        this.navControl.navigateForward('content-view');
    };
    ContentItemComponent.prototype.ngOnInit = function () {
    };
    __decorate([
        Input(),
        __metadata("design:type", String)
    ], ContentItemComponent.prototype, "display", void 0);
    __decorate([
        Input(),
        __metadata("design:type", String)
    ], ContentItemComponent.prototype, "title", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Date)
    ], ContentItemComponent.prototype, "time", void 0);
    __decorate([
        Input(),
        __metadata("design:type", String)
    ], ContentItemComponent.prototype, "image", void 0);
    ContentItemComponent = __decorate([
        Component({
            selector: 'app-content-item',
            templateUrl: './content-item.component.html',
            styleUrls: ['./content-item.component.scss']
        }),
        __metadata("design:paramtypes", [NavController])
    ], ContentItemComponent);
    return ContentItemComponent;
}());
export { ContentItemComponent };
//# sourceMappingURL=content-item.component.js.map