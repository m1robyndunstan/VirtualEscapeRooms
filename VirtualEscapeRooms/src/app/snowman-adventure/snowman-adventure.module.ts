import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SnowmanAdventureRoutingModule } from './snowman-adventure-routing.module';
import { SnowmanAdventureComponent } from './snowman-adventure.component';


@NgModule({
  declarations: [
    SnowmanAdventureComponent
  ],
  imports: [
    CommonModule,
    SnowmanAdventureRoutingModule
  ]
})
export class SnowmanAdventureModule { }
