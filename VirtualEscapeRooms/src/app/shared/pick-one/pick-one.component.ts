import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-pick-one',
  templateUrl: './pick-one.component.html',
  styleUrls: ['./pick-one.component.scss']
})
export class PickOneComponent implements OnInit {
  @Input() question: string = "Pick one.";
  @Input() answer: string = "0";
  @Input() clues: string[] = [
    "Pick the first one"
  ];
  @Input() items: Object[] = [];
  @Input() colClass: string = "col";

  @Output() puzzleSolved = new EventEmitter();

  answerIndex: number = 0;
  displayedClues: string[] = [];

  constructor() { }

  ngOnInit(): void {
    this.answerIndex = parseInt(this.answer);
  }

}
