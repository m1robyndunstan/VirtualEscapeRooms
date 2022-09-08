import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SnowmanAdventureComponent } from './snowman-adventure.component';

const routes: Routes = [{ path: '', component: SnowmanAdventureComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SnowmanAdventureRoutingModule { }
