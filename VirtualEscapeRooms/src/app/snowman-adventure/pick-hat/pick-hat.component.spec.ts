import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PickHatComponent } from './pick-hat.component';

describe('PickHatComponent', () => {
  let component: PickHatComponent;
  let fixture: ComponentFixture<PickHatComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PickHatComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PickHatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
