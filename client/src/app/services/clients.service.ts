import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Client } from '../models/client';
import { FormGroup, Form } from "@angular/forms";

@Injectable({
  providedIn: 'root'
})
export class ClientsService 
{
  API_URI = 'http://localhost:8080/HydroServices/server/public/api';
  // API_URI = 'http://www.hydroservices.com.ar/server/public/api';
  
  constructor(private http:HttpClient) { }

  getClients()
  {    
    return this.http.get(`${this.API_URI}/clients`);    
  }

  saveClient(client:Client)
  {
    return this.http.post(`${this.API_URI}/clients/new`, client);
  }

  deleteClient(id:number)
  {    
    return this.http.delete(`${this.API_URI}/clients/delete/${id}`);
  }

  // deleteGame(id:string)
  // {
  //   return this.http.delete(`${this.API_URI}/games/${id}`);
  // }

}
