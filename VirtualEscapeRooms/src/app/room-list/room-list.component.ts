import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-room-list',
  templateUrl: './room-list.component.html',
  styleUrls: ['./room-list.component.scss']
})
export class RoomListComponent implements OnInit {
  rooms: Room[] = [
    new Room(
      "Snowman Adventure", 
      "/assets/snowman/snowman-icon.png", 
      "snowman head",
      "A Christmas-themed adventure to save a snowman from melting.", 
      "/snowman")
  ];

  constructor() { }

  ngOnInit(): void {
  }

}

class Room {
  constructor(
    public title: string, 
    public imageUrl: string, 
    public imageAlt: string, 
    public description: string, 
    public linkUrl: string) {}
}
