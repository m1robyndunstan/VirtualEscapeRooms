import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EnterSolutionComponent } from './enter-solution/enter-solution.component';
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    EnterSolutionComponent
  ],
  exports: [
    EnterSolutionComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule
  ]
})
export class SharedModule { }
