import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { ContentListComponent } from './content-list/content-list.component';
import { CategoryTabberComponent } from './category-tabber/category-tabber.component';
import { ContentItemComponent } from './content-item/content-item.component';


import { VgCoreModule } from 'videogular2/core';
import { VgControlsModule } from 'videogular2/controls';
import { VgOverlayPlayModule } from 'videogular2/overlay-play';
import { VgBufferingModule } from 'videogular2/buffering';
import { VideoComponent } from './video/video.component';
@NgModule({
    declarations: [
        ContentListComponent,
        CategoryTabberComponent,
        ContentItemComponent,
        VideoComponent
    ],
    imports: [
        IonicModule.forRoot(),
        CommonModule,
        VgCoreModule,
        VgControlsModule,
        VgOverlayPlayModule,
        VgBufferingModule

    ],
    exports: [
        ContentListComponent,
        CategoryTabberComponent,
        ContentItemComponent,
        VideoComponent
    ]
})
export class ComponentsModule { }
