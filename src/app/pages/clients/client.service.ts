import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Client } from 'src/app/interfaces/client';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class ClientService {
  constructor(private http: HttpClient) {}

  addClient(client: Client) {
    return this.http.post(environment.urlAPI + 'client', client);
  }

  deleteClient(id: number) {
    return this.http.delete(environment.urlAPI + 'client/' + id);
  }
}
