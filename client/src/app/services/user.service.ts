import { Observable } from 'rxjs/internal/Observable';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

interface myData {
  message: string,
  success: boolean
}

interface isLoggedIn {
  status: boolean
}

interface logoutStatus {
  success: boolean
}
@Injectable()
export class UserService {

  constructor(private http: HttpClient) { }

  getSomeData() {
    return this.http.get<myData>('http://localhost:8080/HydroServices/server/public//api/database.php')
  }

  isLoggedIn(): Observable<isLoggedIn> {
    return this.http.get<isLoggedIn>('http://localhost:8080/HydroServices/server/public//api/islogged.php')
    
  }

  logout() {
    return this.http.get<logoutStatus>('http://localhost:8080/HydroServices/server/public//api/logout.php')
  }

}