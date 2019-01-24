var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
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
var ComponentsModule = /** @class */ (function () {
    function ComponentsModule() {
    }
    ComponentsModule = __decorate([
        NgModule({
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
    ], ComponentsModule);
    return ComponentsModule;
}());
export { ComponentsModule };
//# sourceMappingURL=components.module.js.map