import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Invoice } from 'src/app/interfaces/invoice';
import { InvoiceSrvService } from '../invoice-srv.service';

@Component({
  selector: 'app-edit-invoice',
  templateUrl: './edit-invoice.component.html',
  styleUrls: ['./edit-invoice.component.css'],
})
export class EditInvoiceComponent implements OnInit {
  @ViewChild('invoice') myForm!: NgForm;
  constructor(public invoiceSrv: InvoiceSrvService) {}

  ngOnInit(): void {
    this.invoiceSrv.getInvoices().subscribe((data) => (this.invoiceSrv.invoices = data));
  }
  onSubmit() {}
}
