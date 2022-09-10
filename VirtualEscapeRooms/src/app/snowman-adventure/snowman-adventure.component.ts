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
    "Which one is the magic hat?"
  ];

  answers = [
    "hat",
    "0"
  ];

  answerValidation = [
    AnswerValidationType.Includes
  ];

  clues = [
    [
      "His head looks a little bare.",
      "What do you wear to keep your head warm?"
    ],
    [
      "The magic hat has a feather.",
      "The magic hat has animal print."
    ]
  ];

  pickOneItems = [
    [
      "/assets/snowman/hat_0.png",
      "/assets/snowman/hat_1.png",
      "/assets/snowman/hat_2.png",
      "/assets/snowman/hat_3.png",
      "/assets/snowman/hat_4.png",
      "/assets/snowman/hat_5.png",
      "/assets/snowman/hat_6.png",
      "/assets/snowman/hat_7.png",
      "/assets/snowman/hat_8.png",
      "/assets/snowman/hat_9.png"
    ]
  ]

  constructor() { }

  ngOnInit(): void {
    //jQuery(document.getElementsByClassName("build-snowman-draggable")).draggable();
  }

  continue = () => {
    if (this.currentPage < SnowmanPages.End) {
      this.currentPage++;
    }
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