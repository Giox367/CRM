import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Client } from 'src/app/interfaces/client';
import { environment } from 'src/environments/environment';

@Component({
  templateUrl: './clients.page.html',
  styleUrls: ['./clients.page.css'],
})
export class ClientsPage implements OnInit {
  client: Client[] = [];
  constructor(private http: HttpClient) {}

  ngOnInit(): void {}

  ngDoCheck(): void {
    this.http.get(environment.urlAPI + 'client').subscribe((obj: any) => (this.client = obj));
  }

  deleteClient(id: number) {
    this.http.delete(environment.urlAPI + 'client/' + id);
  }
}
