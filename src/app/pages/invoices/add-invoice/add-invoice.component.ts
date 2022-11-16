import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-add-invoice',
  templateUrl: './add-invoice.component.html',
  styleUrls: ['./add-invoice.component.css'],
})
export class AddInvoiceComponent implements OnInit {
  @ViewChild('invoice') myForm!: NgForm;
  constructor() {}

  ngOnInit(): void {}
  addInvoice() {}
}
