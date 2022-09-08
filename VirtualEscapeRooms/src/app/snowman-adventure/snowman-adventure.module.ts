import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SnowmanAdventureRoutingModule } from './snowman-adventure-routing.module';
import { SnowmanAdventureComponent } from './snowman-adventure.component';
import { BuildSnowmanComponent } from './build-snowman/build-snowman.component';


@NgModule({
  declarations: [
    SnowmanAdventureComponent,
    BuildSnowmanComponent
  ],
  imports: [
    CommonModule,
    SnowmanAdventureRoutingModule
  ]
})
export class SnowmanAdventureModule { }