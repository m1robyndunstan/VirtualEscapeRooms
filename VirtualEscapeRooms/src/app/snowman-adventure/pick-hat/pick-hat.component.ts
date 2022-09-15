import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-pick-hat',
  templateUrl: './pick-hat.component.html',
  styleUrls: ['./pick-hat.component.scss']
})
export class PickHatComponent implements OnInit {
  @Output() hatFound = new EventEmitter();
  
  answer = 0;
  clues = [
    "The magic hat has a feather.",
    "The magic hat has animal print.",
    "The magic hat is the first hat, purple with a blue feather and animal print ribbon."
  ];
  hats = [
    new Hat("/assets//snowman/hat_0.png"),
    new Hat("/assets//snowman/hat_1.png"),
    new Hat("/assets//snowman/hat_2.png"),
    new Hat("/assets//snowman/hat_3.png"),
    new Hat("/assets//snowman/hat_4.png"),
    new Hat("/assets//snowman/hat_5.png"),
    new Hat("/assets//snowman/hat_6.png"),
    new Hat("/assets//snowman/hat_7.png"),
    new Hat("/assets//snowman/hat_8.png"),
    new Hat("/assets//snowman/hat_9.png")
  ];
  displayedClues: string[] = [];

  constructor() { }

  ngOnInit(): void {
  }

  clickHat = (index: number) => {
    this.hats.forEach((hat, i) => {
      if (i == index && !hat.isDisabled) {
        hat.isSelected = true;
      }
      else {
        hat.isSelected = false;
      }
    });
  }

  submitSelectedHat = () => {
    let selectedIndex = this.hats.findIndex((h) => h.isSelected);
    if (selectedIndex > -1 && selectedIndex == this.answer) {
      this.hatFound.emit();
    }
    else if (this.displayedClues.length < this.clues.length) {
      this.hats[selectedIndex].isDisabled = true;
      this.displayedClues.push(this.clues[this.displayedClues.length]);
    }
    else {
      this.hats[selectedIndex].isDisabled = true;
    }
  }
}

class Hat {
  isSelected = false;
  isDisabled = false;

  constructor(public imageUrl: string) {}
}