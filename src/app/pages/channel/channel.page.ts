import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { NavController } from '@ionic/angular'
import { NavigationService } from '../../services/navigation.service'
import { ContentListComponent } from '../../components/content-list/content-list.component';

@Component({
  selector: 'app-channel',
  templateUrl: './channel.page.html',
  styleUrls: ['./channel.page.scss'],
})

export class ChannelPage implements OnInit {
  @Input() title: String = '';
  @Input() cateId: Number = 0;
  noMoreContents: Boolean = false;
  @ViewChild('contentList')
  contentList: ContentListComponent


  constructor(
    private navControl: NavController,
    private navService: NavigationService,
  ) {
    let model = navService.navParams;
    this.title = model.title;
    this.cateId = model.cateId;
  }

  ngOnInit() {
  }

  doRefresh(event) {
    let completed = false;
    this.contentList.refresh(() => {
      event.target.complete();
      completed = true;
    })
    setTimeout(() => {
      if (!completed) event.target.complete();
    }, 5000);
  }
  loadData(event) {
    this.contentList.getNextPage(res => {
      event.target.complete();
    });
  }

  onListChanged(res) {
    console.log(res);
    this.noMoreContents = res.length < 10;
  }

  ionViewWillLeave() {
    console.log('channel leaving...')
    this.contentList.stopVideoesPlay();
  }

}
