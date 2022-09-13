import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EnterSolutionComponent } from './enter-solution/enter-solution.component';
import { ReactiveFormsModule } from '@angular/forms';
import { PicturePuzzleComponent } from './picture-puzzle/picture-puzzle.component';
import { DragDropModule } from '@angular/cdk/drag-drop';



@NgModule({
  declarations: [
    EnterSolutionComponent,
    PicturePuzzleComponent
  ],
  exports: [
    EnterSolutionComponent,
    PicturePuzzleComponent
  ],
  imports: [
    CommonModule,
    DragDropModule,
    ReactiveFormsModule
  ]
})
export class SharedModule { }
