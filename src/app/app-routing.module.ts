import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomePage } from './pages/home/home.page';
import { UsersPage } from './pages/users/users.page';
import { ClientsPage } from './pages/clients/clients.page';
import { InvoicesPage } from './pages/invoices/invoices.page';
import { InvoicesDetailsPage } from './pages/invoices/invoices-details/invoices-details.page';

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
  },
  {
    path: 'invoices',
    component: InvoicesPage,
  },
  {
    path: 'clients',
    component: ClientsPage,
  },
  {
    path: 'users-details',
    component: UsersPage,
  },
  {
    path: 'home',
    component: HomePage,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
