import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ClientsService 
{
  API_URI = 'http://localhost:8080/HydroServices/server/public/api';
  
  constructor(private http:HttpClient) { }

  getClients()
  {    
    return this.http.get(`${this.API_URI}/clients`);    
  }
}
