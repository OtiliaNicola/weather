import { Component, Input } from '@angular/core';
import { City } from '../../../../interfaces/interface.city';

@Component({
  selector: 'app-other-city',
  templateUrl: './other-city.component.html',
  styleUrl: './other-city.component.scss'
})
export class OtherCityComponent {

  @Input('city') city!: City;

}
