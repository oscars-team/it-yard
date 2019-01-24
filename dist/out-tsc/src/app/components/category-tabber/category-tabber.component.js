var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component, EventEmitter, Output } from '@angular/core';
var CategoryTabberComponent = /** @class */ (function () {
    function CategoryTabberComponent() {
        this.changed = new EventEmitter();
        this.categories = [{
                cateid: 1,
                title: '招商方向',
                active: false
            }, {
                cateid: 2,
                title: '融资项目',
                active: true
            }, {
                cateid: 3,
                title: '优惠政策',
                active: false
            }, {
                cateid: 4,
                title: '招商方向',
                active: false
            }, {
                cateid: 5,
                title: '融资项目',
                active: false
            }, {
                cateid: 6,
                title: '优惠政策',
                active: false
            }];
    }
    CategoryTabberComponent.prototype.ngOnInit = function () {
    };
    CategoryTabberComponent.prototype.onItemClick = function (c) {
        this.categories.forEach(function (e) { e.active = e == c; });
        this.changed.emit(c);
    };
    __decorate([
        Output(),
        __metadata("design:type", Object)
    ], CategoryTabberComponent.prototype, "changed", void 0);
    CategoryTabberComponent = __decorate([
        Component({
            selector: 'app-category-tabber',
            templateUrl: './category-tabber.component.html',
            styleUrls: ['./category-tabber.component.scss']
        }),
        __metadata("design:paramtypes", [])
    ], CategoryTabberComponent);
    return CategoryTabberComponent;
}());
export { CategoryTabberComponent };
//# sourceMappingURL=category-tabber.component.js.map