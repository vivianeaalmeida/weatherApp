import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  urlApi: string = 'http://api.weatherapi.com/v1/current.json';

  apiKey: string = '84fe1f9378f34b739e1143828230311';

  constructor(private http: HttpClient) { }

  getWeatherData(cityName:string):Observable<WeatherData>{
    return this.http.get<MovieSearchResponse>(`${this.urlApi}?key=${this.apiKey}&q=${cityName}&aqi=no`)
   }
}
