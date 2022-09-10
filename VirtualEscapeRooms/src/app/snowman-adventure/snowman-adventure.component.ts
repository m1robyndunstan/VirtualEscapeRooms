import { Component, OnInit } from '@angular/core';
import { AnswerValidationType } from '../shared/enter-solution/enter-solution.component';

@Component({
  selector: 'app-snowman-adventure',
  templateUrl: './snowman-adventure.component.html',
  styleUrls: ['./snowman-adventure.component.scss']
})
export class SnowmanAdventureComponent implements OnInit {

  currentPage = SnowmanPages.Intro;
  availablePages = SnowmanPages;

  questions = [
    "What is the snowman missing?"
  ];

  answers = [
    "hat"
  ];

  answerValidation = [
    AnswerValidationType.Includes
  ];

  clues = [
    [
      "His head looks a little bare.",
      "What do you wear to keep your head warm?"
    ]
  ];

  constructor() { }

  ngOnInit(): void {
    //jQuery(document.getElementsByClassName("build-snowman-draggable")).draggable();
  }

  continue = () => {
    switch(this.currentPage) {
      case SnowmanPages.Intro:
        this.currentPage = SnowmanPages.Hats;
        break;
    }
  }
}

enum SnowmanPages {
  Intro,
  Hats
}