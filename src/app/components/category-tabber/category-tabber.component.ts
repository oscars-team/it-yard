import { Component, OnInit, EventEmitter, Input, Output } from '@angular/core';

@Component({
    selector: 'app-category-tabber',
    templateUrl: './category-tabber.component.html',
    styleUrls: ['./category-tabber.component.scss']
})
export class CategoryTabberComponent implements OnInit {

    @Input() categories: Array<any> = []
    @Output() changed = new EventEmitter();

    dataSource: Array<any> = []
    activeCategory: any;
    // categories = [{
    //     cateid: 1,
    //     title: '招商方向',
    //     active: false
    // }, {
    //     cateid: 2,
    //     title: '融资项目',
    //     active: true
    // }, {
    //     cateid: 3,
    //     title: '优惠政策',
    //     active: false
    // }, {
    //     cateid: 4,
    //     title: '招商方向',
    //     active: false
    // }, {
    //     cateid: 5,
    //     title: '融资项目',
    //     active: false
    // }, {
    //     cateid: 6,
    //     title: '优惠政策',
    //     active: false
    // }]

    constructor() {
    }

    ngOnInit() {
        this.getDatasource();
    }

    getDatasource() {
        this.dataSource = this.categories.map((c, i) => {
            return {
                cateId: c.cateId,
                title: c.title,
                active: i == 0
            }
        });
        this.activeCategory = this.dataSource[0];
    }

    onItemClick(c) {
        if (this.activeCategory != c) {
            this.dataSource.forEach(e => { e.active = e == c });
            this.activeCategory = c;
            this.changed.emit(c);
        }
    }

}
