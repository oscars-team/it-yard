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
import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { StorageService } from "./services/storage.service";
var AppComponent = /** @class */ (function () {
    function AppComponent(platform, splashScreen, statusBar, storage) {
        this.platform = platform;
        this.splashScreen = splashScreen;
        this.statusBar = statusBar;
        this.storage = storage;
        this.initializeApp();
    }
    AppComponent.prototype.initializeApp = function () {
        var _this = this;
        this.platform.ready().then(function () {
            //this.statusBar.styleDefault();
            _this.statusBar.overlaysWebView(true);
            _this.statusBar.backgroundColorByHexString('#DC4345');
        });
    };
    AppComponent.prototype.initializeChannels = function () {
        var _this = this;
        // 无论如果由于什么原因, APP中的频道没有保存
        // 那么需要先下载频道, 否则APP无法正常运行
        if (!this.storage.getChannelTree())
            this.storage.setChannelTree(function () {
                // 保存完之后才可以进入
                _this.splashScreen.hide();
            });
        // 如果APP中已经有频道, 那么可以直接进入APP
        else
            this.splashScreen.hide();
    };
    AppComponent = __decorate([
        Component({
            selector: 'app-root',
            templateUrl: 'app.component.html'
        }),
        __metadata("design:paramtypes", [Platform,
            SplashScreen,
            StatusBar,
            StorageService])
    ], AppComponent);
    return AppComponent;
}());
export { AppComponent };
//# sourceMappingURL=app.component.js.map