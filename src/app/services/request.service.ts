import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ConfigService } from "./config.service";
@Injectable({
    providedIn: 'root',

})
export class RequestService {

    private setTimeout = 3000; // 默认的超时时间

    private getApi(url) {
        return `${this.config.host}/${url}`;
        //return `http://localhost:54915/${url}`;
    }
    constructor(
        private http: HttpClient,
        private config:ConfigService
    ) { }

    /** 获取数据
    * param: url  string   必填,请求的url
    *     time  number   可不填,请求的超时时间,如不填,默认为setTimeout
    * return:    Observable HttpClient的get请求，请求完成后返回的值类型是any
    **/
    private request(url, payload, success?, error?) {
        return this.http.get(this.getApi(url), { params: payload })
            .toPromise()
            .catch(err => {
                if (err.status == 500 && error)
                    error('获取数据失败');
            })
            .then(res => {
                if (success) success(res);
            })
    }

    channel(params, callback?, error?) {
        this.request('api/app/channel', params, callback, error);
    }

    contents(params, callback?, error?) {
        this.request('api/app/content', params, callback, error);
    }
    
    comment(params,callback?,error?){
        this.request('api/app/comment',params,callback,error);
    }
    inserts(params,callback?,error?){
        this.request('api/app/comment/insert',params,callback,error);
    }
    hots(params,callback?,error?){
        this.request('api/app/content/hot',params,callback,error);
    }
    /** 获取数据
     * param: id string 必填, 根频道编号
    **/
    channelTree(id: Number, callback?, error?) {
        this.request('api/app/channel/tree', { id: id }, callback, error)
    }

}