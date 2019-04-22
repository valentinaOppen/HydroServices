import { Component, OnInit, ElementRef } from '@angular/core';
import { AppService } from '../../services/appService.service';
import { ServicesComponent } from '../services/services.component';
import { NewsComponent } from '../news/news.component';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit {
  
  language:string;


  constructor(private appService:AppService,private elemRef: ElementRef,
    private serviceComponente:ServicesComponent,
    private newsComponent:NewsComponent) 
    {
    // this.language = this.appService.languageSelected;
   }

  ngOnInit() {    
  }

  changeLanguage()
  {
    this.appService.changeLanguage();     
    this.serviceComponente.ngOnInit();   
    this.newsComponent.ngOnInit();
  }

  //  divServices() 
  // {    
  //   console.log(this.elemRef.nativeElement.offsetTop);
  //   // document.querySelector('.service').scrollIntoView({ behavior: 'smooth', block:'start' });
  //   document.querySelector('.service').scrollTop
  // }

  divServices()
  {
    var ubic = document.getElementById('services').offsetTop;    
    window.scrollTo(
      {
         top: ubic,
         behavior: "smooth"
    });;    
}

divClients()
  {
    var ubic = document.getElementById('clients').offsetTop;    
    window.scrollTo(
      {
         top: ubic,
         behavior: "smooth"
    });;    
}

divNews()
  {
    var ubic = document.getElementById('news').offsetTop;    
    window.scrollTo(
      {
         top: ubic,
         behavior: "smooth"
    });;    
}

divContact()
  {
    var ubic = document.getElementById('contact').offsetTop;    
    window.scrollTo(
      {
         top: ubic,
         behavior: "smooth"
    });;    
}

}
