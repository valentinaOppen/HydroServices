import { Injectable } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class AppService 
{
  public language: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  public languageSelected:string;  

  constructor(public translate:TranslateService) 
  { 
    this.languageSelected = this.translate.getDefaultLang();
  }

  changeLanguage()
  {    
    if(this.languageSelected=='es')
    {      
      this.translate.setDefaultLang('en');
      this.languageSelected = this.translate.getDefaultLang();  
      this.language.next(false);                        
    }
    else
    {          
      this.translate.setDefaultLang('es');
      this.languageSelected = this.translate.getDefaultLang();       
      this.language.next(true);                 
    }    
  }
}
