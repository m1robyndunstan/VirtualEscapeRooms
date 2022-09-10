import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EnterSolutionComponent } from './enter-solution/enter-solution.component';
import { ReactiveFormsModule } from '@angular/forms';
import { PickOneComponent } from './pick-one/pick-one.component';



@NgModule({
  declarations: [
    EnterSolutionComponent,
    PickOneComponent
  ],
  exports: [
    EnterSolutionComponent,
    PickOneComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule
  ]
})
export class SharedModule { }
