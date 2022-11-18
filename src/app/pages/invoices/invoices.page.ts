import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Invoice } from 'src/app/interfaces/invoice';
import { environment } from 'src/environments/environment';

import { InvoiceSrvService } from './invoice-srv.service';

@Component({
  templateUrl: './invoices.page.html',
  styleUrls: ['./invoices.page.css'],
})
export class InvoicesPage implements OnInit {
  constructor(public invoiceSrv: InvoiceSrvService, private http: HttpClient) {}

  ngOnInit(): void {
    this.invoiceSrv.getInvoices().subscribe((data) => (this.invoiceSrv.invoices = data));
  }

  deleteInvoice(id: number) {
    this.invoiceSrv.deleteInvoice(id).subscribe();
    this.invoiceSrv.getInvoices().subscribe((data) => (this.invoiceSrv.invoices = data));
  }

  editInvoice(id: number) {
    this.invoiceSrv.id = id;
  }
}
