import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Invoice } from 'src/app/interfaces/invoice';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class InvoiceSrvService {
  id: any;
  invoices: Invoice[] = [];
  constructor(private http: HttpClient) {}
  getInvoices() {
    return this.http.get<Invoice[]>(environment.urlAPI + 'invoices');
  }

  addInvoice(invoice: Invoice) {
    return this.http.post(environment.urlAPI + 'invoices', invoice);
  }

  deleteInvoice(id: number) {
    return this.http.delete(environment.urlAPI + 'invoices/' + id);
  }

  editInvoice(body: any, id: number) {
    return this.http.put(environment.urlAPI + 'invoices/' + id, body);
  }
}
