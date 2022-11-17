import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Client } from 'src/app/interfaces/client';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class ClientService {
  client: Client[] = [];
  constructor(private http: HttpClient) {}

  getClient(id: number) {
    return this.http.get(environment.urlAPI + 'client/' + id);
  }

  getClients() {
    return this.http.get(environment.urlAPI + 'client');
  }

  addClient(client: Client) {
    return this.http.post(environment.urlAPI + 'client', client);
  }

  deleteClient(id: number) {
    return this.http.delete(environment.urlAPI + 'client/' + id);
  }
}
