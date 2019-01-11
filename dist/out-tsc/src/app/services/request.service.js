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
import { HttpClient } from '@angular/common/http';
var RequestService = /** @class */ (function () {
    function RequestService(http) {
        this.http = http;
        this.setTimeout = 3000; // 默认的超时时间
    }
    RequestService.prototype.getApi = function (url) {
        return "http://localhost/" + url;
    };
    /** 获取数据
    * param: url  string   必填,请求的url
    *     time  number   可不填,请求的超时时间,如不填,默认为setTimeout
    * return:    Observable HttpClient的get请求，请求完成后返回的值类型是any
    **/
    RequestService.prototype.request = function (url, payload, success, error) {
        return this.http.get(this.getApi(url), { params: payload })
            .toPromise()
            .catch(function (err) {
            if (err.status == 500 && error)
                error('获取数据失败');
        })
            .then(function (res) {
            if (success)
                success(res);
        });
    };
    RequestService.prototype.channel = function (params, callback, error) {
        this.request('api/app/channel', params, callback, error);
    };
    RequestService.prototype.contents = function (params, callback, error) {
        this.request('api/app/content', params, callback, error);
    };
    /** 获取数据
     * param: id string 必填, 根频道编号
    **/
    RequestService.prototype.channelTree = function (id, callback, error) {
        this.request('api/app/content/tree', { id: id }, callback, error);
    };
    RequestService = __decorate([
        Injectable({
            providedIn: 'root',
        }),
        __metadata("design:paramtypes", [HttpClient])
    ], RequestService);
    return RequestService;
}());
export { RequestService };
//# sourceMappingURL=request.service.js.map