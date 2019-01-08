import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
    selector: 'app-category-tabber',
    templateUrl: './category-tabber.component.html',
    styleUrls: ['./category-tabber.component.scss']
})
export class CategoryTabberComponent implements OnInit {

    @Output() changed = new EventEmitter();

    categories = [{
        cateid: 1,
        title: '招商方向',
        active: false
    }, {
        cateid: 2,
        title: '融资项目',
        active: true
    }, {
        cateid: 3,
        title: '优惠政策',
        active: false
    }, {
        cateid: 4,
        title: '招商方向',
        active: false
    }, {
        cateid: 5,
        title: '融资项目',
        active: false
    }, {
        cateid: 6,
        title: '优惠政策',
        active: false
    }]

    constructor() { }

    ngOnInit() {
    }

    onItemClick(c) {
        this.categories.forEach(e => { e.active = e == c });
        this.changed.emit(c);
    }

}
