import { Component, Input, OnInit } from '@angular/core';
import {CdkDragDrop, moveItemInArray} from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-picture-puzzle',
  templateUrl: './picture-puzzle.component.html',
  styleUrls: ['./picture-puzzle.component.scss']
})
export class PicturePuzzleComponent implements OnInit {
  @Input() pieces: string[] = [];
  displayPieces: string[] = [];

  constructor() { }

  ngOnInit(): void {
    let copy: string[] = [];
    this.pieces.forEach(p => copy.push(p));
    this.displayPieces = [];

    while (copy.length > 0) {
      let index = Math.floor(Math.random() * copy.length);
      // Add designated item to displayedPieces and remove from copy
      if (index == 0) {
        this.displayPieces.push(copy.shift() ?? "");
      }
      else if (index == copy.length - 1) {
        this.displayPieces.push(copy.pop() ?? "");
      }
      else {
        this.displayPieces.push(copy[index]);
        copy = copy.slice(0, index).concat(copy.slice(index + 1));
      }
    }
  }

  drop = (event: CdkDragDrop<string[]>) => {
    moveItemInArray(this.displayPieces, event.previousIndex, event.currentIndex);
  }

}
