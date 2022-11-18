import { Component, OnInit } from '@angular/core';
import { Client } from 'src/app/interfaces/client';
import { ClientService } from './client.service';

@Component({
  templateUrl: './clients.page.html',
  styleUrls: ['./clients.page.css'],
})
export class ClientsPage implements OnInit {
  clientEdit?: Client;

  constructor(public clientService: ClientService) {}

  ngOnInit(): void {
    this.clientService.getClients().subscribe((obj: any) => (this.clientService.client = obj));
  }

  onDetails(id: number) {
    this.clientService.getClient(id).subscribe((obj: any) => (this.clientService.clientEdit = obj));
  }

  deleteClient(obj: any) {
    // this.clientService.client.splice(obj.id, 1);

    this.clientService.getClients().subscribe((obj: any) => (this.clientService.client = obj));
    return this.clientService.deleteClient(obj.id).subscribe();
  }
}
