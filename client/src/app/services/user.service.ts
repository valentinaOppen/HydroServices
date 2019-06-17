import { Observable } from 'rxjs/internal/Observable';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UserInterface } from '../models/user';

@Injectable()
export class UserService {

  // API_URI = 'http://localhost:8080/HydroServices/server/public/api';
  API_URI = 'http://www.hydroservices.com.ar/server/public/api';

  constructor(private http: HttpClient) { }
 
  get(user: Object)
  {    
    return this.http.get(`${this.API_URI}/user`); 
  }

  post(data: UserInterface)
  {
    return this.http.post(`${this.API_URI}/user/post`, data);
  }


}