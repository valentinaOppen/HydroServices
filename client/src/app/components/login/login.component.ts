import { AuthService } from 'src/app/services/auth.service';
import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';
import { Router } from '@angular/router';
import { UserInterface } from '../../models/user';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {

  user:UserInterface = 
  {
    email:'',
    password:''
  }

  constructor(private router: Router,              
              private userService:UserService ) { }
  

  ngOnInit(){}


  enviar()
  {    
    this.userService.post(this.user)
    .subscribe(                 
      res => 
      {      
        console.log("ENT");  
        if(res['token'])
        {
          console.log("TOKEN:"+res['token']);
          localStorage.setItem('token', res['token']);
          this.router.navigate(['/admin']);
        }        
      },
      err => console.error(err)
    );    
    
  }

  public logOut()
  {
    try {
      localStorage.setItem('token', null);
      this.router.navigate(['/index']);
    } catch (error) {
      return false;
    }
  }

  
}

