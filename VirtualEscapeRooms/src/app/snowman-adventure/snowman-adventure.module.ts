import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SnowmanAdventureRoutingModule } from './snowman-adventure-routing.module';
import { SnowmanAdventureComponent } from './snowman-adventure.component';
import { BuildSnowmanComponent } from './build-snowman/build-snowman.component';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { SharedModule } from '../shared/shared.module';
import { PickHatComponent } from './pick-hat/pick-hat.component';


@NgModule({
  declarations: [
    SnowmanAdventureComponent,
    BuildSnowmanComponent,
    PickHatComponent
  ],
  imports: [
    CommonModule,
    DragDropModule,
    SharedModule,
    SnowmanAdventureRoutingModule
  ]
})
export class SnowmanAdventureModule { }