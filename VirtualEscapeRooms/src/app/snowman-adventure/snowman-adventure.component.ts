import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-snowman-adventure',
  templateUrl: './snowman-adventure.component.html',
  styleUrls: ['./snowman-adventure.component.scss']
})
export class SnowmanAdventureComponent implements OnInit {

  currentPage = SnowmanPages.Intro;
  availablePages = SnowmanPages;

  constructor() { }

  ngOnInit(): void {
  }

}

enum SnowmanPages {
  Intro
}