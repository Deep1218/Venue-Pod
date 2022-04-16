import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardCalenderComponent } from './card-calender.component';

describe('CardCalenderComponent', () => {
  let component: CardCalenderComponent;
  let fixture: ComponentFixture<CardCalenderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardCalenderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CardCalenderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
