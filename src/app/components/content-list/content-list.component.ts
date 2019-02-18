import { Component, EventEmitter, OnInit, Input, Output } from '@angular/core';
import { RequestService } from '../../services/request.service'
import { VideoComponent } from '../video/video.component';
@Component({
    selector: 'app-content-list',
    templateUrl: './content-list.component.html',
    styleUrls: ['./content-list.component.scss']
})
export class ContentListComponent implements OnInit {
    @Input() title: String = ''
    @Input() titleVisible: Boolean = false;
    /*
    *   显示模式
        normal: 正常全部水平显示
        firstWeight: 第一条新闻垂直显示(vertical), 其余新闻水平显示
        vertical: 全部垂直显示
    */
    @Input() mode: String = 'normal'
    channelId: Number = -1
    @Input()
    get channel(): Number {
        return this.channelId;
    }
    set channel(v: Number) {
        this.channelId = v;
        this.getContents();
    }

    @Output()
    channelChange: EventEmitter<any> = new EventEmitter();
    @Output()
    changed: EventEmitter<any> = new EventEmitter();

    contentLoaded: Boolean = false;
    pagination = {
        page: 1,
        size: 10
    }
    contents = []
    /**
     * 当前正在播放的视频
     */
    currentPlayingVideo: VideoComponent;
    getDatasource() {
        let data = this.contents;
        // if (data && data.length > 0) {
        //     if (this.mode === 'firstWeight') {
        //         data[0].display = 'vertical'
        //     } else if (this.mode === 'vertical') {
        //         data.forEach(e => {
        //             e.display = 'vertical';
        //         });
        //     }
        // }
        return data;
    }

    getContents(callback?) {
        this.pagination.page = 1;
        if (this.channel >= 0) {
            this.http.contents({ cid: this.channel, ...this.pagination }, res => {
                this.contents = res;
                this.contentLoaded = true;
                this.changed.emit(res);
                if (callback) callback();
            })
        }
    }



    getNextPage(callback?) {
        this.pagination.page++;
        if (this.channel >= 0) {
            this.http.contents({ cid: this.channel, ...this.pagination }, res => {
                res.forEach(i => {
                    this.contents.push(i);
                })
                this.changed.emit(res);
                if (callback) callback();

            })
        }
    }

    refresh(callback?) {
        // 具有特定频道的List, 抓取List值
        this.pagination.page = 1;
        if (this.channel >= 0) {
            this.http.contents({ cid: this.channel }, res => {
                this.contents = res;
                this.changed.emit(res);
                if (callback) callback();
            })
        }
    }


    onVideoPlaying(videoComponent: VideoComponent) {
        if (this.currentPlayingVideo)
            this.currentPlayingVideo.stop();
        this.currentPlayingVideo = videoComponent;

    }
    constructor(
        private http: RequestService
    ) { }

    ngOnInit() {

    }
    //channel页面跳转停止视频
    stopVideoesPlay() {
        if (this.currentPlayingVideo)
            this.currentPlayingVideo.stop();
    }

}
