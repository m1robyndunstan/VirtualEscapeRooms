import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { UntypedFormControl } from '@angular/forms';

@Component({
  selector: 'app-enter-solution',
  templateUrl: './enter-solution.component.html',
  styleUrls: ['./enter-solution.component.scss']
})
export class EnterSolutionComponent implements OnInit {
  @Input() question: string = "Speak, friend, and enter.";
  @Input() answer:string = "friend";
  @Input() validation: AnswerValidationType = AnswerValidationType.Exact;
  @Input() clues: string[] = [
    "Who is speaking?",
    "Replace commas with quotes."
  ];

  @Output() puzzleSolved = new EventEmitter();

  displayedClues: string[] = [];

  answerControl = new UntypedFormControl('');

  constructor() { }

  ngOnInit(): void {
  }

  validateAnswer = () => {
    let answerValue: string = this.answerControl.value;
    let correct = false;
    if (answerValue && answerValue.trim()) {
      switch(this.validation) {
        case AnswerValidationType.Exact:
          correct = answerValue.toUpperCase() == this.answer.toUpperCase();
          break;
        case AnswerValidationType.Includes:
          correct = answerValue.toUpperCase().indexOf(this.answer.toUpperCase()) > -1;
          break;
      }

      if (correct) {
        this.puzzleSolved.emit();
      }
      else {
        if (this.displayedClues.length < this.clues.length) {
          this.displayedClues.push(this.clues[this.displayedClues.length]);
        }
        else if (this.displayedClues.length == this.clues.length) {
          this.displayedClues.push("The answer is: " + this.answer.toUpperCase());
        }
      }
    }
  }
}

export enum AnswerValidationType {
  Includes,
  Exact
}