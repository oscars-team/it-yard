import { Component, OnInit, Input, Output, ViewChild, EventEmitter } from '@angular/core';
import { NavController } from '@ionic/angular'
import { NavigationService } from "../../services/navigation.service";
import { ConfigService } from "../../services/config.service";
import * as moment from 'moment/moment'
import { VideoComponent } from '../video/video.component';
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
    @Input() id: Number = 0
    @Output() videoPlaying: EventEmitter<VideoComponent> = new EventEmitter();
    get videoUrl(): String {
        let videoStr = this.video;
        if (videoStr.startsWith('@')) {
            return videoStr.replace('@', this.config.host);
        }
        return videoStr;
    }
    get imageUrl(): String {
        let imageStr = this.image;
        if (imageStr.includes('@')) {
            return imageStr.replace('@', this.config.host)
        }
        return imageStr;
    }

    @Input() content: String = ''
    @Input() hits: Number = 0;
    /*
    *   显示模式:
        如果该项没有图片, 垂直显示
        否则按照设置的display值显示
        默认为水平显示
    */
    displayType() {

        // if(this.cateName=='小镇动态'||this.cateName=='大事记'){
        //     return 'horizental'
        //  }
        if(this.image.length==0&&this.video.length==0){
             return 'horizental';
        }

        if (this.video.length > 0 ||this.image.length > 0) {
            return 'vertical'
        }
        
        return this.display;
    }


    getPublicFromNow() {
        moment.locale('zh-cn');
        return moment(this.time).add(1,'days').fromNow()
    }

    @ViewChild('videoObject') videoObject: VideoComponent

    constructor(
        private navControl: NavController,
        private navService: NavigationService,
        private config: ConfigService
    ) {

    }


    onClick() {
        this.navService.navParams = {
            id: this.id,
            cateName: this.cateName,
            title: this.title,
            publish: this.time,
            image: this.image,
            video: this.video,
            content: this.content,
            hits: this.hits
        }
        this.navControl.navigateForward('content-view')
     }

    onPlaying(component: VideoComponent) {
        this.videoObject = component;
        this.videoPlaying.emit(component);
    }

    playVideo(event) {
        event.stopPropagation();
        this.videoObject.tooglePlay();
    }
    ngOnInit() {
      
    }

}
