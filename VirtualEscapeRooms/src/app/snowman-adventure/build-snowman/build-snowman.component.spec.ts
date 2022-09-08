import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BuildSnowmanComponent } from './build-snowman.component';

describe('BuildSnowmanComponent', () => {
  let component: BuildSnowmanComponent;
  let fixture: ComponentFixture<BuildSnowmanComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BuildSnowmanComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BuildSnowmanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
