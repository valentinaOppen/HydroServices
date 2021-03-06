import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Contact } from '../models/contact';

@Injectable({
  providedIn: 'root'
})
export class ContactService 
{
  // API_URI = 'http://localhost:8080/HydroServices/server/public/api';
  API_URI = 'http://www.hydroservices.com.ar/server/public/api';

  constructor(private http:HttpClient) { }

  sendForm(contact:Contact)
  {
    return this.http.post(`${this.API_URI}/contact`, contact);
  }
}
