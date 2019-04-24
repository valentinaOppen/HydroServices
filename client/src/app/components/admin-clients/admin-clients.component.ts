import { Component, OnInit } from '@angular/core';
import { ClientsService } from '../../services/clients.service';
import { Client } from './../../models/client';
import { ElementRef, ViewChild} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import { ActivatedRoute, Router } from '@angular/router'

@Component({
  selector: 'app-admin-clients',
  templateUrl: './admin-clients.component.html',
  styleUrls: ['./admin-clients.component.css']
})

export class AdminClientsComponent implements OnInit 
{
  form: FormGroup;
  loading: boolean = false; 
  id:number;

  selectedFile = null;
  clients: any = [];

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
    private activatedRoute:ActivatedRoute) {this.createForm(); }

  ngOnInit() 
  {
    this.getClients();
  }

  getClients()
  {
    this.clientsService.getClients().subscribe(
      res => this.clients = res,
      err => console.error(err)
    );    
  }

  deleteClient(id:number)
  {
    this.clientsService.deleteClient(id).subscribe
    (
      res => 
      {
        this.getClients();
      },
      err => console.error(err)
    );
  }


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
      name:[''],
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

    console.log(this.form);
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
