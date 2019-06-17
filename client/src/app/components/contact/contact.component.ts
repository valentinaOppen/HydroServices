import { Component, OnInit, ViewChild } from '@angular/core';
import { ContactService } from '../../services/contact.service';
import { Contact } from '../../models/contact';
import { FormGroup, FormBuilder, Validators } from "@angular/forms";

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  form:FormGroup;
  enviado:string = 'false';
  captchaResponse:string = 'false';    
  error:string = 'false';
  robot:string = 'false';

  contact:Contact =
  {
    name:'',
    email:'',
    phone:'',
    subject:'',
    message:'',  
    captcha:''  
  }

  constructor(private fb: FormBuilder
            ,private contactService:ContactService) 
            { 
              this.createForm();
            }

  ngOnInit() 
  { 
    this.createForm();    
  }

  resolved(captchaResponse: string) 
  {
    // console.log(`Resolved captcha with response: ${captchaResponse}`);
    console.log("RESPONSE");
    console.log("CAPTCHA RESPONSE", captchaResponse);
    this.captchaResponse = 'true';    
  } 

  createForm()
  {
    this.form = this.fb.group({
      // recaptcha: ['', Validators.required],
      recaptcha : [''],
      name:['', Validators.required],
      email:[''],
      phone:[''],
      subject:[''],
      message:[''],      
    });
  }

  sendForm()
  {               
    console.log("CAPT", this.captchaResponse);

    if(this.captchaResponse=='true')
    {
      console.log("ENTRO");
      this.contact.name = this.form.get('name').value;
      this.contact.email = this.form.get('email').value;
      this.contact.phone = this.form.get('phone').value;
      this.contact.subject = this.form.get('subject').value;
      this.contact.message = this.form.get('message').value;      
  
      this.contactService.sendForm(this.contact).subscribe(
        res => 
        {                 
          // this.enviado = 'true';
        },
        err => console.error(err)
      );
  
      this.enviado = 'true';
      this.form.reset();
    }
    else
    {
      this.robot='true';
      this.enviado = 'false';
    }
    
  }

  // getCurrentResponse(): void {
  //   const currentResponse = this.captchaElem.getCurrentResponse();
  //   if (!currentResponse) {
  //     alert('There is no current response - have you submitted captcha?');
  //   } else {
  //     alert(currentResponse);
  //   }
  // }


}
