import { Component, OnInit } from '@angular/core';
import { WeatherService } from '../services/weather.service';
import { WeatherData } from '../interfaces/weather-data';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {
  city: string = '';
  temperature?: number;
  wind?: number;
  humidity?: number;
  cityToDisplay: string = '';
  img: string = '';
  //weatherData?: weatherData; //apenas


  constructor(private weatherService: WeatherService){}
  ngOnInit(): void {
    this.city = 'Lisboa';
    this.searchCity()
  }

  searchCity(){
    this.weatherService.getWeatherData(this.city).subscribe(weather => {
      this.cityToDisplay = weather.location.name;
      this.temperature = weather.current.temp_c;
      this.wind = weather.current.wind_kph;
      this.humidity = weather.current.humidity;
      this.img = weather.current.condition.icon;
      //this.weatherData = weather //apenas. Mudar hmtl se for o caso
    });

  }

   


}
