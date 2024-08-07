import { Component, Input } from '@angular/core';
import { Day } from '../../../../interfaces/interface.day';

@Component({
  selector: 'app-card-temperature-day',
  templateUrl: './card-temperature-day.component.html',
  styleUrl: './card-temperature-day.component.scss'
})
export class CardTemperatureDayComponent {

  @Input('day') day!: Day;


}
