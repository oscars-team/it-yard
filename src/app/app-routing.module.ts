import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
    { path: '', loadChildren: './tabs/tabs.module#TabsPageModule' },
    { path: 'content-view', loadChildren: './pages/content-view/content-view.module#ContentViewPageModule' },
    { path: 'channel', loadChildren: './pages/channel/channel.module#ChannelPageModule' },  { path: 'web-browser', loadChildren: './pages/web-browser/web-browser.module#WebBrowserPageModule' }


];
@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
