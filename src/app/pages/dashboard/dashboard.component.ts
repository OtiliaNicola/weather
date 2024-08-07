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
      icon: 'https://static.vecteezy.com/system/resources/previews/019/899/727/original/simple-sun-icon-png.png',
      max: '44ºF',
      min: '37ºF'
    },
    {
      name: 'mon',
      icon: 'https://static.vecteezy.com/system/resources/previews/019/899/727/original/simple-sun-icon-png.png',
      max: '39ºF',
      min: '33ºF'
    },
    {
      name: 'tue',
      icon: 'https://static.vecteezy.com/system/resources/previews/019/899/727/original/simple-sun-icon-png.png',
      max: '39ºF',
      min: '32ºF'
    },
    {
      name: 'wed',
      icon: 'https://static.vecteezy.com/system/resources/previews/019/899/727/original/simple-sun-icon-png.png',
      max: '37ºF',
      min: '31ºF'
    },
    {
      name: 'thu',
      icon: 'https://cdn-icons-png.freepik.com/512/237/237867.png',
      max: '40ºF',
      min: '32ºF'
    },
    {
      name: 'fri',
      icon: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQb0rlws5JzmyEhMFu8CPqgDVHevM7qDQADWw&sg',
      max: '46ºF',
      min: '33ºF'
    },
    {
      name: 'sat',
      icon: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQb0rlws5JzmyEhMFu8CPqgDVHevM7qDQADWw&sg',
      max: '58ºF',
      min: '51ºF'
    }

  ]

  cities: City[] = [
    {
      name: 'Seattle',
      cod: 'US',
      icon: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQEG9OiHF1Q94pRZZt2yHVXAqWS501NzKjKag&s',
      temp: '37ºF',
      detail: 'Mist',
    },
    {
      name: 'Munich',
      cod: 'DE',
      icon: 'https://cdn0.iconfinder.com/data/icons/weather-forecast-33/64/overcast_weather_climate_cloudy_sky-512.png',
      temp: '23ºF',
      detail: 'Overcast Clouds',
    },
    {
      name: 'Paris',
      cod: 'FR',
      icon: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQEG9OiHF1Q94pRZZt2yHVXAqWS501NzKjKag&s',
      temp: '24ºF',
      detail: 'Mist',
    },
    {
      name: 'Istanbul',
      cod: 'TR',
      icon: 'https://cdn-icons-png.flaticon.com/512/6697/6697662.png',
      temp: '58ºF',
      detail: 'Clear Sky',
    },
    {
      name: 'Dubai',
      cod: 'AE',
      icon: 'https://www.svgrepo.com/show/442419/weather-few-clouds-night-symbolic.svg',
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


