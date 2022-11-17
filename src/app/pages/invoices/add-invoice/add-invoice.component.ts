import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

import { InvoiceSrvService } from '../invoice-srv.service';

@Component({
  selector: 'app-add-invoice',
  templateUrl: './add-invoice.component.html',
  styleUrls: ['./add-invoice.component.css'],
})
export class AddInvoiceComponent implements OnInit {
  @ViewChild('invoice') myForm!: NgForm;
  clients = ['Bruno Stano', 'Dimitri Lazuka', 'Giovanni Urso', 'Luigi Indaco', 'Aras Purbijan'];
  constructor(private invoiceSrv: InvoiceSrvService) {}

  ngOnInit(): void {}

  onSubmit(form: NgForm) {
    return this.invoiceSrv.addInvoice(this.myForm.value).subscribe();
  }
}
