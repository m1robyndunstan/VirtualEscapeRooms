import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HobbitRoutingModule } from './hobbit-routing.module';
import { HobbitComponent } from './hobbit.component';


@NgModule({
  declarations: [
    HobbitComponent
  ],
  imports: [
    CommonModule,
    HobbitRoutingModule
  ]
})
export class HobbitModule { }
