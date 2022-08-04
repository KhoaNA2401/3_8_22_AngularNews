import { Component } from '@angular/core';
import { NbMenuItem } from '@nebular/theme';
import { GetNewsService } from './services/get-news.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'ShopDemo';
  constructor(private articlesServ: GetNewsService) { }
  items: NbMenuItem[] = [
    {
      title: 'Home',
      icon: 'home',
      link: '/home'
    },
    {
      title: 'Logout',
      icon: 'unlock-outline',
    },
  ];
}
