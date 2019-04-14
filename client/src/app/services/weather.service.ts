import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  configUrl:string = "https://api.openweathermap.org/data/2.5/forecast";
  appId:string = 'dcf6d484219a81c3db429c65cb9587e7';
  constructor(private http: HttpClient) { }

  getTodayWeather(lat, long ): Observable<any> {
    const param: any = {'lat': lat, 'lon': long, 'APPID': this.appId };
    return this.http.get(this.configUrl, { params: param });
 }
}
