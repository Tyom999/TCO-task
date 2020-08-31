import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {ListRoutingModule} from './list-routing.module';
import {ListComponent} from './list.component';
import {SharedModule} from "../../shared/shared.module";
import { FilterComponent } from './components/filter/filter.component';


@NgModule({
  declarations: [ListComponent, FilterComponent],
  imports: [
    CommonModule,
    ListRoutingModule,
    SharedModule
  ]
})
export class ListModule { }
