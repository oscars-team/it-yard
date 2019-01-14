import { Component, OnInit, Input } from '@angular/core';
import { NavigationService } from "../../services/navigation.service";
import { ConfigService } from "../../services/config.service";
@Component({
    selector: 'app-content-view',
    templateUrl: './content-view.page.html',
    styleUrls: ['./content-view.page.scss'],
})
export class ContentViewPage implements OnInit {

    @Input() cateName: String = "栏目名称";
    @Input() title: String = "内容标题";
    @Input() publish: String = '';
    @Input() hits: Number = 0
    @Input() video: String;
    get videoUrl(): String {
        let videoStr = this.video;
        if (videoStr.startsWith('@')) {
            return videoStr.replace('@', this.config.host);
        }
        return videoStr;
    }
    get videoEnable(): Boolean {
        return this.video && this.video.length > 0
    }
    @Input() content: String = "";

    comments: Array<any> = []
    constructor(
        private navService: NavigationService,
        private config: ConfigService
    ) {
        let model = navService.navParams;
        this.cateName = model.cateName;
        this.title = model.title;
        this.publish = model.publish;
        this.hits = model.hits;
        this.video = model.video;
        this.content = model.content;
    }

    ngOnInit() {
    }
}
