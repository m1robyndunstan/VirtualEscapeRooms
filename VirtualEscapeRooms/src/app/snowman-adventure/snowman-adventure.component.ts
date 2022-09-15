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
    "What is the snowman's name?",
    "What type of building did you find?",
    "What is the lock combination?"
  ];

  answers = [
    "hat",
    "Frosty",
    "greenhouse",
    "7194"
  ];

  answerValidation = [
    AnswerValidationType.Includes,
    AnswerValidationType.Exact,
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
    ],
    [
      "Put the picture together to find the answer.",
      "what word is on the picture?"
    ],
    [
      "Do the pictures on the lock remind you of anything in the greenhouse?",
      "Count the number of times each picture appears in the greenhouse."
    ]
  ];

  thermometerShowClue = false;

  firePuzzlePieces = [
    "./assets/snowman/fire_puzzle_0.png",
    "./assets/snowman/fire_puzzle_1.png",
    "./assets/snowman/fire_puzzle_2.png",
    "./assets/snowman/fire_puzzle_3.png",
    "./assets/snowman/fire_puzzle_4.png",
    "./assets/snowman/fire_puzzle_5.png",
    "./assets/snowman/fire_puzzle_6.png",
    "./assets/snowman/fire_puzzle_7.png"
  ];

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