import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NewsRoutingModule } from './news-routing.module';
import { NewsComponent } from './news.component';
import { NbCardModule, NbButtonModule, NbUserModule, NbLayoutColumnComponent, NbLayoutModule, NbSidebarModule } from '@nebular/theme';


@NgModule({
  declarations: [
    NewsComponent
  ],
  imports: [
    CommonModule,
    NewsRoutingModule,
    NbCardModule,
    NbButtonModule,
    NbUserModule,
    NbLayoutModule,
    NbSidebarModule.forRoot()
  ]
})
export class NewsModule { }
