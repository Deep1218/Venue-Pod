import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardCalenderRpComponent } from './card-calender-rp.component';

describe('CardCalenderRpComponent', () => {
  let component: CardCalenderRpComponent;
  let fixture: ComponentFixture<CardCalenderRpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardCalenderRpComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CardCalenderRpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
