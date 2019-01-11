import { Injectable } from '@angular/core';
import { RequestService } from "./request.service";
@Injectable({
    providedIn: 'root'
})
export class StorageService {

    channelTreeKey = 'app.channeltree.key:h3D2@943#d'
    constructor(
        private http: RequestService
    ) { }

    setChannelTree(callback?) {
        this.http.channelTree(1, res => {
            localStorage.setItem(this.channelTreeKey, JSON.stringify(res))
            if (callback) callback(res);
        })
    }

    getChannelTree() {
        let strTree = localStorage.getItem(this.channelTreeKey);
        if (typeof (strTree) === 'string' && strTree != '' && strTree != 'undefined' && strTree != 'null') return JSON.parse(strTree);
        return null;
    }
}
