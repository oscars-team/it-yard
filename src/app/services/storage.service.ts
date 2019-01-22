import { Injectable } from '@angular/core';
import { RequestService } from "./request.service";

@Injectable({
    providedIn: 'root'
})
export class StorageService {

    channelTreeKey = 'app.channeltree.key:h3D2@943#d'
    uniqueKey='app.unique.key:a23@4255#d';
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
    
    setUUID(){
        var d = new Date().getTime();
        if (window.performance && typeof window.performance.now === "function") {
            d += performance.now(); //use high-precision timer if available
        }
        var uuid = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
            var r = (d + Math.random() * 16) % 16 | 0;
            d = Math.floor(d / 16);
            return (c == 'x' ? r : (r & 0x3 | 0x8)).toString(16);
        });
        localStorage.setItem(this.uniqueKey,uuid);
    }
    generateUUID() {
       let unique=localStorage.getItem(this.uniqueKey);
       return unique;
    }
}
