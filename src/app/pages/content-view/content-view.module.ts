import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { ContentViewPage } from './content-view.page';
import { ComponentsModule } from '../../components/components.module'
const routes: Routes = [
    {
        path: '',
        component: ContentViewPage
    }
];

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        ComponentsModule,
        RouterModule.forChild(routes)
    ],
    declarations: [ContentViewPage]
})
export class ContentViewPageModule { }
