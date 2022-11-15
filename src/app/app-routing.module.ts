import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePage } from './pages/home/home.page';
import { UsersPage } from './pages/users/users.page';
import { ClientsPage } from './pages/clients/clients.page';
import { InvoicesPage } from './pages/invoices/invoices.page';
import { InvoicesDetailsPage } from './pages/invoices/invoices-details/invoices-details.page';
import { AuthGuard } from './auth/auth.guard';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'home',
  },
  {
    path: 'home',
    component: HomePage,
  },
  {
    path: 'users',
    component: UsersPage,
    canActivate: [AuthGuard],
  },
  {
    path: 'invoices',
    component: InvoicesPage,
    canActivate: [AuthGuard],
  },
  {
    path: 'clients',
    component: ClientsPage,
    canActivate: [AuthGuard],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
