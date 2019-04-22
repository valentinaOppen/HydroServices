import { Component, OnInit } from '@angular/core';
import { Router }  from '@angular/router';

@Component({
  selector: 'app-admin-navigation',
  templateUrl: './admin-navigation.component.html',
  styleUrls: ['./admin-navigation.component.css']
})
export class AdminNavigationComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  public logOut()
  {
    try {
      // localStorage.setItem('token', '');
      localStorage.clear();
      this.router.navigate(['/index']);
    } catch (error) {
      return false;
    }
  }


}
