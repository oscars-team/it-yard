import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
    providedIn: 'root',

})
export class RequestService {

    private setTimeout = 3000; // 默认的超时时间

    private getApi(url) {
        return `http://39.108.68.227:88/${url}`;
        // return `http://localhost/${url}`;
    }
    constructor(
        private http: HttpClient
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

    /** 获取数据
     * param: id string 必填, 根频道编号
    **/
    channelTree(id: Number, callback?, error?) {
        this.request('api/app/channel/tree', { id: id }, callback, error)
    }

}