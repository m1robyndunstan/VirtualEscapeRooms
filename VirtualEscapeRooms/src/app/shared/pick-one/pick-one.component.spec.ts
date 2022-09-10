import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PickOneComponent } from './pick-one.component';

describe('PickOneComponent', () => {
  let component: PickOneComponent;
  let fixture: ComponentFixture<PickOneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PickOneComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PickOneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
