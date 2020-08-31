import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ManageRoutingModule } from './manage-routing.module';
import { ManageComponent } from './manage.component';
import {SharedModule} from "../../shared/shared.module";


@NgModule({
  declarations: [ManageComponent],
  imports: [
    CommonModule,
    ManageRoutingModule,
    SharedModule
  ]
})
export class ManageModule { }
