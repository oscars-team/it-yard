import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class NavigationService {

    private _navParams: any = {}
    set navParams(value: any) {
        this._navParams = value;
    }
    get navParams(): any {
        return this._navParams;
    }
    constructor() { }


}
