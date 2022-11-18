import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { User } from 'src/app/interfaces/user';
import { UsersService } from '../../users/users.service';

import { InvoiceSrvService } from '../invoice-srv.service';

@Component({
  selector: 'app-add-invoice',
  templateUrl: './add-invoice.component.html',
  styleUrls: ['./add-invoice.component.css'],
})
export class AddInvoiceComponent implements OnInit {
  @ViewChild('invoice') myForm!: NgForm;
  user: User[] = [];
  space: string = ' ';
  constructor(private invoiceSrv: InvoiceSrvService, private userService: UsersService) {}

  ngOnInit(): void {
    this.userService.getUser().subscribe((obj: any) => (this.user = obj));
  }

  onSubmit() {
    return this.invoiceSrv.addInvoice(this.myForm.value).subscribe((obj: any) => this.invoiceSrv.invoices.push(obj));
  }
}
