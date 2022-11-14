import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HomePage } from './pages/home/home.page';
import { UsersPage } from './pages/users/users.page';
import { NavComponent } from './components/nav/nav.component';
import { FooterComponent } from './components/footer/footer.component';
import { ClientsPage } from './pages/clients/clients.page';
import { AddclientPage } from './pages/clients/addclient/addclient.page';
import { HttpClientModule } from '@angular/common/http';
import { InvoicesPage } from './pages/invoices/invoices.page';
import { AuthModule } from './auth/auth.module';
import { InvoicesDetailsPage } from './pages/invoices/invoices-details/invoices-details.page';
import { AddInvoiceComponent } from './pages/invoices/add-invoice/add-invoice.component';

@NgModule({
  declarations: [
    AppComponent,
    HomePage,

    UsersPage,
    NavComponent,
    FooterComponent,
    ClientsPage,
    AddclientPage,

    InvoicesPage,
    InvoicesDetailsPage,
    AddInvoiceComponent,
  ],
  imports: [BrowserModule, AuthModule, AppRoutingModule, NgbModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
