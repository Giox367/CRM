import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegisterPage } from './pages/register/register.page';

const routes: Routes = [
  {
    path: 'users-details',
    loadChildren: () =>
      import('./pages/users-details/users-details.module').then(
        (m) => m.UsersDetailsModule
      ),
  },
  {
    path: 'register',
    component: RegisterPage,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
