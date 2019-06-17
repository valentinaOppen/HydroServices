
import { NewsComponent } from './../news/news.component';
import { VideosComponent } from './../videos/videos.component';
import { Component, OnInit } from '@angular/core';
import { AppService } from '../../services/appService.service';
import { Router } from '@angular/router';
import { PhotosComponent } from '../photos/photos.component';

@Component({
  selector: 'app-navigation-secondary',
  templateUrl: './navigation-secondary.component.html',
  styleUrls: ['./navigation-secondary.component.css']
})
export class NavigationSecondaryComponent implements OnInit {

  constructor(private appService:AppService,
              public router:Router,
              private photos:PhotosComponent ,
              private videos:VideosComponent,
              private news:NewsComponent
              ) { }

  ngOnInit() 
  {

  }


  openNav() {
    document.getElementById("mySidenav").style.width = "75%";
  }
  
  closeNav() {
    document.getElementById("mySidenav").style.width = "0";
  }


  changeLanguage()
  {
    this.appService.changeLanguage();                
    this.reloadLanguage();
  }


  private reloadLanguage() {
    console.log("RELOAD");
    console.log(this.router.url);
    switch (this.router.url) {
      case "/photos":
      console.log("PHOTSO");
        this.photos.ngOnInit();
        break;
      case "/videos":
      console.log("VIDEOS");
        this.videos.ngOnInit();
        break;
      case "/novedades":
      console.log("NEWS");
        this.news.ngOnInit();
        break;
    }
  }

  
}
