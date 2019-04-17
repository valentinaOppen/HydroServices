import { Component, OnInit } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { AppService } from '../../services/appService.service';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {
  
  language:string;
  constructor(public route:ActivatedRoute, public appService:AppService) { }

  ngOnInit() {
    const lang = +this.route.snapshot.paramMap.get('lang'); 

    console.log(lang);

    if(lang == 1)
    {
      console.log("EN");
      this.appService.translate.setDefaultLang('en');
    }

    if(lang == 2)
    {
      console.log("ES");
      this.appService.translate.setDefaultLang('es');
    }
    // if(lang== "ES")
    // {
    //   console.log("IF 2");
    //   if(this.appService.translate.getDefaultLang()=='es')
    //   {
    //     console.log("ESP");
    //     this.appService.translate.setDefaultLang('en');
    //   }
    //   else
    //   {
    //     console.log("ENG");
    //     this.appService.translate.setDefaultLang('es');
    //   }
    // }
    console.log(lang);    
  }

}
