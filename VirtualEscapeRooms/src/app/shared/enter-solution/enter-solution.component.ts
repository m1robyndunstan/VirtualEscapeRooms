import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-enter-solution',
  templateUrl: './enter-solution.component.html',
  styleUrls: ['./enter-solution.component.scss']
})
export class EnterSolutionComponent implements OnInit {
  question = "Speak, friend, and enter.";
  answer = "friend";
  validation = AnswerValidationType.Exact;
  clues = [
    "Who is speaking?",
    "Replace commas with quotes."
  ];
  displayedClues: string[] = [];

  answerControl = new FormControl('');

  clueText = "";
  clueCount = 0;

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
        // Call an input function
        alert("You're right!");
      }
      else {
        if (this.displayedClues.length < this.clues.length) {
          this.displayedClues.push(this.clues[this.displayedClues.length]);
        }
        else if (this.displayedClues.length == this.clues.length) {
          this.displayedClues.push("The answer is: " + this.answer);
        }
      }
    }
  }
}

export enum AnswerValidationType {
  Includes,
  Exact
}