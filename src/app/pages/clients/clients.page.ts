import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ClientService } from './client.service';

@Component({
  templateUrl: './clients.page.html',
  styleUrls: ['./clients.page.css'],
})
export class ClientsPage implements OnInit {
  constructor(private http: HttpClient, public clientService: ClientService) {}

  ngOnInit(): void {
    this.clientService.getClients().subscribe((obj: any) => (this.clientService.client = obj));
  }

  deleteClient(obj: any) {
    // this.clientService.client.splice(obj.id, 1);

    this.clientService.getClients().subscribe((obj: any) => (this.clientService.client = obj));
    return this.clientService.deleteClient(obj.id).subscribe();
  }
}
