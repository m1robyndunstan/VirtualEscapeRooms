import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SnowmanAdventureComponent } from './snowman-adventure.component';

describe('SnowmanAdventureComponent', () => {
  let component: SnowmanAdventureComponent;
  let fixture: ComponentFixture<SnowmanAdventureComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SnowmanAdventureComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SnowmanAdventureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
