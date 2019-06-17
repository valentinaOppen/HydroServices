import { Component, OnInit } from '@angular/core';
import { AppService } from '../../services/appService.service';
import { ServicesComponent } from '../services/services.component';
import { NewsComponent } from '../news/news.component';
import { toInteger } from '@ng-bootstrap/ng-bootstrap/util/util';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit 
{
  
  language:string;
  open:string;


  constructor(private appService:AppService,
    private serviceComponente:ServicesComponent,
    private newsComponent:NewsComponent) 
    {
    // this.language = this.appService.languageSelected;
    }

  ngOnInit() {   
    window.addEventListener('scroll', this.scroll, true);      
    this.open = 'false';       
  }

  scroll()
  {    
    if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50)
    {      
      document.getElementById('logoNavBar').style.width='50%';
      document.getElementById('containerNavBarGrid').style.height='80px';      
      document.getElementById('containerNavBarGrid').style.padding='.5em 0.5em .5em 1.5em';   
      // document.getElementById('containerNavBarGrid').style.paddingLeft='8%';         
    }    
    else
    {
      document.getElementById('logoNavBar').style.width='68%';
      document.getElementById('containerNavBarGrid').style.height='110px';      
      document.getElementById('containerNavBarGrid').style.padding='1em 0.5em 1em 1.5em';
      // document.getElementById('containerNavBarGrid').style.paddingLeft='1.5em';      
    }
  }

  changeLanguage()
  {
    this.appService.changeLanguage();     
    this.serviceComponente.ngOnInit();   
    this.newsComponent.ngOnInit();
  }

  openNav() {
    document.getElementById("mySidenav").style.width = "100%";
    this.open = 'true';    

  }
  
  closeNav() {
    document.getElementById("mySidenav").style.width = "0";
    this.open = 'false';
  }

  divHeader()
  {
    window.scrollTo(
      {
         top: 0,
         behavior: "smooth"
    });
  }

  divServices()
  {
    var ubic = document.getElementById('services').offsetTop;  
    console.log("services"+document.getElementById('services').offsetTop)  
    window.scrollTo(
      {
         top: ubic,
         behavior: "smooth"
    });    
    this.closeNav();
  }

  divClients()
  {
    var ubic = document.getElementById('clients').offsetTop;          
    window.scrollTo(
      {
         top:ubic,
         behavior: "smooth"
    });    
    this.closeNav();
  } 

divNews()
{
  var ubic = document.getElementById('news').offsetTop;  
  
  window.scrollTo(
    {
        top: ubic,
        behavior: "smooth"
  });    
  this.closeNav();
}

divContact()
  {
    var ubic = document.getElementById('contact').offsetTop;  
    console.log("NEWS"+document.getElementById('news').offsetTop)    
    window.scrollTo(
      {
         top: ubic,
         behavior: "smooth"
    });    
    this.closeNav();
}

}
