import { Component, OnInit, Input } from '@angular/core';
import { NavigationService } from "../../services/navigation.service";
import { ConfigService } from "../../services/config.service";
import { RequestService } from '../../services/request.service'
import { AlertController, NavController } from '@ionic/angular'
import * as moment from 'moment/moment'


@Component({
    selector: 'app-content-view',
    templateUrl: './content-view.page.html',
    styleUrls: ['./content-view.page.scss'],
})
export class ContentViewPage implements OnInit {
    @Input() id: Number
    @Input() cateName: String = "栏目名称";
    @Input() title: String = "内容标题";
    @Input() publish: String = '';
    @Input() hits: Number = 0
    @Input() video: String;
    @Input() image: String;
    @Input() items: {};
    writeComment: String = '';
    get videoUrl(): String {
        if (this.videoUrl.length == 0) {
            return;
        }
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

    get contentUrl(): String {
        let contentStr = this.content;
        return contentStr.replace(new RegExp('@', 'g'), this.config.host + '/');
    }

    comments: Array<any> = []
    constructor(
        private navService: NavigationService,
        private config: ConfigService,
        private request: RequestService,
        private alert: AlertController,
        private navCtrl: NavController
    ) {
        let model = navService.navParams;
        this.id = model.id;
        this.cateName = model.cateName;
        this.title = model.title;
        this.publish = model.publish;
        this.hits = model.hits;
        this.video = model.video;
        this.content = model.content;
        this.image = model.image;
        moment.locale('zh-cn');
    }


    getComment(callback?) {
        this.request.comment({ contentid: this.id }, res => {
            this.comments = res
        })
    }

    async presentAlert() {
        const alert = await this.alert.create({
            header: '您已评论多次',
            buttons: ['OK']
        })
        await alert.present();
    }

    insertComment(callback?) {
        this.request.inserts({ contentid: this.id, author: localStorage.getItem('app.unique.key:a23@4255#d'), content: this.writeComment }, res => {
            //1成功
            if (res == 1) {
                this.writeComment = '';
                this.getComment();
            }
            //0评论大于>3
            if (res == 0) {
                this.presentAlert();
                this.writeComment = '';
            }
        })
    }

    ngOnInit() {
        this.getComment()
    }

    submit() {
        this.insertComment();
    }

    getFormattedTime(date: Date): String {
        return moment(date).add(1, 'days').fromNow()
    }

    navBack() {

    }

}
