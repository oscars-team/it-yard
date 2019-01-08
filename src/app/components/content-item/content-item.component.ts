import { Component, OnInit, Input } from '@angular/core';
import { NavController } from '@ionic/angular'
import * as moment from 'moment/moment'
@Component({
    selector: 'app-content-item',
    templateUrl: './content-item.component.html',
    styleUrls: ['./content-item.component.scss']
})
export class ContentItemComponent implements OnInit {

    @Input() display: String = 'horizental'
    @Input() title: String = '内容标题'
    @Input() time: Date = new Date()
    @Input() image: String = ''

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
        private navControl: NavController
    ) {

    }


    onClick() {
        console.log(this);
        this.navControl.navigateForward('content-view')
    }

    ngOnInit() {
    }

}
