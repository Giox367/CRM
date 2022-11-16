import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Invoice } from 'src/app/interfaces/invoice';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class InvoiceSrvService {
  invoices: Invoice[] = [];
  constructor(private http: HttpClient) {}
  getInvoices() {
    return this.http.get<Invoice[]>(environment.urlAPI + 'invoices');
  }

  addInvoice(invoice: Invoice) {
    return this.http.post<Invoice>(environment.urlAPI + 'invoice', invoice);
  }
}
