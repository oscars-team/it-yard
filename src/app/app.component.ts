import { Component, ViewChildren, QueryList } from '@angular/core';
import { Router } from '@angular/router';
import { Platform, IonRouterOutlet, ToastController } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { StorageService } from "./services/storage.service";
@Component({
    selector: 'app-root',
    templateUrl: 'app.component.html'
})
export class AppComponent {

    @ViewChildren(IonRouterOutlet) routerOutlets: QueryList<IonRouterOutlet>;

    constructor(
        private platform: Platform,
        private splashScreen: SplashScreen,
        private statusBar: StatusBar,
        private storage: StorageService,
        private router: Router,
        private toaskController: ToastController
    ) {
        this.initializeApp();
    }

    lastTimeBackPress = 0;
    timePeriodToExit = 2000;
    initializeApp() {
        this.platform.ready().then(() => {
            //this.statusBar.styleDefault();
            this.statusBar.overlaysWebView(true);
            this.statusBar.backgroundColorByHexString('#DC4345');
            this.initializeChannels();
            this.backButtonEvent();

        });
    }

    backButtonEvent() {
        this.platform.backButton.subscribeWithPriority(9999, () => {
            this.routerOutlets.forEach((outlet: IonRouterOutlet) => {
                if (outlet && outlet.canGoBack())
                    outlet.pop();
                else {
                    if (new Date().getTime() - this.lastTimeBackPress < this.timePeriodToExit) {
                        navigator['app'].exitApp();
                    } else {
                        var toast = this.toaskController.create({
                            message: '再按一次返回退出APP'
                            , duration: 2000
                            , position: 'top'
                        })
                        toast.then(t => t.present())
                        this.lastTimeBackPress = new Date().getTime();
                    }
                }
            });
        });
    }

    initializeChannels() {
        // 无论如果由于什么原因, APP中的频道没有保存
        // 那么需要先下载频道, 否则APP无法正常运行
        if (!this.storage.getChannelTree())
            this.storage.setChannelTree(() => {
                // 保存完之后才可以进入
                setTimeout(() => {
                    this.splashScreen.hide();
                }, 500)
            });
        // 如果APP中已经有频道, 那么可以直接进入APP
        else {
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
