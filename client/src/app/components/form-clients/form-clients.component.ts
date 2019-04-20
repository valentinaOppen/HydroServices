import { Component, OnInit } from '@angular/core';
import { ClientsService } from '../../services/clients.service';
import { Client } from './../../models/client';
import { ElementRef, ViewChild} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import { ActivatedRoute, Router } from '@angular/router'

@Component({
  selector: 'app-form-clients',
  templateUrl: './form-clients.component.html',
  styleUrls: ['./form-clients.component.css']
})
export class FormClientsComponent implements OnInit {

  form: FormGroup;
  loading: boolean = false; 
  id:number;

  client: Client =
  {
    clie_id:null,
    clie_name:'',
    clie_img:null
  };

  edit:boolean = false;

  @ViewChild('fileInput') fileInput: ElementRef;

  constructor(private fb: FormBuilder,
              private clientsService:ClientsService,
              private  router:Router,
              private activatedRoute:ActivatedRoute) 
  { 
    this.createForm();    
  }

  ngOnInit() { }

  saveNewClient()
  {            
    this.clientsService.saveClient(this.client).subscribe(
      res=>
      {
        console.log(res);                
      },
      err => console.error(err)
    );
  }

  createForm()
  {
    this.form = this.fb.group({
      name:['', Validators.required],
      avatar:null
    });
  }

  onFileChange(event) {
    let reader = new FileReader();
    if(event.target.files && event.target.files.length > 0) 
    {
      let file = event.target.files[0];
      reader.readAsDataURL(file);
      reader.onload = () => {
        this.form.get('avatar').setValue({
          filename: file.name,
          filetype: file.type,
          value:reader.result
          // value: reader.result.split(',')[1]
        })
      };
    }
  }

  onSubmit() 
  {
    const formModel = this.form.value;
    this.loading = true;
        
    this.client.clie_name = this.form.get('name').value;
    this.client.clie_img = this.form.get('avatar').value.value;
    
    console.log(this.client);

    setTimeout(() => 
    {
      this.loading = false;
    }, 1000);   

    this.saveNewClient();

  }

  clearFile() {
    this.form.get('avatar').setValue(null);
    this.fileInput.nativeElement.value = '';
  }


}
