import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { Component, OnInit } from '@angular/core';
import { Router }  from '@angular/router';

@Component({
  selector: 'app-admin-navigation',
  templateUrl: './admin-navigation.component.html',
  styleUrls: ['./admin-navigation.component.css']
})
export class AdminNavigationComponent implements OnInit {

  btnOpen:string = 'true';  

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

  openNav() {
    document.getElementById("mySidenav").style.width = "250px";
    document.getElementById("main").style.marginLeft = "250px";
    this.btnOpen = 'false';
  }
  
  closeNav() {
    document.getElementById("mySidenav").style.width = "0";
    document.getElementById("main").style.marginLeft= "0";
    this.btnOpen = 'true';
  }

}
