import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PhonePuzzleComponent } from './phone-puzzle.component';
import { PhoneKeypadComponent } from './phone-keypad/phone-keypad.component';



@NgModule({
  declarations: [
    PhonePuzzleComponent,
    PhoneKeypadComponent
  ],
  exports: [
    PhonePuzzleComponent
  ],
  imports: [
    CommonModule
  ]
})
export class PhonePuzzleModule { }
