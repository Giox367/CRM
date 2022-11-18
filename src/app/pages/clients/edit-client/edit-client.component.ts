import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { switchMap } from 'rxjs';
import { Client } from 'src/app/interfaces/client';
import { ClientService } from '../client.service';

@Component({
  selector: 'app-edit-client',
  templateUrl: './edit-client.component.html',
  styleUrls: ['./edit-client.component.css'],
})
export class EditClientComponent implements OnInit {
  client: Client[] = [];
  clientEdit!: Client;

  @ViewChild('f') form!: NgForm;

  constructor(public clientService: ClientService) {}

  ngOnInit(): void {
    this.clientService
      .getClients()
      .pipe(switchMap((obj: any) => obj))
      .subscribe((obj: any) => this.client.push(obj));
  }

  onSubmit() {
    return this.clientService.editClient(this.form.value).subscribe((obj: any) => (this.clientService.client = obj));
  }
}
