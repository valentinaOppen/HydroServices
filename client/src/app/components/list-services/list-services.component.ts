import { Component, OnInit } from '@angular/core';
import { ServicesService } from '../../services/services.service';
import { AppComponent } from '../../app.component';

@Component({
  selector: 'app-list-services',
  templateUrl: './list-services.component.html',
  styleUrls: ['./list-services.component.css']
})

export class ListServicesComponent implements OnInit 
{

  services: any = [];

  constructor(private servicesService:ServicesService,
              private appComponent:AppComponent) { }

  language:string;

  ngOnInit() 
  {
    // this.language = this.appComponent.languageSelected;   
    this.language = this.appComponent.translate.getDefaultLang();     
    this.getServices();    
  }
  
  getServices()
  {
    this.servicesService.getServices().subscribe(
      res => this.services = res,
      err => console.error(err)
    );        
  }

}
