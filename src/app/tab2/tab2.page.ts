import { Component, ViewChild } from '@angular/core';
import { StorageService } from '../services/storage.service'
import { ContentListComponent } from '../components/content-list/content-list.component';
@Component({
    selector: 'app-tab2',
    templateUrl: 'tab2.page.html',
    styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

    subChannels: Array<any> = []
    activeChannel: Number = -1;
    activeChannelName: String = '';

    @ViewChild('contentList')
    contentList: ContentListComponent

    constructor(
        private storage: StorageService
    ) {
        let channelTree = this.storage.getChannelTree();
        let subChannels: Array<any> = channelTree.children;
        if (Array.isArray(subChannels) && subChannels.length > 0) {
            this.subChannels = (subChannels.find(p => p.title == '特色产业') || {}).children || [];
            if (Array.isArray(this.subChannels) && this.subChannels.length > 0) {
                this.activeChannel = this.subChannels[0].cateId;
                this.activeChannelName = this.subChannels[0].title;
            }
        }
    }

    onCategoryChanged(c) {
        this.activeChannel = c.cateId;
        this.activeChannelName = c.title;
    }

    doRefresh(event) {
        let completed = false;
        this.contentList.refresh(() => {
            event.target.complete();
            completed = true;
        })
        setTimeout(() => {
            if (!completed) event.target.complete();
        }, 5000);
    }
}
