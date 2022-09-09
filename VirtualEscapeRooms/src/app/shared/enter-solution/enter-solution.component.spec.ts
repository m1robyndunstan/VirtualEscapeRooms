import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EnterSolutionComponent } from './enter-solution.component';

describe('EnterSolutionComponent', () => {
  let component: EnterSolutionComponent;
  let fixture: ComponentFixture<EnterSolutionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EnterSolutionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EnterSolutionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
