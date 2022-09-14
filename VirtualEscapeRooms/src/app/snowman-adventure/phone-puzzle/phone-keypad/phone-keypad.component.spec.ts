import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PhoneKeypadComponent } from './phone-keypad.component';

describe('PhoneKeypadComponent', () => {
  let component: PhoneKeypadComponent;
  let fixture: ComponentFixture<PhoneKeypadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PhoneKeypadComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PhoneKeypadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
