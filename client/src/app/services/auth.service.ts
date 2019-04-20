// import { AuthService } from 'src/app/services/auth.service';

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

interface myData
{
  success:boolean,
  message:string
}

@Injectable(
  {
    providedIn:'root'
  }
)
export class AuthService
{
  private loggedInStatus = false;
  private ret;

  constructor(private http:HttpClient){}

  setLoggedId(value: boolean)
  {
    this.loggedInStatus = value;
  }

  get isLoggedIn()
  {
    return this.loggedInStatus;
  }

  getUserDetails(username,password)
  {
    return this.http.post<myData>('http://localhost:8080/HydroServices/server/public/api/auth.php',    
    {
      username, 
      password
    })
  }
}