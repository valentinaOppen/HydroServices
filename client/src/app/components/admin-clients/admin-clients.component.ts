import { Component, OnInit } from '@angular/core';
import { ClientsService } from '../../services/clients.service';
import { Client } from './../../models/client';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-clients',
  templateUrl: './admin-clients.component.html',
  styleUrls: ['./admin-clients.component.css']
})

export class AdminClientsComponent implements OnInit 
{
  selectedFile = null;
  clients: any = [];

  client: Client =
  {
    clie_name:'',
    clie_img:null
  };

  constructor(private clientsService:ClientsService, private router:Router) { }

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

}
