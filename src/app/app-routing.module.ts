import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
    { path: 'home', loadChildren: './tabs/tabs.module#TabsPageModule' },
    { path: 'content-view', loadChildren: './pages/content-view/content-view.module#ContentViewPageModule' },
    { path: '', loadChildren: './pages/loading/loading.module#LoadingPageModule' },
    { path: 'channel', loadChildren: './pages/channel/channel.module#ChannelPageModule' }

];
@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
