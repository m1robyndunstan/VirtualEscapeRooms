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
    "What is the snowman missing?",
    "What is the snowman's name?"
  ];

  answers = [
    "hat",
    "Frosty"
  ];

  answerValidation = [
    AnswerValidationType.Includes,
    AnswerValidationType.Exact
  ];

  clues = [
    [
      "His head looks a little bare.",
      "What do you wear to keep your head warm?"
    ],
    [
      "There are 6 letters in the snowman's name.",
      "The letters on the path through the maze spell his name."
    ]
  ];
  thermometerShowClue = false;

  constructor() { }

  ngOnInit(): void {
    //jQuery(document.getElementsByClassName("build-snowman-draggable")).draggable();
  }

  continue = () => {
    if (this.currentPage < SnowmanPages.End) {
      this.currentPage++;
    }
  }

  showThermometerClue = () => {
    this.thermometerShowClue = true;
  }
}

enum SnowmanPages {
  Intro,
  Hats,
  Thermometer,
  Map,
  Fire,
  Phone,
  Lock,
  End
}