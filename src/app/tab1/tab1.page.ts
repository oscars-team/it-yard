import { Component } from '@angular/core';

@Component({
    selector: 'app-tab1',
    templateUrl: 'tab1.page.html',
    styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
    items = [1, 2, 3, 4, 5];
    slideOpts = {
        effect: 'flip'
    }
}
