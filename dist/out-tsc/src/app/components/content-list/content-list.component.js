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
import { RequestService } from '../../services/request.service';
var ContentListComponent = /** @class */ (function () {
    function ContentListComponent(http) {
        this.http = http;
        this.title = '';
        /*
        *   显示模式
            normal: 正常全部水平显示
            firstWeight: 第一条新闻垂直显示(vertical), 其余新闻水平显示
            vertical: 全部垂直显示
        */
        this.mode = 'normal';
        this.channel = -1;
        this.contents = [{
                id: 1,
                title: '扬中市检察院组织开展公益诉讼主题宣传活动 在12月4日“国家宪法日”来临之际...',
                time: '2019-1-3 13:58:49',
                image: '/assets/sp-news.png',
                display: 'horizental'
            }, {
                id: 2,
                title: '扬中市检察院组织开展公益诉讼主题宣传活动 在12月4日“国家宪法日”来临之际...',
                time: '2019-1-3 13:58:49',
                image: '/assets/sp-news.png',
                display: 'horizental'
            }, {
                id: 3,
                title: '扬中市检察院组织开展公益诉讼主题宣传活动 在12月4日“国家宪法日”来临之际...',
                time: '2019-1-3 13:58:49',
                image: '/assets/sp-news.png',
                display: 'horizental'
            }, {
                id: 4,
                title: '扬中市检察院组织开展公益诉讼主题宣传活动 在12月4日“国家宪法日”来临之际...',
                time: '2019-1-3 13:58:49',
                image: '/assets/sp-news.png',
                display: 'horizental'
            }, {
                id: 5,
                title: '扬中市检察院组织开展公益诉讼主题宣传活动 在12月4日“国家宪法日”来临之际...',
                time: '2019-1-3 13:58:49',
                image: '/assets/sp-news.png',
                display: 'horizental'
            }];
    }
    ContentListComponent.prototype.getDatasource = function () {
        var data = this.contents;
        if (data && data.length > 0) {
            if (this.mode === 'firstWeight') {
                data[0].display = 'vertical';
            }
            else if (this.mode === 'vertical') {
                data.forEach(function (e) {
                    e.display = 'vertical';
                });
            }
        }
        return data;
    };
    ContentListComponent.prototype.ngOnInit = function () {
        var _this = this;
        // 具有特定频道的List, 抓取List值
        if (this.channel >= 0) {
            this.http.contents({ cid: this.channel }, function (res) {
                _this.contents = res;
            });
        }
    };
    __decorate([
        Input(),
        __metadata("design:type", String)
    ], ContentListComponent.prototype, "title", void 0);
    __decorate([
        Input(),
        __metadata("design:type", String)
    ], ContentListComponent.prototype, "mode", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Number)
    ], ContentListComponent.prototype, "channel", void 0);
    ContentListComponent = __decorate([
        Component({
            selector: 'app-content-list',
            templateUrl: './content-list.component.html',
            styleUrls: ['./content-list.component.scss']
        }),
        __metadata("design:paramtypes", [RequestService])
    ], ContentListComponent);
    return ContentListComponent;
}());
export { ContentListComponent };
//# sourceMappingURL=content-list.component.js.map