import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Video } from '../models/video';
import { Photo } from '../models/photo';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class MultimediaService 
{

  API_URI = 'http://localhost:8080/HydroServices/server/public/api';
  
  constructor(private http:HttpClient) { }

  getVideos()
  {
    return this.http.get(`${this.API_URI}/videos`);    
  }

  getVideosAll()
  {
    return this.http.get(`${this.API_URI}/videosAll`);    
  }


  getVideo(id:number)
  {
    return this.http.get(`${this.API_URI}/video/${id}`);    
  }

  
  saveVideo(video:Video)
  {    
    console.log("SERV");
    console.log(video);
    return this.http.post(`${this.API_URI}/videos/savevideo`, video);    
  }
  

  deleteVideo(id:number)
  {    
    return this.http.delete(`${this.API_URI}/videos/delete/${id}`);
  }


//PHOTOS

  getPhotos()
  {    
    return this.http.get(`${this.API_URI}/photos`);    
  }

  getPhotosAll()
  {
    return this.http.get(`${this.API_URI}/photosAll`);
  }


  getPhoto(id:number)
  {
    return this.http.get(`${this.API_URI}/photo/${id}`);    
  }

  
  savePhoto(photo:Photo)
  {    
    return this.http.post(`${this.API_URI}/photos/savephoto`, photo);    
  }
  

  deletePhoto(id:number)
  {    
    return this.http.delete(`${this.API_URI}/photos/delete/${id}`);
  }
  
}
