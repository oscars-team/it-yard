import { Component, OnInit, Input } from '@angular/core';

@Component({
    selector: 'app-content-list',
    templateUrl: './content-list.component.html',
    styleUrls: ['./content-list.component.scss']
})
export class ContentListComponent implements OnInit {

    @Input() title: String = ''
    /*
    *   显示模式
        normal: 正常全部水平显示
        firstWeight: 第一条新闻垂直显示(vertical), 其余新闻水平显示
        vertical: 全部垂直显示
    */
    @Input() mode: String = 'normal'
    contents = [{
        id: 1,
        title: '扬中市检察院组织开展公益诉讼主题宣传活动 在12月4日“国家宪法日”来临之际...',
        time: '2019-1-3 13:58:49',
        image: '/assets/sp-news.png',
        display: 'horizental'
    }, {
        id: 2,
        title: '扬中市检察院组织开展公益诉讼主题宣传活动 在12月4日“国家宪法日”来临之际...',
        time: '2019-1-3 13:58:49',
        image: '/assets/sp-news.png',
        display: 'horizental'
    }, {
        id: 3,
        title: '扬中市检察院组织开展公益诉讼主题宣传活动 在12月4日“国家宪法日”来临之际...',
        time: '2019-1-3 13:58:49',
        image: '/assets/sp-news.png',
        display: 'horizental'
    }, {
        id: 4,
        title: '扬中市检察院组织开展公益诉讼主题宣传活动 在12月4日“国家宪法日”来临之际...',
        time: '2019-1-3 13:58:49',
        image: '/assets/sp-news.png',
        display: 'horizental'
    }, {
        id: 5,
        title: '扬中市检察院组织开展公益诉讼主题宣传活动 在12月4日“国家宪法日”来临之际...',
        time: '2019-1-3 13:58:49',
        image: '/assets/sp-news.png',
        display: 'horizental'
    }]

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


    constructor() { }

    ngOnInit() {
    }

}
