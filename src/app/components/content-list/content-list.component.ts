import { Component, EventEmitter, OnInit, Input, Output } from '@angular/core';
import { RequestService } from '../../services/request.service'
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

    contentLoaded: Boolean = false;
    contents = []

    getDatasource() {
        let data = this.contents;
        if (data && data.length > 0) {
            if (this.mode === 'firstWeight') {
                data[0].display = 'vertical'
            } else if (this.mode === 'vertical') {
                data.forEach(e => {
                    e.display = 'vertical';
                });
            }
        }
        return data;
    }

    getContents() {
        // 具有特定频道的List, 抓取List值
        this.contentLoaded = false;
        if (this.channel >= 0) {
            this.http.contents({ cid: this.channel }, res => {
                this.contents = res;
                this.contentLoaded = true;
            })
        }
    }

    refresh(callback?) {
        // 具有特定频道的List, 抓取List值
        this.contentLoaded = false;
        if (this.channel >= 0) {
            this.http.contents({ cid: this.channel }, res => {
                this.contents = res;
                this.contentLoaded = true;
                if (callback) callback(res);
            })
        }
    }


    constructor(
        private http: RequestService
    ) { }

    ngOnInit() {
        this.getContents();
    }

}
