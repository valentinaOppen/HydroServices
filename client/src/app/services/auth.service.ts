
import * as jwt_decode from "jwt-decode";
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Router }  from '@angular/router';
import { decode } from 'punycode';
import { getToken } from '@angular/router/src/utils/preactivation';

@Injectable(
  {
    providedIn:'root'
  }
)

export class AuthService implements CanActivate
{
 
  public name: string;
  private _token: string;  

  constructor(private router: Router)
  {
    this._token = localStorage.getItem('token');
  }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | Promise<boolean> {

      let url: string = state.url;      
      if ( this.isLogued() )
      {        
        this.router.navigate[url];
        return true;
      }
      else
      {                
        this.router.navigate(['/login']);
        return !true;
      }
}

getToken(): string {
  return localStorage.getItem('token');
}

isTokenExpired(token?: string): boolean 
{
  try 
  {
   token = this.getToken();
   const date = this.getTokenExpirationDate(token);
  console.log("DATE"+date);
  if(date === undefined) return false;
  
  return (date.valueOf() > new Date().valueOf());
  } catch (error) 
  {
    return false;
  }
  
  
}

getTokenExpirationDate(token: string): Date {
  const decoded = jwt_decode(token);

  if (decoded.exp === undefined) return null;

  const date = new Date(0); 
  date.setUTCSeconds(decoded.exp);
  return date;
}

  public isLogued()
  {
    return this.isTokenExpired();
  }

  public logOut()
  {
    try {
      localStorage.setItem('token', null);
      this.router.navigate(['/login']);
    } catch (error) {
      return false;
    }
  }


}
  