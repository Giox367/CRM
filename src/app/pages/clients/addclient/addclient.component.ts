import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';
import { ClientService } from '../client.service';

@Component({
  selector: 'app-addclient',
  templateUrl: './addclient.component.html',
  styleUrls: ['./addclient.component.css'],
})
export class AddclientComponent implements OnInit {
  @ViewChild('f') form!: NgForm;

  constructor(private clientService: ClientService, private router: Router) {}

  ngOnInit(): void {}

  onSubmit() {
    return this.clientService.addClient(this.form.value).subscribe((obj: any) => this.clientService.client.push(obj));
  }
}
