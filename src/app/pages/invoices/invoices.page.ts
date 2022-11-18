import { Component, OnInit } from '@angular/core';
import { Invoice } from 'src/app/interfaces/invoice';

import { InvoiceSrvService } from './invoice-srv.service';

@Component({
  templateUrl: './invoices.page.html',
  styleUrls: ['./invoices.page.css'],
})
export class InvoicesPage implements OnInit {
  constructor(public invoiceSrv: InvoiceSrvService) {}

  ngOnInit(): void {
    this.invoiceSrv.getInvoices().subscribe((data) => (this.invoiceSrv.invoices = data));
    console.log();
  }
}
