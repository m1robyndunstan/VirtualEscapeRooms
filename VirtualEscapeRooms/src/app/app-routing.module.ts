import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RoomListComponent } from './room-list/room-list.component';

const routes: Routes = [{ path: '', component: RoomListComponent },
  { path: 'snowman', loadChildren: () => import('./snowman-adventure/snowman-adventure.module').then(m => m.SnowmanAdventureModule) }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
