import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Achievements } from '../models/achievements';

@Injectable({
  providedIn: 'root'
})
export class AchievementsService 
{    
  // API_URI = 'http://localhost:8080/HydroServices/server/public/api';
  API_URI = 'http://www.hydroservices.com.ar/server/public/api';    
  
  constructor(private http:HttpClient) { }

  getAchiev()
  {    
    return this.http.get(`${this.API_URI}/achievements`);    
  }

  saveAchiev(achiev:Achievements)
  {    
    return this.http.put(`${this.API_URI}/achievements/edit`, achiev);
  }
}
