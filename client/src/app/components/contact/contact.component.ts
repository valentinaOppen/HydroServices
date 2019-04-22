import { Component, OnInit } from '@angular/core';
import { ContactService } from '../../services/contact.service';
import { Contact } from '../../models/contact';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  contact:Contact =
  {
    name:'',
    email:'',
    phone:'',
    subject:'',
    message:''
  }

  constructor(private contactService:ContactService) { }

  ngOnInit() {
  }

  sendForm()
  {    
    this.contactService.sendForm(this.contact).subscribe(
      res => 
      {                 
      },
      err => console.error(err)
    );
  }


}
