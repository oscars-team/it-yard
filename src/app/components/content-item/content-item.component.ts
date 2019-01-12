import { Component, OnInit, Input, } from '@angular/core';
import { NavController } from '@ionic/angular'
import { NavigationService } from "../../services/navigation.service";
import * as moment from 'moment/moment'
@Component({
    selector: 'app-content-item',
    templateUrl: './content-item.component.html',
    styleUrls: ['./content-item.component.scss']
})
export class ContentItemComponent implements OnInit {

    @Input() display: String = 'horizental'
    @Input() cateName: String = '';
    @Input() title: String = '内容标题'
    @Input() time: Date = new Date()
    @Input() image: String = ''
    @Input() video: String = ''
    @Input() content: String = ''
    @Input() hits: Number = 0;
    /*
    *   显示模式:
        如果该项没有图片, 垂直显示
        否则按照设置的display值显示
        默认为水平显示
    */
    displayType() {
        if (this.image.length == 0)
            return 'vertical';

        return this.display;
    }

    getPublicFromNow() {
        moment.locale('zh-cn');
        return moment(this.time).fromNow()
    }
   

    constructor(
        private navControl: NavController,
        private navService: NavigationService
    ) {

    }


    onClick() {
        this.navService.navParams = {
            cateName: this.cateName,
            title: this.title,
            publish: this.getPublicFromNow(),
            image: this.image,
            video: this.video,
            content: this.content,
            hits: this.hits
        }
        this.navControl.navigateForward('content-view')
    }

    ngOnInit() {
    }

}
