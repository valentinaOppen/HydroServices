import { Component, OnInit } from '@angular/core';
import { AppService } from '../../services/appService.service';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit {
  
  language:string;


  constructor(private appService:AppService) {
    // this.language = this.appService.languageSelected;
   }

  ngOnInit() {    
  }

  changeLanguage()
  {
    this.appService.changeLanguage();    
  }

  

}
