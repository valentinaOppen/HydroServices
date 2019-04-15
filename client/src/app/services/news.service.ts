import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { News } from '../models/news';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class NewsService 
{

  API_URI = 'http://localhost:8080/HydroServices/server/public/api';
  
  constructor(private http:HttpClient) { }

  getNewsVideos()
  {    
    return this.http.get(`${this.API_URI}/newsVideos`);    
  }

  getNewsImgs()
  {    
    return this.http.get(`${this.API_URI}/newsImages`);    
  }


}
