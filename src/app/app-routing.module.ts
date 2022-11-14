import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginPage } from './pages/login/login.page';

const routes: Routes = [
  // {
  //   path: '',
  //   pathMatch: 'full',
  //   redirectTo: 'login-page',
  // },
  {
    path: 'login-page',
    component: LoginPage,
  },
  {
    path: 'users-details',
    loadChildren: () =>
      import('./pages/users-details/users-details.module').then(
        (m) => m.UsersDetailsModule
      ),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
