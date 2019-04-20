import { Component, OnInit } from '@angular/core';
import { ClientsService } from '../../services/clients.service';

@Component({
  selector: 'app-clients-list',
  templateUrl: './clients-list.component.html',
  styleUrls: ['./clients-list.component.css']
})

export class ClientsListComponent implements OnInit 
{

  clients: any = [];    

  constructor(private clientsService:ClientsService) { }

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

}
