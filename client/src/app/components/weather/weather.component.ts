import { Component, OnInit } from '@angular/core';
import { GeolocationService } from '../../services/geolocation.service';
import { WeatherService } from '../../services/weather.service';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css']
})
export class WeatherComponent implements OnInit 
{
  latitude: number;
  longitude: number;
  weatherCondition: string;
  cityName: string;
  errorMessage: string;
  wind:string;
  humidity:string;
  pressure:string;
  sunset:string;
  sunrise:string;

  constructor(private geolocationService:GeolocationService,
              private weatherService:WeatherService) { }

  ngOnInit() 
  {
    this.geolocationService.getCoordinates().subscribe(result => {
      console.log(result);
      this.latitude = result.coords.latitude;
      this.longitude = result.coords.longitude;
      this.weatherService.getTodayWeather(this.latitude, this.longitude).subscribe(weatherData => {
        this.weatherCondition = weatherData.list[0].weather[0].main;
        this.cityName = weatherData.city.name;
        this.wind = weatherData.list[0].wind.speed;  
        this.humidity = weatherData.list[0].main.humidity;      
        this.pressure = weatherData.list[0].main.pressure;
        this.sunrise = weatherData.list[0].sys.sunrise;
        this.sunset = weatherData.list[0].sys.sunset;
        console.log(weatherData);
      },
       error => this.errorMessage = error
      );
    });
  }

}
