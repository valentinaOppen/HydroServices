import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { ListServicesComponent } from './components/list-services/list-services.component';
import { IndexComponent } from './components/index/index.component';
import { RouterModule, Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'client';
  public languageSelected:string;  
  private router:Router;

  constructor(public translate:TranslateService, 
              private _router:Router)
  {
    this.translate.addLangs(['es', 'en']);
    this.translate.setDefaultLang('es');
    
    // this.languageSelected = this.translate.getDefaultLang();    
  }

  // changeLanguage()
  // {    
  //   if(this.languageSelected=='es')
  //   {      
  //     this.translate.setDefaultLang('en');
  //     this.languageSelected = this.translate.getDefaultLang();                    
  //   }
  //   else
  //   {          
  //     this.translate.setDefaultLang('es');
  //     this.languageSelected = this.translate.getDefaultLang();       
  //   }    
  // }
}
