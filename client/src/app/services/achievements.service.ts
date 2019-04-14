import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AchievementsService 
{
  API_URI = 'http://localhost:8080/HydroServices/server/public/api';
  
  constructor(private http:HttpClient) { }

  getAchiev()
  {    
    return this.http.get(`${this.API_URI}/achievements`);    
  }
}
