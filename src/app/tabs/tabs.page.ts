import { Component } from '@angular/core';
import { StorageService } from "../services/storage.service";
@Component({
    selector: 'app-tabs',
    templateUrl: 'tabs.page.html',
    styleUrls: ['tabs.page.scss']
})
export class TabsPage {

    constructor(
        private storage: StorageService
    ) { }

    ngOnInit(){
        this.updateChannelTree();
    }

    updateChannelTree() {
        this.storage.setChannelTree(()=>{
            console.log(`tabs page: channel tree updated`)
        });
    }

}
