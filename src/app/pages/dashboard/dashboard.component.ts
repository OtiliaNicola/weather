import { Component } from '@angular/core';
import { Day } from '../../interfaces/interface.day';
import { City } from '../../interfaces/interface.city';
import { Detail } from '../../interfaces/interface.detail';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})
export class DashboardComponent {

  days: Day[] = [
    {
      name: 'sun',
      icon: 'assets/images/sun.png',
      max: '44ºF',
      min: '37ºF'
    },
    {
      name: 'mon',
      icon: 'assets/images/sun.png',
      max: '39ºF',
      min: '33ºF'
    },
    {
      name: 'tue',
      icon: 'assets/images/sun.png',
      max: '39ºF',
      min: '32ºF'
    },
    {
      name: 'wed',
      icon: 'assets/images/sun.png',
      max: '37ºF',
      min: '31ºF'
    },
    {
      name: 'thu',
      icon: 'assets/images/clouds.png',
      max: '40ºF',
      min: '32ºF'
    },
    {
      name: 'fri',
      icon: 'assets/images/rain.png',
      max: '46ºF',
      min: '33ºF'
    },
    {
      name: 'sat',
      icon: 'assets/images/rain.png',
      max: '58ºF',
      min: '51ºF'
    }

  ]

  cities: City[] = [
    {
      name: 'Seattle',
      cod: 'US',
      icon: 'assets/images/mist.png',
      temp: '37ºF',
      detail: 'Mist',
    },
    {
      name: 'Munich',
      cod: 'DE',
      icon: 'assets/images/cloud.png',
      temp: '23ºF',
      detail: 'Overcast Clouds',
    },
    {
      name: 'Paris',
      cod: 'FR',
      icon: 'assets/images/mist.png',
      temp: '24ºF',
      detail: 'Mist',
    },
    {
      name: 'Istanbul',
      cod: 'TR',
      icon: 'assets/images/clear-sky.png',
      temp: '58ºF',
      detail: 'Clear Sky',
    },
    {
      name: 'Dubai',
      cod: 'AE',
      icon: 'assets/images/few-clouds.png',
      temp: '71ºF',
      detail: 'Few Clouds',
    },
  ]

  details: Detail[] = [
    {
      name:'Visibility',
      detail: '10km'
    },
    {
      name:'Dew Point',
      detail: '24ºF'
    },
    {
      name:'Wind',
      detail: '16mph'
    },
    {
      name:'Humidity',
      detail: '50%'
    },
    {
      name:'Cloudiness',
      detail: '100%'
    }
  ]
}


