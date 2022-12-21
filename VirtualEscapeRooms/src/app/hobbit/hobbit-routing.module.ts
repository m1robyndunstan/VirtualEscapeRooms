import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HobbitComponent } from './hobbit.component';

const routes: Routes = [{ path: '', component: HobbitComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HobbitRoutingModule { }
