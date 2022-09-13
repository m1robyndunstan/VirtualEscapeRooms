import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PicturePuzzleComponent } from './picture-puzzle.component';

describe('PicturePuzzleComponent', () => {
  let component: PicturePuzzleComponent;
  let fixture: ComponentFixture<PicturePuzzleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PicturePuzzleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PicturePuzzleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
