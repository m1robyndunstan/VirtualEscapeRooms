import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PhonePuzzleComponent } from './phone-puzzle.component';

describe('PhonePuzzleComponent', () => {
  let component: PhonePuzzleComponent;
  let fixture: ComponentFixture<PhonePuzzleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PhonePuzzleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PhonePuzzleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
