import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { UsersService } from '../../users/users.service';
import { InvoiceSrvService } from '../invoice-srv.service';
import { User } from 'src/app/interfaces/user';
import { HttpClient } from '@angular/common/http';
import { Invoice } from 'src/app/interfaces/invoice';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-edit-invoice',
  templateUrl: './edit-invoice.component.html',
  styleUrls: ['./edit-invoice.component.css'],
})
export class EditInvoiceComponent implements OnInit {
  @ViewChild('invoice') myForm!: NgForm;
  invoices: Invoice[] = [];
  user: User[] = [];
  space = ' ';
  constructor(public invoiceSrv: InvoiceSrvService, public userService: UsersService, private http: HttpClient) {}

  ngOnInit(): void {
    this.invoiceSrv.getInvoices().subscribe((data) => (this.invoiceSrv.invoices = data));
    this.userService.getUser().subscribe((obj: any) => (this.user = obj));
  }
  onSubmit() {
    this.invoiceSrv.editInvoice(this.myForm.value, this.invoiceSrv.id!).subscribe();
    this.http.get<Invoice[]>(environment.urlAPI + 'invoices').subscribe((data) => (this.invoiceSrv.invoices = data));
    this.invoiceSrv.getInvoices().subscribe((data) => (this.invoiceSrv.invoices = data));
  }
}
