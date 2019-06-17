import { NavigationComponent } from './../navigation/navigation.component';
import { Component, OnInit } from '@angular/core';
import { Router, RouterModule, ActivatedRoute } from '@angular/router';
import { AppService } from '../../services/appService.service';
import { Location } from '@angular/common'

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {
  
  link:string;
  language:string;
  redirect:boolean = true;
  constructor(public route:ActivatedRoute, 
              public router:Router, 
              public appService:AppService, 
              private navigation:NavigationComponent,
              private location:Location) { }

  ngOnInit() 
  {    
    this.link = this.route.snapshot.params.link;   
  }    

  ngAfterViewInit()
  {
     
    if(this.redirect)
    {
      this.redirectDiv();
    }    
  }

  public redirectDiv()
    {
      // if(this.redirect)
      // {
        switch(this.link)
        {
          case 'services':
          // this.navigation.divServices();   
          document.getElementById('btnServices').click();
          this.redirect = false;
          this.location.replaceState('index');
          break;
          case 'clients':this.navigation.divClients();
          this.redirect = false;
          this.location.replaceState('index');
          break;
          case 'contact':this.navigation.divContact();
          this.redirect = false;
          this.location.replaceState('index');
          break;      
        }
      // }
    }

}
