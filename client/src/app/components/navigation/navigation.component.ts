import { Component, OnInit } from '@angular/core';
import { AppComponent } from '../../app.component';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit {
  
  language:string;


  constructor(private appComponent:AppComponent) {
    this.language = this.appComponent.languageSelected;
   }

  ngOnInit() {    
  }

  changeLanguage()
  {
    this.appComponent.changeLanguage();
  }

  

}
