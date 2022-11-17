import { Component, OnInit } from '@angular/core';
import { Invoice } from 'src/app/interfaces/invoice';

import { InvoiceSrvService } from './invoice-srv.service';

@Component({
  templateUrl: './invoices.page.html',
  styleUrls: ['./invoices.page.css'],
})
export class InvoicesPage implements OnInit {
  invoices!: Invoice[];

  constructor(private invoiceSrv: InvoiceSrvService) {}

  ngOnInit(): void {
    this.invoiceSrv.getInvoices().subscribe((data) => (this.invoices = data));
    console.log();
  }
}
