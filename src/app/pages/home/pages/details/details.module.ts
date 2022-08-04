import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DetailsRoutingModule } from './details-routing.module';
import { DetailsComponent } from './details.component';
import { NbButtonModule, NbCardModule, NbUserModule } from '@nebular/theme';


@NgModule({
  declarations: [
    DetailsComponent
  ],
  imports: [
    CommonModule,
    DetailsRoutingModule,
    NbCardModule,
    NbButtonModule,
    NbUserModule,
  ]
})
export class DetailsModule { }
