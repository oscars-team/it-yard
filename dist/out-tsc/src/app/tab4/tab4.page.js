var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { Component } from '@angular/core';
var Tab4Page = /** @class */ (function () {
    function Tab4Page() {
    }
    Tab4Page.prototype.onCategoryChanged = function (c) {
        console.log(c);
    };
    Tab4Page = __decorate([
        Component({
            selector: 'app-tab4',
            templateUrl: 'tab4.page.html',
            styleUrls: ['tab4.page.scss']
        })
    ], Tab4Page);
    return Tab4Page;
}());
export { Tab4Page };
//# sourceMappingURL=tab4.page.js.map