import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Service } from '../models/service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ServicesService 
{
  API_URI = 'http://localhost:8080/HydroServices/server/public/api';
  // API_URI = 'http://www.hydroservices.com.ar/server/public/api';
      
  constructor(private http:HttpClient) { }

  getServices()
  {    
    return this.http.get(`${this.API_URI}/services`);    
  }

}
