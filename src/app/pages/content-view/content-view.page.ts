import { Component, OnInit, Input } from '@angular/core';
import { Location } from "@angular/common";
import { NavigationService } from "../../services/navigation.service";
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
    get videoEnable(): Boolean {
        return this.video && this.video.length > 0
    }
    @Input() content: String = "";

    comments: Array<any> = []
    constructor(
        private location: Location,
        private navService: NavigationService
    ) {
        let model = navService.navParams;
        console.log(model);
        this.cateName = model.cateName;
        this.title = model.title;
        this.publish = model.publish;
        this.hits = model.hits;
        this.video = model.video;
        this.content = model.content;
    }

    ngOnInit() {
    }

    navBack(event) {
        this.location.back();
    }

}
