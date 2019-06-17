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
  // API_URI = 'http://www.hydroservices.com.ar/server/public/api';
  
  constructor(private http:HttpClient) { }

  getNew(id:number)
  {
    return this.http.get(`${this.API_URI}/new/${id}`);    
  }

  getNews()
  {
    return this.http.get(`${this.API_URI}/news`);    
  }

  getNewsTop3()
  {
    return this.http.get(`${this.API_URI}/newsTop3`);    
  }

  getNewsMultimedia()
  {
    return this.http.get(`${this.API_URI}/newsMultimedia`);
  }

  getNewsVideos()
  {    
    return this.http.get(`${this.API_URI}/newsVideos`);    
  }

  getNewsImgs()
  {    
    return this.http.get(`${this.API_URI}/newsImages`);    
  }

  getNewsFor(title:string)
  {
    return this.http.get(`${this.API_URI}/news/getFor/${title}`);    
  }

  getTitles()
  {
    return this.http.get(`${this.API_URI}/newsTitles`);    
  }

  getTitlesEng()
  {
    return this.http.get(`${this.API_URI}/newsTitlesEng`);    
  }

  saveNews(news:News)
  {    
    return this.http.post(`${this.API_URI}/news/savenews`, news);    
  }

  updateNews(id:number, news:News)
  {
    return this.http.put(`${this.API_URI}/news/edit/${id}`, news);    
  }

  deleteNews(id:number)
  {
    return this.http.delete(`${this.API_URI}/news/delete/${id}`);    
  }

}
