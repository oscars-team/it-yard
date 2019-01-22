import { Component } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { NavController } from '@ionic/angular'
import { StorageService } from "./services/storage.service";
@Component({
    selector: 'app-root',
    templateUrl: 'app.component.html'
})
export class AppComponent {
    constructor(
        private platform: Platform,
        private splashScreen: SplashScreen,
        private statusBar: StatusBar,
        private storage: StorageService,
        private navController: NavController
    ) {
        this.initializeApp();
    }

    initializeApp() {
        this.platform.ready().then(() => {
            //this.statusBar.styleDefault();
            this.statusBar.overlaysWebView(true);
            this.statusBar.backgroundColorByHexString('#DC4345');
            this.initializeChannels();
            this.initializeUnique();
        });
    }

    initializeChannels() {
        // 无论如果由于什么原因, APP中的频道没有保存
        // 那么需要先下载频道, 否则APP无法正常运行
        if (!this.storage.getChannelTree())
            this.storage.setChannelTree(() => {
                // 保存完之后才可以进入
                this.navController.navigateRoot("home/tab1");
                setTimeout(() => {
                    this.splashScreen.hide();
                }, 500)
            });
        // 如果APP中已经有频道, 那么可以直接进入APP
        else {
            this.navController.navigateRoot("home/tab1");
            this.splashScreen.hide();
        }
    }
    initializeUnique(){
        if(this.storage.generateUUID()==null){
            this.storage.setUUID();
        }else{
            this.storage.generateUUID();
        }
    }

}
