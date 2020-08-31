import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";
import {HeaderComponent} from "../pages/header/header.component";
import {RouterModule} from "@angular/router";


@NgModule({
  declarations: [
    HeaderComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    RouterModule,
  ],
  exports: [
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    HeaderComponent,
  ]
})
export class SharedModule { }
