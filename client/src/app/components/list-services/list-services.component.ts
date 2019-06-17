import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { ServicesService } from '../../services/services.service';
import { AppComponent } from '../../app.component';
import { AppService } from '../../services/appService.service';
import { NgbdModalBasic } from './modal-basic';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-list-services',
  templateUrl: './list-services.component.html',
  styleUrls: ['./list-services.component.css']
})

export class ListServicesComponent implements OnInit 
{

  services: any = [];
  lang:boolean;

  constructor(private servicesService:ServicesService,
              private appComponent:AppComponent,
              public appService:AppService,
              private modalService: NgbModal,
              private route:Router) 
  { 
    this.appService.language.subscribe(value => {
      this.lang = value;
    })
  }

  language:string;
  closeResult: string;
  description:string = "false";
  

  ngOnInit() 
  {
    // this.language = this.appComponent.languageSelected;   
    this.language = this.appComponent.translate.getDefaultLang();     
    this.getServices();    
    // console.log(this.route.url);
    // if(this.route.url=='/index/services')
    // {
    //   this.divServices();
    // }
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
  }
  
  getServices()
  {
    this.servicesService.getServices().subscribe(
      res => this.services = res,
      err => console.error(err)
    );        
  }

  showDescription()
  {
    this.description = "true";
  }

  hideDescription()
  {
    this.description = "false";
  }

  open(content) {
    if(window.innerWidth >= 500) 
    {
      this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
        this.closeResult = `Closed with: ${result}`;
      }, (reason) => {
        this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
      });
    }    
  }

  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return  `with: ${reason}`;
    }
  }

}
