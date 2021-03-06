import { Component } from '@angular/core';
import { RequestService } from '../services/request.service'
import { StorageService } from '../services/storage.service'
import { NavController } from '@ionic/angular'
import { NavigationService } from '.././services/navigation.service'
import { ConfigService } from "../services/config.service"
// import { InAppBrowser } from '@ionic-native/in-app-browser/ngx'

@Component({
    selector: 'app-tab1',
    templateUrl: 'tab1.page.html',
    styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
    hots: any = [];
    scrollChannels: any = []
    activityChannelId: Number
    eventChannelId: Number
    constructor(
        private http: RequestService,
        private storage: StorageService,
        private navControl: NavController,
        private navService: NavigationService,
        private config: ConfigService
        // private iab: InAppBrowser
    ) {

    }

    items = [1, 2, 3, 4, 5];
    slideOpts = {
        effect: 'flip'
    }

    onClick(param) {
        this.navService.navParams = {
            cateId: param.cateId,
            title: param.title
        }
        this.navControl.navigateForward('channel');
    }

    navigateUrl(url: string) {
        //this.iab.create(url);
        window.open(url);
    }

    turnHot(items) {
        this.navService.navParams = {
            id: items.id,
            title: items.title,
            publish: items.time,
            content: items.content,
            image: items.image,
            cateName: items.cateName
        }
        this.navControl.navigateForward("content-view");
    }

    //热点新闻获取   
    getHot() {
        this.http.hots({}, res => {
            res.forEach(p => {
                p.image = p.image.replace('@', this.config.host);
            });
            this.hots = res;
        })
    }



    getRandomNumber(min: number, max: number) {
        return Math.floor(Math.random() * (max - min + 1) + min);
    }
    getRandomIcon() {
        let icons = ['basketball', 'cafe', 'flag', 'megaphone', 'shirt', 'nutrition', 'ice-cream', 'gift', 'bookmarks', 'basket', 'beer', 'egg', 'pint']
        return icons[this.getRandomNumber(0, 11)];
    }

    ngOnInit() {
        let channelTree = this.storage.getChannelTree();
        let subChannels: Array<any> = channelTree.children;
        if (Array.isArray(subChannels) && subChannels.length > 0) {
            this.scrollChannels = (subChannels.find(p => p.title == '小镇概况') || {}).children || [];
            this.activityChannelId = subChannels.find(p => p.title == '小镇概况').cateId;
            this.eventChannelId = subChannels.find(p => p.title == '大事记').cateId;
            if (!Array.isArray(this.scrollChannels) || this.scrollChannels.length == 0)
                throw `scroll channels initialize error!`;


            this.scrollChannels.forEach(c => {
                if (c.title == '小镇航拍') {
                    c.icon = 'airplane';
                    c.bgColor = 'rgba(253,145,122,255)'
                } else if (c.title == '小镇规划') {
                    c.icon = 'flower';
                    c.bgColor = 'rgba(127,207,200,255)'
                } else if (c.title == '小镇旅游') {
                    c.icon = 'partly-sunny';
                    c.bgColor = 'rgba(180,212,103,255)'
                } else if (c.title == '小镇便民') {
                    c.icon = 'happy';
                    c.bgColor = 'rgba(138,201,148,255)'
                } else {
                    c.icon = this.getRandomIcon();
                    c.bgColor = `rgba(${this.getRandomNumber(120, 220)},${this.getRandomNumber(100, 200)},${this.getRandomNumber(100, 200)},255)`
                }

            });

        }
        else {
            throw `scroll channels initialize error!`;
        }
        this.getHot();
    }

    navigateTo(url) {
        window.open(url, "_blank");
    }
}
