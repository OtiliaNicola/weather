import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardTemperatureDayComponent } from './card-temperature-day.component';

describe('CardTemperatureDayComponent', () => {
  let component: CardTemperatureDayComponent;
  let fixture: ComponentFixture<CardTemperatureDayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CardTemperatureDayComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CardTemperatureDayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
