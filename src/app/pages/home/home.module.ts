import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { NbTabsetModule, NbButton, NbButtonModule } from '@nebular/theme';


@NgModule({
  declarations: [
    HomeComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    NbTabsetModule,
    NbButtonModule
  ]
})
export class HomeModule { }
