import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HomePage } from './pages/home/home.page';
import { LoginPage } from './pages/login/login.page';
import { RegisterPage } from './pages/register/register.page';
import { UsersPage } from './pages/users/users.page';
import { NavComponent } from './components/nav/nav.component';
import { FooterComponent } from './components/footer/footer.component';
import { ClientsPage } from './pages/clients/clients.page';
import { AddclientPage } from './pages/clients/addclient/addclient.page';
import { InvoicesInvoice } from './pages/invoices/invoices.invoice';
import { InvoicesPage } from './pages/invoices/invoices.page';

@NgModule({
  declarations: [
    AppComponent,
    HomePage,
    LoginPage,
    RegisterPage,
    UsersPage,
    NavComponent,
    FooterComponent,
    ClientsPage,
    AddclientPage,
    InvoicesInvoice,
    InvoicesPage,
  ],
  imports: [BrowserModule, AppRoutingModule, NgbModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
