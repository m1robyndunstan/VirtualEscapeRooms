import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SnowmanAdventureRoutingModule } from './snowman-adventure-routing.module';
import { SnowmanAdventureComponent } from './snowman-adventure.component';
import { MainComponent } from './main/main.component';


@NgModule({
  declarations: [
    SnowmanAdventureComponent,
    MainComponent
  ],
  imports: [
    CommonModule,
    SnowmanAdventureRoutingModule
  ]
})
export class SnowmanAdventureModule { }
