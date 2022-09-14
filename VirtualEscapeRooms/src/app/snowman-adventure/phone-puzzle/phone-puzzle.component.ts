import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { PhoneContact } from './phone-contact.model';

@Component({
  selector: 'app-phone-puzzle',
  templateUrl: './phone-puzzle.component.html',
  styleUrls: ['./phone-puzzle.component.scss']
})
export class PhonePuzzleComponent implements OnInit {
  @Output() calledSanta = new EventEmitter();
  
  phonebook: PhoneContact[] = [
    new PhoneContact("Bunny, Easter", "327-837-4273", "fa-solid fa-egg", "Hi, you've reached the Easter Bunny. I'm on vacation until spring, so leave a message, and I won't get back to you."),
    new PhoneContact("Frost, Jack", "522-537-6789", "fa-solid fa-snowflake", "No time to talk. Busy drawing patterns on windows. (click)"),
    new PhoneContact("O'Lantern, Jack", "522-565-4448", "fa-solid fa-ghost", "Rawr! I'm scary! Leave me alone!"),
    new PhoneContact("Prince, Nutcracker", "688-272-2537", "fa-solid fa-crown", "(Crack) What was that? Sorry, I can't hear you. (Crack)"),
    new PhoneContact("Claus, Santa", "726-822-5287", "fa-solid fa-sleigh", "success"),
    new PhoneContact("Fairy, Tooth", "866-843-2479", "fa-solid fa-tooth", "Hi, you've reached the Tooth Fairy. Leave a message after the beep.")
  ];
  clues = [
    "Examine the buttons on the phone keypad.",
    "Dial SAN-TAC-LAUS",
    "The answer is 726-822-5287"
  ];

  displayNames: string[] = [];
  displayNumbers: PhoneContact[] = [];
  displayFlavor: string = "";
  displayedClues: string[] = [];

  constructor() { }

  ngOnInit(): void {
    this.displayNames = this.phonebook.map(contact => contact.name).sort((a:string, b:string) => a < b ? -1 : (a > b ? 1 : 0));

    let copyPhonebook: PhoneContact[] = [];
    this.phonebook.forEach(contact => copyPhonebook.push(contact));
    this.displayNumbers = [];
    while (copyPhonebook.length > 0) {
      let index = Math.floor(Math.random() * copyPhonebook.length);
      if (index == 0) {
        let temp = copyPhonebook.shift();
        if (temp) this.displayNumbers.push(temp);
      }
      else if (index == copyPhonebook.length - 1) {
        let temp = copyPhonebook.pop();
        if (temp) this.displayNumbers.push(temp);
      }
      else {
        this.displayNumbers.push(copyPhonebook[index]);
        copyPhonebook = copyPhonebook.slice(0, index).concat(copyPhonebook.slice(index + 1));
      }
    }
  }

  callNumber = (phone: PhoneContact) => {
    if (phone.flavorText == "success") {
      this.calledSanta.emit();
    }
    else {
      phone.called = true;
      this.displayFlavor = phone.flavorText;
      if (this.displayedClues.length < this.clues.length) {
        this.displayedClues.push(this.clues[this.displayedClues.length]);
      }
    }
  };

}
